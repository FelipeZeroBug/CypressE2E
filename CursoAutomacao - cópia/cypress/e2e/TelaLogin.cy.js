describe('Testar a pagina de Login', ()=>{
    it('Testar a tela de Login', ()=>{

        cy.visit('http://127.0.0.1:5500/login.html')

        cy.get('.login-form-tittle')
        .contains('Faça o Login').should('contain', 'Faça o Login')
        cy.log('Texto de login está visivel')

        cy.get('.margin-left-50')
        .should('be.visible')
        cy.log('Imagem está visivel')

        cy.get('#login')
        .should('be.visible').click().type('Automação de Testes').should('have.value', 'Automação de Testes')
        cy.log('Campo de Login está visivel')

        cy.get('#senha')
        .should('be.visible').click().type('123456789').should('have.value', '123456789')
        cy.log('Campo de senha está visivel')

        cy.get('.login-form-btn').contains('Login')
        .should('be.visible').click()
        cy.log('Botão de Login está visivel')

    })
})