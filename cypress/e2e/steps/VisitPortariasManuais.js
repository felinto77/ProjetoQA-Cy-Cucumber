import PortariasManuais from '../../pages/PortariasManuais';

const portariasManuais = new PortariasManuais();

Given('que estou na página inicial do portal transparência de João Pessoa', () => {
  portariasManuais.visit();
});

Then('clico em portarias e manuais', () => {
  portariasManuais.clickPortariasManuaisButton();
});