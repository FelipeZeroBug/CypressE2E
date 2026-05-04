describe('Validar Pagina de Imagem', ()=>{

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/imagem.html')
    })

    it('Validar Titutlo', ()=>{

        cy.get('.title')
        .should('contain', 'Curso Automação de Testes Bàsico').contains('Curso Automação de Testes Bàsico')
    })

    it('Validar Imagem', ()=>{
    
        cy.get('img')
        .should('be.visible')
    })

    it('Validar Botão', ()=>{

        cy.get('button')
        .should('be.visible').contains('Voltar Ao ìnicio').click()
    })

})