class LinkedList {
  constructor(value) {
    this.root = new Node(value);
  }

  append(value) {
    let tmp = this.root;
    while (tmp.nextNode) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = new Node(value);
  }
  prepend(value) {
    let newHead = new Node(value, this.root);
    this.root = newHead;
  }
  at(index) {
    if (index < 0) return null;
    let tmp = this.root;
    for (let i = 0; i < index; i++) {
      if (tmp.nextNode) {
        tmp = tmp.nextNode;
      } else {
        return null;
      }
    }
    return tmp;
  }
  pop() {
    if (this.size < 1) return "You can't delete root node";
    else {
      let itemBeforeLast = this.at(this.size - 1);
      itemBeforeLast.nextNode = null;
      return itemBeforeLast;
    }
  }
  contains(value) {
    if (this.size < 0) {
      return null;
    } else {
      let tmp = this.head;
      while (tmp) {
        if (tmp.value === value) return true;
        else {
          tmp = tmp.nextNode;
        }
      }
      return false;
    }
  }
  find(value) {
    if (this.size < 0) {
      return null;
    } else {
      let tmp = this.head;
      for (let i = 0; i <= this.size; i++) {
        if (tmp.value === value) return i;
        tmp = tmp.nextNode;
      }
      return null;
    }
  }
  toString() {
    const base = `( ${this.head.value} )`;

    if (this.size <= 0) return base;
    else {
      let tmp = this.head.nextNode;
      let childNodes = ` -->`;

      while (tmp) {
        if (tmp.value) childNodes += ` ( ${tmp.value} ) -->`;
        if (tmp.nextNode === null) {
          childNodes += ` ( null )`;
        }
        tmp = tmp.nextNode;
      }
      return base + childNodes;
    }
  }
  insertAt(value, index) {
    if (index === 0) {
      let nextNodeElement = this.head;

      this.root = new Node(value, nextNodeElement);

      return;
    } else if (index === this.size) {
      itemBeforeLast.nextNode = new Node(value);
    } else {
      let itemBeforeIndex = this.at(index - 1);
      let current = this.at(index);
      itemBeforeIndex.nextNode = new Node(value, current);
    }
  }
  get size() {
    let tmp = this.root;
    if (!tmp) return null;

    let indexCount = 0;
    while (tmp.nextNode) {
      indexCount++;
      tmp = tmp.nextNode;
    }
    return indexCount;
  }

  get head() {
    return this.root;
  }
  get tail() {
    let tmp = this.root;
    if (!tmp) return null;
    while (tmp.nextNode) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const linkedList = new LinkedList("b");
linkedList.append("erenova");
linkedList.append("chehehe");
linkedList.append("sdhdfhfsdh");
linkedList.append("mustafa");
linkedList.prepend("veusel ubadekaya");
linkedList.append("ben sonuncu elemaaang");
console.log(linkedList.toString());
linkedList.insertAt("xcf", 0);

console.log(linkedList.toString());
