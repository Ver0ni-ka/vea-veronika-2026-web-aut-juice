import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get confirmation(){
    return cy.get('.order-completion-header');
  }
  }