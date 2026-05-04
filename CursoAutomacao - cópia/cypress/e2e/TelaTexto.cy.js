describe('Validar Pagina de Texto', ()=>{

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/texto.html')
    })
    
    it('Validar Titulo', ()=>{

        cy.get('.title')
        .should('contain', 'Curso Automação de Testes Bàsico').contains('Curso Automação de Testes Bàsico')

    })

    it('Validar Texto', ()=>{

        cy.get('h2')
        .should('contain', 'Automação de testes').contains('Automação de testes')

        cy.get('p')
        .should('contain', ' A automação de testes é uma área em franca expansão, no entanto, é uma área ainda muito imatura. Muitos dos sucessos nos projetos de automação de testes são decorrentes de processos empíricos de tentativa e erro.')

    })

    it('Validar Botão', ()=>{

        cy.get('button')
        .should('be.visible').contains('Voltar Ao ìnicio').click()
    })
})