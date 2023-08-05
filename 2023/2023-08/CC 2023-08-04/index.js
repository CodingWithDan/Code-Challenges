//=====================================
//LC. 206. Reverse Linked List
//=====================================

// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

 

// Constraints:

//     The number of nodes in the list is the range [0, 5000].
//     -5000 <= Node.val <= 5000

var reverseList = function(head) {
    
    reverseList() //{
        let current = this.head
        let prev = null
        while (current) {
            const temp = current.next
            current.next = prev
            prev = current
            current = temp
        }
        return prev
        }
//};

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.next || null
    }
}

