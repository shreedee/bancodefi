#!/usr/bin/env bash

set -e

VERSION="0.13.0"
export FORCE_COLOR=1

INSTALLED_SWITCH=$(dirname -- "${BASH_SOURCE[0]}")/_opam

export OPAM_SWITCH_PREFIX=${OPAM_SWITCH_PREFIX:-$INSTALLED_SWITCH}

export smartml_app_name=SmartPy.sh

install_path=$(dirname "$0")
export smartpy_install_path="$install_path"

usage () {
    echo "Usage:"
    echo "   $0 test        <script> <output> <options>* (execute all test targets)"
    echo "   $0 compile     <script> <output> <options>* (execute all compilation targets)"
    echo "   $0 doc         <script> <output>            (document script)"
    echo "   $0 kind <kind> <script> <output> <options>* (execute all custom targets added by sp.add_target(..., kind=<kind>))"
    echo "   $0 originate-contract --code <file>(.json|.tz) --storage <file>(.json|.tz) --rpc <rpc-url> [--private-key edsk...]"
    echo
    echo "   Parameters:"
    echo "         <script>              : a script containing SmartPy, SmartTS or SmartML code"
    echo "         <output>              : a directory for the results"
    echo "         <kind>                : a custom target kind"
    echo
    echo "   Options:"
    echo "         --purge               : optional, clean output_directory before running"
    echo "         --html                : optional, add html logs and outputs"
    echo "         --protocol <protocol> : optional, select target protocol - default is ithaca"
    echo "         --<flag> <arguments>  : optional, set some flag with arguments"
    echo "         --<flag>              : optional, activate some boolean flag"
    echo "         --no-<flag>           : optional, deactivate some boolean flag"
    echo "         --mockup              : optional, run in mockup (experimental, needs installed source)"
    echo "         --sandbox             : optional, run in sandbox (experimental, needs installed source)"
    echo
    echo "   Protocols: hangzhou | ithaca | jakarta"
}


protocol=PtJakart2xVj7pYXJBXrqHgd82rdkLey5ZeeGwDgPp9rhQUbSqY
#alpha: ProtoALphaALphaALphaALphaALphaALphaALphaALphaDdp3zK

native=no
has_mockup=no
has_sandbox=no
args="$@"
set --
for arg in $args
do
    if [[ "$arg" == --native ]]; then
        native=yes
    elif [[ "$arg" == --no-native ]]; then
        native=no
    elif [[ "$arg" == --mockup ]]; then
        has_mockup=yes
    elif [[ "$arg" == --sandbox ]]; then
        has_sandbox=yes
    elif [[ "$arg" == hangzhou ]]; then
        protocol=PtHangz2aRngywmSRGGvrcTyMbbdpWdpFKuS4uMWxg2RaH9i1qx
        set -- "$@" "$arg"
    elif [[ "$arg" == ithaca ]]; then
        protocol=Psithaca2MLRFYargivpo7YvUr7wUDqyxrdhC5CQq78mRvimz6A
        set -- "$@" "$arg"
    else
        set -- "$@" "$arg"
    fi
done


if [[ "$native" == yes ]]; then
    smartpyc="$install_path/smartpyc"
else
    smartpyc="node --stack-size=4096 $install_path/smartpyc.js"
fi

action=none
case "$1" in
    "" | "help" | "--help" | "-h")
        usage
        action=exit
        ;;
    --version)
        echo "SmartPy Version: $VERSION"
        action=exit
        ;;
    # Aliases to cli-js commands:
    # If you add more, please update Meta.smartpy_dot_sh_aliases
    # in smartML/cli_js/node_main.ml
    "compile")
        [ "$#" -lt 3 ] && { usage; exit 1; }
        action=regular
        kind=compilation
        shift
        ;;
    "test")
        [ "$#" -lt 3 ] && { usage; exit 1; }
        action=regular
        kind=test
        shift
        ;;
    "doc")
        [ "$#" -lt 3 ] && { usage; exit 1; }
        shift
        script="$1"
        output="$2"
        shift 2
        base=`basename "$script"`
        mkdir -p $output
        PYTHONPATH=$install_path python $install_path/smartpyc.py adapt_blocks "$script" "$output/$base"
        PYTHONPATH=$install_path pdoc --html "$output/$base" --force --config sort_identifiers=False -o $output
        action=exit
        ;;
    "kind")
        [ "$#" -lt 4 ] && { usage; exit 1; }
        action=regular
        kind="$2"
        shift 2
        ;;
    "misc")
        shift
        $smartpyc --install $install_path --misc "$@"
        action=exit
        ;;
    "originate-contract")
        "$(dirname $0)/originator.js" "$@"
        action=exit
        ;;
    * )
        ;;
esac

case $action in
    "none" )
        echo "SmartPy.sh. Unknown argument: $*"
        usage
        exit 1
        ;;
    "exit" )
        exit 0
        ;;
    "regular" )
        script="$1"
        output="$2"
        shift 2
        if [[ $has_mockup == yes ]]; then
            MOCKUP=$(mktemp -d "_mockup.XXXXXX")
            tezos-client \
                --protocol $protocol \
                --base-dir $MOCKUP \
                create mockup
            $smartpyc "$script" --kind $kind --output "$output" --install $install_path --mockup $MOCKUP "$@" \
                && rm -rf $MOCKUP
        elif [[ $has_sandbox == yes ]]; then
            scripts/with_sandbox.sh sh -c \
            "$smartpyc $script --kind $kind --output $output --install $install_path $@"
        else
            $smartpyc "$script" --kind $kind --output "$output" --install $install_path "$@"
        fi
        ;;
    * )
        echo "Impossible action"
        exit 1
esac
