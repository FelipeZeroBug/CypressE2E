import { faker } from '@faker-js/faker';
import "cypress-real-events";
const randomName = faker.name.findName()
const randomNumber = faker.phone.number('########')

const inicial = require('../support/elements').ELEMENTS


class ClassTelaInicial {


    ValidaH1() {

        cy.get('h1')
            .contains('Curso Automação de Testes Bàsico').should('have.text', 'Curso Automação de Testes Bàsico')

        


    }

    ValidaBtn() {


        cy.get('a[href="./login.html"]').as('BtnVoltar')
            .should('be.visible')
        cy.log('Botão Voltar Vísivel')
        // cy.pause() /*Comando para Pausar os testes */


        cy.get('a[href="texto.html"]').as('BtnTexto')
            .should('be.visible')
        cy.log('Botão Texto Vísivel')


        cy.get('a[href="imagem.html"]').as('BtnImagem')
            .should('be.visible')
        cy.log('Botão Imagem Vísivel')

        cy.get('input[id="btnCadastrarSalvar"]')
            .should('be.visible').should('have.value', 'Cadastrar')
    }

    ValidaCampos() {


        cy.get('input[id="txtNome"]')
            .should('be.visible').click().wait(1000).realPress('Tab').realPress('5')

       

        // cy.get('input[id="numero"]')
        //     .should('be.visible')

        // cy.get('input[id="dtpDataNascimento"]')
        //     .should('be.visible')
    }



}


export default new ClassTelaInicial();