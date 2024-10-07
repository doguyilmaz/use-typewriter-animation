export interface ListNode<T> {
  value: T;
  next: ListNode<T> | null;
}

export class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;

  push(value: T): void {
    const newNode = { value, next: null };
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  shift(): T | undefined {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  clear(): void {
    this.head = this.tail = null;
  }
}
