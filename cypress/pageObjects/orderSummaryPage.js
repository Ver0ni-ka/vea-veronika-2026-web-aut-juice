import { BasePage } from "../pageObjects/basePage";

export class OrderSummaryPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get checkoutButton(){
    return cy.get('#checkoutButton');
  }
  }