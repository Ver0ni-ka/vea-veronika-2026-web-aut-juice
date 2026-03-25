import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get card5678(){
    return cy.get('#mat-radio-46-input');
  }

  static get continueButton(){
    return cy.get('[aria-label="Proceed to review"]');
  }
  }