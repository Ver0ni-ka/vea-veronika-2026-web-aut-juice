import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get findAddressUF(){
    return cy.contains('mat-row', 'United Fakedom');
  }

  static get continueButton(){
    return cy.get('[aria-label="Proceed to payment selection"]');
  }

  }