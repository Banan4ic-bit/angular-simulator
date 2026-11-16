export class Collection<T> {

  private items: T[] = [];

  constructor(items: T[]) {
    this.items = items;

  }

  getAll(): T[] {
    return this.items.slice();
  }

  getCertainElement(value: T): T | undefined {
    if (this.items.indexOf(value) != -1) {
      return this.items[this.items.indexOf(value)]
    } else {
      return undefined
    }
  }
  
  clear() {
    this.items.splice(0, this.items.length)
  }

  deleteCertainElement(value: T): void{
    this.items = this.items.filter(item => item !== value)
  }

  replaceElement(value: T, newItem: T): void {
    this.items = this.items.map(item => {
      if(item === value) {
       return newItem
      } else {
       return item
      }
    })
  }
}