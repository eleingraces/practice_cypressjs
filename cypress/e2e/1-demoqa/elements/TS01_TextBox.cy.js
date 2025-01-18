import homePage from '../../../support/demoqa/demoqaHomePage'
import textBoxSection from '../../../support/demoqa/elements/textBoxSection'

let home = new homePage();
let textBox = new textBoxSection();


describe('TS01 User should be able to test the Text Box page.', () => {
  before(() => {
    cy.clearCookies();
  })
  beforeEach(() => {
    cy.restoreLocalStorage();
  })
  afterEach(() => {
    cy.saveLocalStorage();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
   });
 
   it('TC01 User should be able to go to Elements page.', () => {
    cy.visitPage("DEMOQA");
    home.navigateToSection("Elements");
    textBox.validateElementsPage();
   });
 
   it('TC02 User should be able to see the Text Box page.', () => {
    textBox.navigateToTextBoxForm();
    textBox.validateTextBoxForm();
   });

   it('TC03 User should be able to input details in Full Name field.', () => {
    textBox.fullName();
   })

   it('TC04 User should be able to input details in Email field.', () => {
    textBox.email();
   });

   it('TC05 User should be able to input details in Current Address field.', () => {
    textBox.currentAddress();
   });

   it('TC06 User should be able to input details in Permanent Address field.', () => {
    textBox.permanentAddress();
   });

   it('TC07 User should be able to submit the form successfully and validate that details are submitted correctly.', () => {
    textBox.submitForm();
    textBox.validateNameInSubmittedForm();
    textBox.validateEmailInSubmittedForm();
    textBox.validateCurrentAddressInSubmittedForm();
    textBox.validatePermanentAddressInSubmittedForm();
   });



});