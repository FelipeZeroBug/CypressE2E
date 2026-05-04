describe('Testando a tela inicial do Site',()=>{

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })

    it('Validar os botões na tela', ()=>{

        cy.get('[href="./login.html"] > button').as('BtnVoltar')
        .should('be.visible')
        cy.log('Botão de Voltar está visivel')

        cy.get('[href="texto.html"] > button').as('BtntEXTO')
        .should('be.visible')
        cy.log('Botão de Texto está visivel')

        cy.get('[href="imagem.html"] > button').as('BtnImagem')
        .should('be.visible')
        cy.log('Botão de Imagem está visivel')

        cy.get('#btnCadastrarSalvar').as('BtnCadastrar')
        .should('be.visible')

    })

    it('Validar Titulos', ()=>{

        cy.get('.title')
        .should('contain', 'Curso Automação de Testes Bàsico').contains('Curso Automação de Testes Bàsico')
        cy.log('Titulo visivel e correto')

        cy.get('h2')
        .should('contain', 'Tabela').contains('Tabela')
         
    })

    it('Validar Formulario', ()=>{
        
        cy.get('[for="txtNome"]')
        .contains('Nome Completo').should('contain', 'Nome Completo')
        
        cy.get('[for="numero"]')
        .contains('Telefone').should('contain', 'Telefone')

        cy.get('[for="dtpDataNascimento"]')
        .contains('Data de Nascimento').should('contain', 'Data de Nascimento')

        cy.get('legend')
        .contains('Sexo').should('contain', 'Sexo')
        cy.get('[for="rdoMasculino"]')
        .contains('asculino').should('contain', 'Masculino')
        cy.get('[for="rdoFeminino"]')
        .contains('Feminino').should('contain', 'Feminino')

    })

    it('Realizar Cadastro', ()=>{

        cy.get('#txtNome')
        .should('be.visible').click().type('Felipe Freitas').should('have.value', 'Felipe Freitas')

        cy.get('#numero')
        .should('be.visible').click().type('11974402293').should('have.value', '11974402293')

        cy.get('#dtpDataNascimento')
        .should('be.visible').click().type('2002-11-25').should('have.value', '2002-11-25' )

        cy.get('#rdoMasculino').click()

        cy.get('#btnCadastrarSalvar').click()

        cy.get('#rowTable0 > :nth-child(1)')
        .contains('1')

        cy.get('#rowTable0 > :nth-child(2)')
        .contains('Felipe Freitas')

        cy.get('#rowTable0 > :nth-child(3)')
        .contains('11974402293')

        cy.get('#rowTable0 > :nth-child(5)')
        .contains('M')
        
    })

    it('Realizar Cadastro e Editar', ()=>{

        cy.get('#txtNome')
        .should('be.visible').click().type('Felipe Freitas').should('have.value', 'Felipe Freitas')

        cy.get('#numero')
        .should('be.visible').click().type('11974402293').should('have.value', '11974402293')

        cy.get('#dtpDataNascimento')
        .should('be.visible').click().type('2002-11-25').should('have.value', '2002-11-25')

        cy.get('#rdoMasculino').click()

        cy.get('#btnCadastrarSalvar').click()

        cy.get('#rowTable0 > :nth-child(1)')
        .contains('1')

        cy.get('#rowTable0 > :nth-child(2)')
        .contains('Felipe Freitas')

        cy.get('#rowTable0 > :nth-child(3)')
        .contains('11974402293')

        cy.get('#rowTable0 > :nth-child(5)')
        .contains('M')

        cy.get(':nth-child(8) > button')
        .contains('Alterar').should('be.visible').click()

        cy.get('#txtNome')
        .should('be.visible').click().type(' Up').should('have.value', 'Felipe Freitas Up')

        cy.get('#numero')
        .should('be.visible').click().type('5').should('have.value', '119744022935')

        cy.get('#dtpDataNascimento')
        .should('be.visible').click().type('2002-11-23').should('have.value', '2002-11-23')

        cy.get('#rdoFeminino').click()

        cy.get('#btnCadastrarSalvar').click()

        cy.get('#rowTable0 > :nth-child(1)')
        .contains('1')

        cy.get('#rowTable0 > :nth-child(2)')
        .contains('Felipe Freitas Up')

        cy.get('#rowTable0 > :nth-child(3)')
        .contains('119744022935')

        cy.get('#rowTable0 > :nth-child(5)')
        .contains('F')

    })

    it('Realizar Cadastro e Excluir', ()=>{

        cy.get('#txtNome')
        .should('be.visible').click().type('Felipe Freitas').should('have.value', 'Felipe Freitas')

        cy.get('#numero')
        .should('be.visible').click().type('11974402293').should('have.value', '11974402293')

        cy.get('#dtpDataNascimento')
        .should('be.visible').click().type('2002-11-25').should('have.value', '2002-11-25' )

        cy.get('#rdoMasculino').click()

        cy.get('#btnCadastrarSalvar').click()

        cy.get(':nth-child(7) > button')
        .should('be.visible').click()

    })

})