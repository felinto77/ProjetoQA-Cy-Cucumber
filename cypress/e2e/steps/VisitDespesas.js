import HomePage from '../../pages/HomePage';

const homePage = new HomePage();

Given('I open the home page', () => {
  homePage.visit();
});

When('I click on the expenses button', () => {
  homePage.clickExpensesButton();
});

Then('I should be redirected to the expenses page', () => {
  cy.url().should('include', '#/despesas/despesas-quadro-geral');
});