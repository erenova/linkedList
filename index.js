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
    const nullItem = ` ( null )`;
    const arrowItem = ` -->`;
    if (this.size <= 0) return base + arrowItem + nullItem;
    else {
      let tmp = this.head.nextNode;
      let childNodes = ` -->`;

      while (tmp) {
        if (tmp.value) childNodes += ` ( ${tmp.value} )` + arrowItem;
        if (tmp.nextNode === null) {
          childNodes += nullItem;
        }
        tmp = tmp.nextNode;
      }
      return base + childNodes;
    }
  }
  insertAt(value, index) {
    if (this.size + 1 === index) return this.append(value);
    if (this.size < index) return "No such index";

    if (index === 0) {
      let nextNodeElement = this.head;

      this.root = new Node(value, nextNodeElement);

      return;
    } else if (index === this.size) {
      let itemBeforeIndex = this.at(index - 1);
      let nextItem = null;
      if (this.at(index)) nextItem = this.at(index);
      itemBeforeIndex.nextNode = new Node(value, nextItem);
    } else {
      let itemBeforeIndex = this.at(index - 1);

      itemBeforeIndex.nextNode = new Node(value, this.at(index + 1));
    }
  }
  removeAt(index) {
    if (index < 0) return "No such item";
    if (index === 0 && this.size === 0) {
      return "You can't delete root node";
    }
    if (index === 0) {
      return (this.root = this.at(1));
    }
    let itemBeforeIndex = this.at(index - 1);
    let itemAfterIndex = this.at(index + 1);
    itemBeforeIndex.nextNode = itemAfterIndex;
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

console.log(linkedList.toString());
console.log(linkedList.size);
linkedList.insertAt("eren", 0);
console.log(linkedList.toString());
linkedList.removeAt(2);
linkedList.removeAt(1);

console.log(linkedList.toString());
