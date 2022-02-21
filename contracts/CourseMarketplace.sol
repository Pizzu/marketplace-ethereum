// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CourseMarketplace {
    enum State {
        Purchased,
        Activated,
        Deactivated
    }

    struct Course {
        uint256 id; // 32
        uint256 price; // 32
        bytes32 proof; // 32
        address owner; // 20
        State state; // 1
    }

    //Mapping of courseHash to CourseData
    mapping(bytes32 => Course) private ownedCourses;
    // Mapping courseId to courseHash
    mapping(uint => bytes32) private ownedCourseHash;

    uint private totalOwnedCourses;

    // courseID -> 022720b6-e598-40ee-9879-d9800c56bceb
    // courseID hex -> 0x3032323732306236653539383430656539383739643938303063353662636562
    // Address -> 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
    // courseId hex + address -> 30323237323062366535393834306565393837396439383030633536626365625B38Da6a701c568545dCfcB03FcB875f56beddC4
    // keccak256 -> 2f61d53bb8a08265112c9c825311f7e4fe977d42d140f7eb1bfdc92125fe712d

    function purchaseCourse(bytes32 courseId) external payable {
        // the course hash is gonna be an unique value -> the hash of the courseID + the sender address
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));
        uint id = totalOwnedCourses++;
        ownedCourseHash[id] = courseHash;
    }
}
