// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Owned {
    address payable private owner;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyOwner {
        require(
             msg.sender == getOwner(),
            "Only the owner of the contract can call this function"
        );
        _;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        owner = payable(newOwner);
    }

    function getOwner() public view returns(address) {
      return owner;
    }
}
