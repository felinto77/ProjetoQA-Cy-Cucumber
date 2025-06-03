class LeisEDecretos {

    visit() {
      cy.visit('https://transparencia.joaopessoa.pb.gov.br/#/');
    }

    clickLeisEDecretos() {
      cy.get('.cartao-componente[href="#/governo/leis"]').click();
    }
}

export default LeisEDecretos;