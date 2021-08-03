/// <reference types = "cypress" />

export class TodoPage {
    navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addTodo(todoText) {
        cy.get('.new-todo').type( todoText + '{enter}')
    }

    toggleTodo(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }

}