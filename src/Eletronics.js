import TaxItem from "./TaxItem";

export default class Eletronics extends TaxItem{
  constructor(category, description, price){
    super(category, description, price);
  }

  getTax() {
    return 0.3;
  }
}