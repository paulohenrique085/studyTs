
import crypto from "crypto";


export class Account {
  name: String = "";
  balance: Number = 0;
  account: String = "";
  agency: String = "";
  maturityDate: Number = 0;

  //abaixo o construtor que pode servir para inicializar um objeto e definir os parâmetros obrigatórios
  constructor(customerName: String, customerMaturityDate: Number) {
    this.name = customerName;
    this.maturityDate = customerMaturityDate
    this.balance = 0;
    this.agency = "1156";
    this.account = crypto.randomUUID();

  }


}

