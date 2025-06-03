import ConcursosPage from '../../pages/ConcursosPage';

const concursosPage = new ConcursosPage();

Given('I open the home page', () => {
  concursosPage.visit();
});

When('I click on the concursos card', () => {
  concursosPage.clickConcursosButton();
});