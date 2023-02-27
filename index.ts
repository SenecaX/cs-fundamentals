namespace LinkedList {
    export class Node {
      data: number;
      next: Node | null;
  
      constructor(data: number) {
        this.data = data;
        this.next = null;
      }
    }

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
  }
  