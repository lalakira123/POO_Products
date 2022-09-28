import TaxItem from "./TaxItem";
import Water from "./Water";
import Beer from "./Beer";
import Cigar from "./Cigar";
import Eletronics from "./Eletronics";

export default class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  getTaxes() {
    let totalTax = 0;
    this.items.forEach((item) => {
      const { category, description, price } = item;
      const taxItem = new TaxItem(category, description, price);
      let tax;
      
      if(item.category === 'Beer') {
        let beer = new Beer();
        tax = beer.getTax();
      }
        
      if(item.category === 'Cigar') {
        let cigar = new Cigar();
        tax = cigar.getTax();
      }

      if(item.category === 'Eletronics') {
        let eletronics = new Eletronics();
        tax = eletronics.getTax();
      }
      
      if(item.category === 'Water') tax = 0;

      totalTax += taxItem.calculateTax(tax);
    });
    return totalTax;
  }
}