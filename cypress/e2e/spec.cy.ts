export {}
describe('Dragon Ball Character Generator', () => {
  beforeEach(() => {
    cy.visit('https://gerador-de-personagem-dragon-ball.vercel.app'); 
  });

  it('renders the page correctly', () => {
    
    cy.get('div')
      .should('be.visible')
      
    cy.get('section')
      .should('be.visible')

  });
  it('Button/Link Test' , ()=> {

    cy.get('button')
      .should('be.visible')

    cy.get('a')
      .should('be.visible')
  })
  it('Button/Link Toggle Test' ,()=> {

    cy.wait(2000); 
    cy.get('.light').click();
    cy.get('.play').click();
    cy.get('.link').click();
    cy.get('.git').click();
    cy.get('.share').click()
  })
  it('Content is visible', ()=> {
    cy.get('#pw')
      .should('be.visible')
      .and('have.text', 'Poder')
      cy.get('#pwr')
      .should('be.visible')
    cy.get('#rc')
      .should('be.visible')
      .and('have.text', 'Raça')
      cy.get('#rcp')
      .should('be.visible')
    cy.get('#un')
      .should('be.visible')
      .and('have.text', 'Universo')
      cy.get('#unp')
      .should('be.visible')
    cy.get('#tr')
      .should('be.visible')
      .and('have.text', 'Traços')
      cy.get('#trp')
      .should('be.visible')
    cy.get('#ac')
      .should('be.visible')
      .and('have.text', 'Acessório')
      cy.get('#acp')
      .should('be.visible')
    cy.get('#pr')
      .should('be.visible')
      .and('have.text', 'Presente')
      cy.get('#prp')
      .should('be.visible')
    cy.get('.imgtest')
      .should('be.visible')
    cy.get('#testinfo')
      .should('be.visible')
      .and('have.text', '* Para melhor exibição, recomendamos que tire um printScreen da tela.')
  })
})