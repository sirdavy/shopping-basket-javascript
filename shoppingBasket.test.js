const ShoppingBasket = require('./shoppingBasket');
const Candy = require('./candy');

describe('ShoppingBasket', () => {

    it('returns total price of shopping basket', () => {
      const basket = new ShoppingBasket;
      expect(basket.getTotalPrice()).toBe(0) 
    });

    it('adds a candy to the basket', () => {
      const basket = new ShoppingBasket;
      const candy = new Candy('Mars', 4.99);
      basket.addItem(candy);
      expect(basket.getTotalPrice()).toBe(4.99) 
    });

    it('tests getTotalPrice with mocked getPrice', () => {
      const basket = new ShoppingBasket;
      const myCandyDouble = { getPrice: () => 9.99 };
      const myCandyDouble2 = { getPrice: () => 1.99 };
      basket.addItem(myCandyDouble);   
      basket.addItem(myCandyDouble2);   
      expect(basket.getTotalPrice()).toBe(11.98) 
    });


});
