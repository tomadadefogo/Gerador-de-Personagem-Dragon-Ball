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
  })
})