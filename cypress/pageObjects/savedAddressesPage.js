import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get addButton(){
    return cy.get('[aria-label="Add a new address"]');
  }

  static row(name){
    return cy.contains('.mat-mdc-row', name);
  }

  }