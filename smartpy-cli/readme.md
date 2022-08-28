# compiling
./SmartPy.sh compile ./contracts/my_contract.py ./compilation

# tests
./SmartPy.sh test ./contracts/my_contract.py ./compilation

# deploy
./SmartPy.sh originate-contract --code ~/smartpy-cli/compilation/my_contract/step_000_cont_0_contract.tz --storage ./compilation/my_contract/step_000_cont_0_storage.tz --rpc https://ghostnet.smartpy.io --private-key <edsk...>


##
Contract KT1G6Qtph5X8LLMbwfYtpCzLMtgmmP4u5anZ originated!!!