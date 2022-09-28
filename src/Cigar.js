import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem{
  constructor(category, description, price){
    super(category, description, price);
  }

  getTax() {
    return 0.25;
  }
}