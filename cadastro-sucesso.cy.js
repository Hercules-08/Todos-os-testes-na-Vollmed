describe('Pagina de cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
  })

 context('Verifica redirecionamento de páginas', () => {
   it('Clica no link "Cadastra-se" e redireciona para a pagina de cadastro da clinica', () => {
       cy.get('[href="/cadastro"]').click();
       cy.location('pathname').should('equal', '/cadastro');
     })
  })

  context('Teste na primeira pagina do cadastro', () => {
    it('Preenchendo os dados do cadastro', () => {
      cy.get('[href="/cadastro"]').click();
      cy.get('[data-test="inputNome"]').type('Cary E');
      cy.get('[data-test="inputCNPJ"]').type('12489763');
      cy.get('[data-test="inputEmail"]').type('cary-estranha@email.com');
      cy.get('[data-test="inputSenha"]').type('963852Cary');
      cy.get('[data-test="inputSenhaVerificada"]').type('963852Cary');
      cy.get('.sc-bcXHqe').click();
      cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');
      cy.get('.sc-khsqcC').should('exist').should('be.visible')
    })
  })

  
  context('Sessão de cadastro completa', () => {
    it('Cadastro completo', () => {
    cy.get('[href="/cadastro"]').click();
    cy.get('[data-test="inputNome"]').type('Cary E');
    cy.get('[data-test="inputCNPJ"]').type('12489763');
    cy.get('[data-test="inputEmail"]').type('cary-estranha@email.com');
    cy.get('[data-test="inputSenha"]').type('963852Cary');
    cy.get('[data-test="inputSenhaVerificada"]').type('963852Cary');
    
    cy.get('.sc-bcXHqe').click();
    
    cy.get('[data-test="inputTelefone"]').type('951753852');
    cy.get('[data-test="inputCEP"]').type('456852789');
    cy.get('[data-test="inputRua"]').type('Salvatori');
    cy.get('[data-test="inputNumero"]').type('888');
    cy.get('[data-test="inputComplemento"]').type('Irmãos Salvatori');
    cy.get('[data-test="inputEstado"]').type('SP');
    
    cy.get('.sc-bcXHqe').click()
    cy.location('pathname').should('equal', '/login');
    })

})

})
  
  

