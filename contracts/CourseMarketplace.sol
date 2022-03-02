// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Owned.sol";

/// @title CourseMarketplace
/// @author Luca Lo Forte - Lo Forte Coding
/// @notice CourseMarketplace is a contract that allows users to purchase online courses from the Marketeplace Ethereum Next JS Web app
contract CourseMarketplace is Owned {
    enum State {
        Purchased,
        Activated
    }

    struct Course {
        uint256 id; // 32
        uint256 price; // 32
        bytes32 proof; // 32
        address owner; // 20
        State state; // 1
    }
    
    mapping(bytes32 => Course) private ownedCourses; //Mapping of courseHash to CourseData
    mapping(uint256 => bytes32) private ownedCoursesHash; // Mapping courseId to courseHash
    uint256 private totalOwnedCourses;

    /// Course has already been purchased by this user
    error CourseOwner();

    function purchaseCourse(bytes32 courseId, bytes32 emailHash) external payable {
        // the course hash is gonna be an unique value -> the hash of the courseID + the sender address
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));

        if (userHasCourse(courseHash)) {
            revert CourseOwner();
        }

        bytes32 proof = keccak256(abi.encodePacked(emailHash, courseHash));
        uint256 id = totalOwnedCourses++;
        ownedCoursesHash[id] = courseHash;
        
        ownedCourses[courseHash] = Course({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: State.Purchased
        });
    }

    function getCourseCount() external view returns (uint256) {
        return totalOwnedCourses;
    }

    function getCourseHashAtIndex(uint256 index) external view returns (bytes32) {
        return ownedCoursesHash[index];
    }

    function getCourseByHash(bytes32 courseHash) external view returns (Course memory) {
        return ownedCourses[courseHash];
    }

    function userHasCourse(bytes32 courseHash) private view returns (bool) {
        return ownedCourses[courseHash].owner == msg.sender;
    }
}
