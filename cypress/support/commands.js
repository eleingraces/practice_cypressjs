let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("visitPage", (SERVER) => {
  switch (SERVER) {
    case "DEMOQA":
      cy.visit('https://demoqa.com/', {timeout: 60000});
      
      break;
    case "SAUCEDEMO": //placeholer
      break;
  }
});

Cypress.Commands.add("get$", (selector) => {
   return cy.wrap(Cypress.$(selector)).should("have.length.gte", 1);
 });

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});