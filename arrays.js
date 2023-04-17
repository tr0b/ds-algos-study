class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return item;
  }

  pop() {
    const item = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return item;
  }

  shift() {
    const item = this.data[0];
    this.shiftItems(0);
    return item;
  }

  remove(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length -1; i++) {
      this.data[i] = this.data[i+1];
    }

    delete this.data[this.length-1];
    this.length--;
  }
  
  // Create a function that reverses an array
  reverse() {
    const reverseArray = new MyArray();
    for (let i = this.length -1; i >= 0; --i) {
      reverseArray.push(this.data[i]);
    }

    this.data = reverseArray.data;
    return this.data;
  }
}
