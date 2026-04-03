import { HomePage } from '../pageObjects/homePage';
import { LoginPage } from '../pageObjects/loginPage';
import { RegistrationPage } from '../pageObjects/registrationPage';
import { BasketPage } from '../pageObjects/basketPage';
import { SelectAddressPage } from '../pageObjects/selectAddressPage';
import { DeliveryMethodPage } from '../pageObjects/deliveryMethodPage';
import { PaymentOptionsPage } from '../pageObjects/paymentOptionsPage';
import { OrderSummaryPage } from '../pageObjects/orderSummaryPage';
import { OrderCompletionPage } from '../pageObjects/orderCompletionPage';
import { SavedAddressesPage } from '../pageObjects/savedAddressesPage';
import { CreeateAddressPage } from '../pageObjects/createAddressPage';
import { SavedPaymentMethodsPage } from '../pageObjects/savedPaymentMethodsPage';


describe('Juice-shop scenarios', () => {
  context('Without auto login', () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it('Login', () => {
// Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type('demo');
      // Set password value to "demo"
      LoginPage.passwordField.type('demo');
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should('contain.text', 'demo');   });

    it('Registration', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const randomNum = Math.floor(Math.random() * 9000) + 1000;
      const email = `email_${randomNum}@ebox.com`;
      RegistrationPage.emailField.type(email);

      const password = 'password123';

      RegistrationPage.passwordField.type(password);
      RegistrationPage.passwordRepeatField.type(password);


      // Fill in password field and repeat password field with same password
      // Click on Security Question menu
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionDropdown.click();
      RegistrationPage.securityQuestionOptions.contains('Name of your favorite pet?').click();

      // Fill in answer
       RegistrationPage.securityAnswer.type('Rambo');
      
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      
      // Set password value to previously used password value
      // Click login button
      LoginPage.emailField.type(email);
      LoginPage.passwordField.type(password);
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should('contain.text', email);    });
  });

  context('With auto login', () => {
    beforeEach(() => {
      cy.login('demo', 'demo');
      HomePage.visit();
    });

    it('Search and validate Lemon', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      
      // Search for Lemon
      HomePage.searchInputField.type('Lemon{enter}');
      
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should('contain.text', 'Sour but full of vitamins.');
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    // Click on search icon
    // Search for 500ml
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."
    
    it('Search 500ml and validate cards', () => {
      HomePage.searchIcon.click();
      
      HomePage.searchInputField.type('500ml{enter}');
      HomePage.productNames.contains('Eggfruit Juice (500ml)').click();
      HomePage.productCard.should('contain.text', 'Now with even more exotic flavour.');
      HomePage.closeCargButton.click();
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      HomePage.productCard.should('contain.text', 'Sour but full of vitamins.');
      HomePage.closeCargButton.click();
      HomePage.productNames.contains('Strawberry Juice (500ml)').click();
      HomePage.productCard.should('contain.text', 'Sweet & tasty!');

    });

    // Create scenario - Search 500ml and validate cards
    // Click on search icon
    // Search for 500ml
    // Select a product card - Eggfruit Juice (500ml)
    // Validate that the card (should) contains "Now with even more exotic flavour."
    // Close the card
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."
    // Close the card
    // Select a product card - Strawberry Juice (500ml)
    // Validate that the card (should) contains "Sweet & tasty!"

    // Create scenario - Read a review
    // Click on search icon
    // Search for King
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    // Click expand reviews button/icon (wait for reviews to appear)
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    it('Read a review', () => {
      HomePage.searchIcon.click();
      HomePage.searchInputField.type('King{enter}');

      HomePage.productNames.contains('OWASP Juice Shop "King of the Hill" Facemask').click();

      HomePage.reviewsInCardDropdown.click();
      HomePage.reviewMsg.should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');


    });
    // Create scenario - Add a review
    // Click on search icon
    // Search for Raspberry
    // Select a product card - Raspberry Juice (1000ml)
    // Type in review - "Tastes like metal"
    // Click Submit
    // Click expand reviews button/icon (wait for reviews to appear)
    // Validate review -  "Tastes like metal"
    it('Add a review', () => {
      HomePage.searchIcon.click();
      HomePage.searchInputField.type('Raspberry{enter}');

      HomePage.productNames.contains('Raspberry Juice (1000ml)').click();

      HomePage.reviewField.type('Tastes like metal');
      HomePage.reviewSubmitButton.click();

      HomePage.reviewsInCardDropdown.click();
      HomePage.reviewMsg.should('contain.text', 'Tastes like metal');

    });

    // Create scenario - Validate product card amount
    // Validate that the default amount of cards is 12
    // Change items per page (at the bottom of page) to 24
    // Validate that the amount of cards is 24
    // Change items per page (at the bottom of page) to 36
    // Validate that the amount of cards is 36
    it('Validate product card amount', () => {

      HomePage.tileCard.should('have.length', 12);

      HomePage.numOfCardsList.click();
      cy.get('mat-option').contains('24').click();
      HomePage.tileCard.should('have.length', 24);

      HomePage.numOfCardsList.click();
      cy.get('mat-option').contains('36').click();
      HomePage.tileCard.should('have.length', 36);

    });

    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    // Search for Girlie
    // Add to basket "Girlie"
    // Click on "Your Basket" button
    // Create page object - BasketPage
    // Click on "Checkout" button
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    it('Buy Girlie T-shirt', () => {
      HomePage.searchIcon.click();
      HomePage.searchInputField.type('Girlie{enter}');
      HomePage.addToCartGirlieButton.click();
      HomePage.openCartButton.click();

      BasketPage.checkoutButton.click();
      SelectAddressPage.findAddressUF.click();
      SelectAddressPage.continueButton.click();

      DeliveryMethodPage.standardDelivery.click();
      DeliveryMethodPage.continueButton.click();

      PaymentOptionsPage.card5678.find('mat-radio-button').click();
      PaymentOptionsPage.continueButton.click();

      OrderSummaryPage.checkoutButton.click();
      OrderCompletionPage.confirmation.should('contain', 'Thank you for your purchase!');

    });

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible
    it('Add address', () => {
      HomePage.accountButton.click();
      HomePage.ordersAndPaymentButton.click();
      HomePage.savedAddressButton.click();

      SavedAddressesPage.addButton.click();
      CreeateAddressPage.countryField.type('My country');
      CreeateAddressPage.nameField.type('My name');
      CreeateAddressPage.mobileNumField.type('123456789');
      CreeateAddressPage.zipField.type('123');
      CreeateAddressPage.addressField.type('My address');
      CreeateAddressPage.cityField.type('My city');
      CreeateAddressPage.submitButton.click();

      SavedAddressesPage.row('My name').should('contain', 'My country').and('contain', 'My address, My city, , 123');
    });

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
    it.only('Add payment option', () => {
      HomePage.accountButton.click();
      HomePage.ordersAndPaymentButton.click();
      HomePage.myPaymentOptionsButton.click();
      
      SavedPaymentMethodsPage.addNewCardButton.click();
      SavedPaymentMethodsPage.nameField.type('Name');
      const randomNum = Math.floor(Math.random() * 9000) + 1000;
      const cardNum = `${randomNum}${randomNum}${randomNum}${randomNum}`
      SavedPaymentMethodsPage.cardNumField.type(cardNum);
      SavedPaymentMethodsPage.selectMonthField.select('7');
      SavedPaymentMethodsPage.yearField.select('2090');
      SavedPaymentMethodsPage.submitButton.click();

      SavedPaymentMethodsPage.row(randomNum).should('contain', 'Name').and('contain', '7/2090');

    });
  });
});
