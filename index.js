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
      let tmp = this.root;
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
    if (this.size <= 0) {
      return null;
    } else {
      let tmp = this.head;
      if (!tmp) return null;

      for (let i = 0; i <= this.size; i++) {
        if (tmp.value === value) return i;
        if (tmp.nextNode) {
          tmp = tmp.nextNode;
        }
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
    if (this.size === index) return this.append(value);
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

      itemBeforeIndex.nextNode = new Node(value, this.at(index));
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
    let count = 0;
    while (tmp) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
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

function runLinkedListTests() {
  console.log("LinkedList Testleri Başlıyor...");
  const list = new LinkedList("ilk");

  // Test 1: Son ekleme
  list.append("son");
  console.assert(list.tail.value === "son", "Son eleman 'son' olmalı.");

  // Test 2: Başa ekleme
  list.prepend("baş");
  console.assert(list.head.value === "baş", "Baş eleman 'baş' olmalı.");

  // Test 3: Belirli bir indekse ekleme
  list.insertAt("orta", 1); // 'baş' ve 'ilk' arasına ekler
  console.assert(list.at(1).value === "orta", "'orta', 1. indekste olmalı.");

  // Test 4: Size kontrolü
  const expectedSize = 4;
  console.assert(
    list.size === expectedSize,
    `Liste boyutu ${expectedSize} olmalı.`,
  );

  // Test 5: contains ve find
  console.assert(list.contains("son"), "'son' değeri listede bulunmalı.");
  console.assert(list.find("orta") === 1, "'orta' değerinin indeksi 1 olmalı.");

  // Test 6: Belirli bir indeksten çıkarma ve çıkarılan eleman kontrolü
  list.removeAt(1); // 'orta'yı çıkarır
  console.assert(list.at(1).value === "ilk", "1. indekste şimdi 'ilk' olmalı.");

  // Test 7: Son durumu kontrol et
  console.log("Son Liste Durumu: ", list.toString());
}

runLinkedListTests();
