class ConcursosPage {
    visit() {
      cy.visit('https://transparencia.joaopessoa.pb.gov.br/#/');
    }

    clickConcursosButton() {
        cy.get('.cartao-componente[href="#/concursos"]').click();
    }

  }

  export default ConcursosPage;