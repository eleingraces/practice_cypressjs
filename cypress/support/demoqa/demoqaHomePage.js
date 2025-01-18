

class homePage {
  sections = '[class="card mt-4 top-card"]';
 

  elements = {
   sections: () => cy.get(this.sections),

  }

  navigateToSection(SECTION) {
   switch (SECTION) {
      case "Elements":
         this.elements.sections().eq(0).click({timeout: 60000});
        break;

      case "Forms":
         this.elements.sections().eq(1).click({timeout: 60000});
        break;

      case "AlertsFrameWindows":
         this.elements.sections().eq(2).click({timeout: 60000});
        break;

      case "Widgets":
         this.elements.sections().eq(3).click({timeout: 60000});
      break;

      case "Interactions":
         this.elements.sections().eq(4).click({timeout: 60000});
      break;

      case "BookStoreApplication":
         this.elements.sections().eq(5).click({timeout: 60000});
      break;
    }
  }

  
} export default homePage