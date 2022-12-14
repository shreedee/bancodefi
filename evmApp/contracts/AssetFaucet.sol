//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

//test ERC721 contract

contract AssetFaucet is ERC721Enumerable{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("CLRBX Faucet","CLRBX-f")
    {}

    function giveMe() 
    external
    returns (uint256)
    {
        _tokenIds.increment();

        uint256 newNftTokenId = _tokenIds.current();
        _mint(msg.sender, newNftTokenId);
        //_setTokenURI(newNftTokenId, tokenURI);

        return newNftTokenId;
    }
}
