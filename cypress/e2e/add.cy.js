/// <reference types= "cypress" />


describe('empty spec', () => {

  beforeEach(() => {
    cy.eyesOpen({
      appName: "tau-todo-app",
      testName: Cypress.currentTest.title
    })
  });
  afterEach(() => {
    cy.eyesClose()
  });
  it('should store the imput file as value', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-testid="todo-input"]').type('todo1')
    cy.get('[data-testid="todo-input"]').should('have.value', 'todo1')


    cy.eyesCheckWindow({
      tag: "add input",
      target: "region",
      matchLevel: "Strict",
      selector: {
        type: "name",
        selector: "add_todo"
      }
    })
  })
})