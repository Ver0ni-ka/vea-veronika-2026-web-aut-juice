import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get('#navbarAccount');
  }

  static get myPaymentOptionsButton() {
    return cy.get('[aria-label="Go to saved payment methods page"]')
  }

  static get ordersAndPaymentButton() {
    return cy.get('button[aria-label="Show Orders and Payment Menu"]');
  }

  static get savedAddressButton() {
    return cy.get('[aria-label="Go to saved address page"]');
  }

  static get savedMethodsButton() {
    return cy.get('[aria-label="Go to saved payment methods page"]');
  }
  

  static get loginButton() {
    return cy.get('#navbarLoginButton');
  }

  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");  
  }

  static get searchIcon() {
    return cy.get('#searchQuery');
  }

  static get searchInputField() {
    return cy.get('#searchQuery input');
  }

  static get productNames() {
    return cy.get('.item-name');
  }

  static get productCard() {
    return cy.get('.details-row');
  }

  static get closeCargButton(){
    return cy.get("button[aria-label='Close Dialog']")
  }

  static get reviewsInCardDropdown() {
    return cy.get("[aria-label='Expand for Reviews']");
  }

  static get reviewMsg() {
    return cy.get(".ng-star-inserted");
  }

  static get reviewField(){
        return cy.get('[aria-label="Text field to review a product"]');
  }

  static get reviewSubmitButton(){
        return cy.get('#submitButton');
  }

  static get tileCard(){
    return cy.get(".mat-grid-tile");
  }

  static get numOfCardsList(){
    return cy.get(".mat-mdc-paginator-touch-target");
  }

  static get addToCartGirlieButton(){
    return cy.get('[aria-label="Add to Basket"]');
  }

  static get openCartButton(){
    return cy.get('[aria-label="Show the shopping cart"]');
  }

  }
