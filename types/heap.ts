class Heap<T> {
  heap: T[]
  constructor() {
    this.heap = []
  }
  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }
  getLeftChildIndex(index: number): number {
    return index * 2 + 1
  }
  getRightChildIndex(index: number): number {
    return index * 2 + 2
  }
  heapifyUp(index: number): void {
    let currentIndex = index

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex)

      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        ;[this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex]
        ]
        currentIndex = parentIndex
      } else {
        break
      }
    }
  }
  heapifyDown(index: number): void {
    let currentIndex = index

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex)
      const rightChildIndex = this.getRightChildIndex(currentIndex)
      let smallestIndex = currentIndex

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex
      }

      if (smallestIndex !== currentIndex) {
        ;[this.heap[currentIndex], this.heap[smallestIndex]] = [
          this.heap[smallestIndex],
          this.heap[currentIndex]
        ]
        currentIndex = smallestIndex
      } else {
        break
      }
    }
  }
  insert(value: T): void {
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }
  extractMin(): T | null {
    if (this.heap.length === 0) {
      return null
    }
    const min = this.heap[0]

    if (this.heap.length > 1) {
      const lastValue = this.heap.pop() as T

      this.heap[0] = lastValue
      this.heapifyDown(0)
    } else {
      this.heap.pop()
    }

    return min
  }
  peek(): T | null {
    if (this.heap.length === 0) {
      return null
    }

    return this.heap[0]
  }
  size(): number {
    return this.heap.length
  }
  isEmpty(): boolean {
    return this.heap.length === 0
  }
}

export default Heap
