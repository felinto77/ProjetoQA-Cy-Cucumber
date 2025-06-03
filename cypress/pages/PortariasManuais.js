class PortariasManuais {
    visit() {
      cy.visit('https://transparencia.joaopessoa.pb.gov.br/#/');
    }

    clickPortariasManuaisButton() {
      cy.get('.cartao-componente[href="#/governo/portarias-manuais"]').click();
    }
}

export default PortariasManuais;