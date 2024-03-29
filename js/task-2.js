class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const indexToRemove = this.#items.indexOf(itemToRemove);
    if (indexToRemove !== -1) {
      this.#items.splice(indexToRemove, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 
console.log(storage.getItems()); 
storage.removeItem("Prolonger");
console.log(storage.getItems()); 
