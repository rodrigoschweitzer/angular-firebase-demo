/// <reference types="cypress" />

describe('Task', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/tasks');
        cy.attrDataTest('taskInput')
            .as('taskInput');
    });

    it('Should focus on the input when load the page', () => {
        cy.get('@taskInput')
            .focused();
    });

    it('Should show a clear button when you type something on the input and hide when the input is empty', () => {
        cy.attrDataTest('clearButton')
            .should('not.exist');

        cy.get('@taskInput')
            .type('something');

        cy.attrDataTest('clearButton')
            .should('exist');

        cy.get('@taskInput')
            .type('{selectall}{backspace}');

        cy.attrDataTest('clearButton')
            .should('not.exist');
    });

    it('Should empty the input when press esc or click on the clear buttom', () => {
        const itemText = 'new task';

        cy.get('@taskInput')
            .type(itemText)
            .type('{esc}')
            .should('be.empty');

        cy.get('@taskInput')
            .type(itemText);

        cy.attrDataTest('clearButton').click();

        cy.get('@taskInput')
            .should('be.empty');
    });

    it('Should do nothing when you try to press enter key or click on the send button if the input is empty', () => {
        cy.get('@taskInput')
            .type('first task')
            .type('{enter}');

        cy.attrDataTest('taskList')
            .find('.mat-list-item')
            .as('taskList')
            .its('length')
            .then(length => {
                cy.get('@taskInput')
                    .type('{esc}')
                    .type('{enter}');

                cy.attrDataTest('taskList')
                    .find('.mat-list-item')
                    .should('have.length', length);

                cy.attrDataTest('sendButton').click();

                cy.attrDataTest('taskList')
                    .find('.mat-list-item')
                    .its('length')
                    .should('not.be.greaterThan', length);
            });
    });

    it('Should add a new task on the list', () => {
        const itemText = `new task - ${new Date().toISOString()}`;

        cy.get('@taskInput')
            .type(itemText)
            .type('{enter}');

        cy.attrDataTest('taskList')
            .find('.mat-list-item')
            .should('contain', itemText);
    });



});
