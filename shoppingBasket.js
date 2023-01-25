class ShoppingBasket {

  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    this.basket.push(candy) 
  }

  getTotalPrice() {
    let sum = 0
    this.basket.forEach((element) => {
      sum += element.getPrice()
    });
    return sum
  }

}

module.exports = ShoppingBasket;