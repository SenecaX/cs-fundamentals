"use strict";
var LinkedList;
(function (LinkedList) {
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    LinkedList.Node = Node;
    // Define the head node
    let head = new Node(5);
    let newNode = new Node(10);
    newNode.next = head;
    head = newNode;
    // Use the linked list
    console.log(head.data); // Output: 10
    // Use the linked list
    if (head.next != null) {
        console.log(head.next.data); // Output: 5
    }
})(LinkedList || (LinkedList = {}));
