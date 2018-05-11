const heapsort = arr => {
  /* Your code here */

    let n = arr.length;
  // loop to rearrange array  
    for (let i = n / 2 -1; i >= 0; i--) {
      heapify(arr, n, i);
    }
    
    // start from end, move to root
    for (let i = n - 1; i >= 0; i--) {
    
    // move root to end  
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // call heapify to make sure max is moved    
    heapify(arr, i, 0);
    }
    return arr;
};
  
  
  function heapify(arr, n, i) {
    // max being root
    let max = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    
    if(l < n && arr[i] < arr[l]) {
      max = l;
    }
    
    if(r < n && arr[max] < arr[r]) {
      max = r;
    }

    // check if max number is root
    if(max !== i) {
      let swap = arr[i];
      arr[i] = arr[max];
      arr[max] = swap;
      // recursive call on current element or child
      heapify(arr, n , max);
    }
  }
    
  
  class Heap {
    constructor() {
      this.storage = [null];
      this.size = 0;
    }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.size++;
    this.bubbleUp(index);

  }

  delete() {
    if (this.storage.length === 2) {
      this.size--;
      return this.storage.pop();
    } else if (this.storage.length === 1) {
      return this.storage[0];
    }
    this.size--;
    const max = this.storage[1];
    this.storage[1] = this.storage.pop();
    this.siftDown(1);
    return max;
  }

  getMax() {
    return this.storage[1];

  }

  getSize() {
    return this.size;
  }

  bubbleUp(index) {
    const parent = Math.floor(index / 2);
    if (parent > 0 && this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [
        this.storage[index],
        this.storage[parent]
      ];
      this.bubbleUp(parent);
    }
  }

  siftDown(index) {
    const child1 = index * 2;
    const child2 = index * 2 + 1;
    let maxChild;

    if (this.storage[child1] !== undefined) {
      if (this.storage[child2] === undefined) {
        maxChild = child1;
      } else if (this.storage[child2] !== undefined) {
        maxChild =
          this.storage[child1] > this.storage[child2] ? child1 : child2;
      }

      if (this.storage[index] < this.storage[maxChild]) {
        [this.storage[maxChild], this.storage[index]] = [
          this.storage[index],
          this.storage[maxChild]
        ];
        this.siftDown(maxChild);
      }
    }
  }
}

module.exports = {
  Heap,
  heapsort
};
