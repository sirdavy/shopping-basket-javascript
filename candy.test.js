const Candy = require('./candy');

describe('candy', () => {

    it('returns the name of the candy', () => {
      const candy = new Candy('Mars', 4.99);
      expect(candy.getName()).toBe('Mars') 
    });

    it('returns the price of the candy', () => {
      const candy = new Candy('Mars', 4.99);
      expect(candy.getPrice()).toBe(4.99) 
    });


});

