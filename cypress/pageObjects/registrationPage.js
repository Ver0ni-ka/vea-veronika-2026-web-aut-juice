import { BasePage } from "../pageObjects/basePage";

export class RegistrationPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get passwordField(){
        return cy.get('#passwordControl');
    }

    static get passwordRepeatField(){
        return cy.get('#repeatPasswordControl');
    }

    static get emailField(){
        return cy.get('#emailControl');
    }

    static get securityQuestionDropdown() {
    return cy.get("[name='securityQuestion']");
  }

  static get securityQuestionOptions() {
    return cy.get("[role='option']");
  }

  static get securityAnswer() {
    return cy.get('#securityAnswerControl');
  }

  static get registerButton() {
    return cy.get('#registerButton');
  }
}