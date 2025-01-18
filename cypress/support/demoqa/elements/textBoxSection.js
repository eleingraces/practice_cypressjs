import { faker } from '@faker-js/faker';

let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let email = firstName.toLowerCase() + lastName.toLowerCase();
let buildingNumber = faker.location.buildingNumber();
let secondAdd = faker.location.secondaryAddress();
let city = faker.location.city();
let state = faker.location.state();
let country = faker.location.country();

class textBoxSection {
   elementsPage  = '[class="col-12 mt-4 col-md-6"]'
   textBox = '[class="text-center"]';
   elementsMenuList = 'ul[class="menu-list"]';
   fullNameLabel = '#userName-label';
   fullNameTextBox = '#userName';
   emailLabel = '#userEmail-label';
   emailTextBox = '#userEmail';
   currAddLabel = '#currentAddress-label';
   currAddTextBox = '#currentAddress';
   permAddLabel = '#permanentAddress-label';
   permAddTextBox = '#permanentAddress';
   submitButton = '#submit';
   submittedName = 'p#name';
   submittedEmail = 'p#email';
   submittedCurrAdd = 'p#currentAddress';
   submittedPermAdd = 'p#permanentAddress';

   elements = {
      elementsPage: () => cy.get(this.elementsPage),
      textBox: () => cy.get(this.textBox),
      elementsMenuList: () => cy.get(this.elementsMenuList),
      fullNameLabel: () => cy.get(this.fullNameLabel),
      fullNameTextBox: () => cy.get(this.fullNameTextBox),
      emailLabel: () => cy.get(this.emailLabel),
      emailTextBox: () => cy.get(this.emailTextBox),
      currentAddLabel: () => cy.get(this.currAddLabel),
      currentAddTextBox: () => cy.get(this.currAddTextBox),
      permanentAddLabel: () => cy.get(this.permAddLabel),
      permanentAddTextBox: () => cy.get(this.permAddTextBox),
      submitButton: () => cy.get(this.submitButton),
      submittedName: () => cy.get(this.submittedName),
      submittedEmail: () => cy.get(this.submittedEmail),
      submittedCurrentAddress: () => cy.get(this.submittedCurrAdd),
      submittedPermanentAddress: () => cy.get(this.submittedPermAdd),
   }

   validateElementsPage() {
      this.elements.elementsPage()
         .should('contain.text', 'Please select an item from left to start practice.')
   }

   navigateToTextBoxForm() {
      this.elements.elementsMenuList().eq(0)
         .find('#item-0')
         .click();
   }
 
   validateTextBoxForm() {
      this.elements.textBox().should('contain.text', 'Text Box');
   }

   fullName() {
      this.elements.fullNameLabel().should('contain.text', 'Full Name');
      this.elements.fullNameTextBox().type(firstName + ' ' + lastName);
   }

   email() {
      this.elements.emailLabel().should('contain.text', 'Email');
      this.elements.emailTextBox().type(email + '@demoqa.com');
   }

   currentAddress() {
      this.elements.currentAddLabel().should('contain.text', 'Current Address');
      this.elements.currentAddTextBox()
         .type(buildingNumber + ' ' + secondAdd + ' ' + city + ' ' + state + ' ' + country);
   }

   permanentAddress() {
      this.elements.permanentAddLabel().should('contain.text', 'Permanent Address');
      this.elements.permanentAddTextBox()
         .type(buildingNumber + ' ' + secondAdd + ' ' + city + ' ' + state + ' ' + country);
   }

   submitForm() {
      this.elements.submitButton().click({force:true});
   }

   validateNameInSubmittedForm() {
      this.elements.fullNameTextBox().invoke('val').as('name');
      cy.get('@name').then(name => {
         cy.log(name)
         let submittedFullName;
         this.elements.submittedName()
            .should(($div)=> {
               submittedFullName = $div.text()
               expect(submittedFullName).to.contain(name);
            }) 
      })
   }

   validateEmailInSubmittedForm() {
      this.elements.emailTextBox().invoke('val').as('email');
      cy.get('@email').then(email => {
         cy.log(email)
         let submittedEmailAdd;
         this.elements.submittedEmail()
            .should(($div) => {
               submittedEmailAdd = $div.text()
               expect(submittedEmailAdd).to.contain(email);
            })
      })
   }

   validateCurrentAddressInSubmittedForm() {
      this.elements.currentAddTextBox().invoke('val').as('curradd');
      cy.get('@curradd').then(currentAdd => {
         cy.log(currentAdd)
         let submittedCurrentAddress;
         this.elements.submittedCurrentAddress()
            .should(($div) => {
               submittedCurrentAddress = $div.text()
               expect(submittedCurrentAddress).to.contain(currentAdd);
            })
      })
   }

   validatePermanentAddressInSubmittedForm() {
      this.elements.permanentAddTextBox().invoke('val').as('permadd');
      cy.get('@permadd').then(permadd => {
         cy.log(permadd)
         let submittedPermanentAddress
         this.elements.submittedPermanentAddress()
            .should(($div) => {
               submittedPermanentAddress = $div.text()
               expect(submittedPermanentAddress).to.contain(permadd);
            })
      })
   }
   
   
 } export default textBoxSection