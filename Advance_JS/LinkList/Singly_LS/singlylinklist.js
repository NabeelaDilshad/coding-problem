


// insertion in linklist 
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Insert at the start
    insertAtStart(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    // Insert at the end
    insertAtEnd(value) {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Insert at a specific index
    insertAtIndex(value, index) {
      if (index < 0 || index > this.size) {
        console.log("Invalid index");
        return;
      }
  
      let newNode = new Node(value);
      if (index === 0) {
        this.insertAtStart(value);
      } else {
        let current = this.head;
        let prev = null;
        let count = 0;
  
        while (count < index) {
          prev = current;
          current = current.next;
          count++;
        }
  
        prev.next = newNode;
        newNode.next = current;
        this.size++;
      }
    }
  
    // Print the list
    printList() {
      let current = this.head;
      let output = "";
      while (current) {
        output += current.value + " → ";
        current = current.next;
      }
      console.log(output + "null");
    }
  }
  
  // Usage Example
  let list = new SinglyLinkedList();
  list.insertAtStart(10);
  list.insertAtStart(20);
  list.insertAtEnd(30);
  list.insertAtEnd(40);
  list.insertAtIndex(25, 2);
  list.printList(); // Output: 20 → 10 → 25 → 30 → 40 → null
  



  
