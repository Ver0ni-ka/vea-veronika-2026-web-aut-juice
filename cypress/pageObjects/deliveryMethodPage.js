import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get standardDelivery(){
    return cy.contains('mat-row', 'Standard Delivery');
  }

  static get continueButton(){
    return cy.get('[aria-label="Proceed to delivery method selection"]');
  }
  }