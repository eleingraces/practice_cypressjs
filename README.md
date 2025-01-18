<h1> 📝 practice_cypressjs </h1>
This repository is to practice and let people know how I do and create my Automated scripting via Cypress using Javascript framework



## 🚀 Features
- Sample automated scripts for DEMOQA website (web UI)
- Sample automated scripts for Contact List App website (web UI and API...soon)



## 📜 Step by Step process to run my scripts
1. Clone this repository
2. Open IDE (I use Vistual Studio Code)
3. Make sure you have downloaded latest version of Node.js
4. If you are using Windows, edit system environment variables > Path > New. Then add the node.js file path
5. If you are using Mac, add /usr/local/bin in $PATH
```ts
export PATH="$PATH:/usr/local/bin"
```
6. Run npm init in your terminal
```ts
npm init
```
7. Install Cypress
```ts
npm install cypress --save-dev
```
8. Open Cypress
```ts
npx cypress open
```
9. Click Continue > Continue > Continue
10. Run E2E testing
11. Click on **Scaffold Example Specs** and then **Okay, I got it**. This will add all the example specs to your e2e folder.
12. Go to cypress > e2e folder to see list of sample Test Scenarios and Test Cases I created.

## 📙 Test Scenarios and Test Cases (⚠️ In Progress)
**Elements section (cypress/e2e/1-demoqa/elements):**
  - TS01 - Validate the Text Box page (cypress/e2e/1-demoqa/elements/TS01_TextBox.cy.js)
    - TC01 - User should be able to go to Elements page.
    - TC02 - User should be able to see the Text Box page.
    - TC03 - User should be able to input details in Full Name field.
    - TC04 - User should be able to input details in Email field.
    - TC05 - User should be able to input details in Current Address field.
    - TC06 - User should be able to input details in Permanent Address field.
    - TC07 - User should be able to submit the form successfully and validate that details are submitted correctly.
  - TS02 - Validate the Forms page
  
