import LeisEDecretos from "../../pages/VisitLeisEDecretos";

const leisEDecretos = new LeisEDecretos();

Given('que estou na página inicial do portal transparência de João Pessoa', () => {
  leisEDecretos.visit();
});

Then('clico em leis e decretos', () => {
  leisEDecretos.clickLeisEDecretos();
});