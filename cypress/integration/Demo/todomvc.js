/// <reference types = "cypress" />

import { TodoPage } from "../../page-objects/todo-page"

it("a test for navigating web app under test", () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
})


it("a test to be able to add a new todos to the list", ()=>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('learn cypress{enter}')
})

// cypress is consider non flaky framework because it waits
// for the element to be found without writing a delay. 

// it("a test for the delay of cypress and how to change it", ()=>{
//     cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')
//     cy.get('.new-todo', {timeout:6000}).type('learn cypress{enter}')
// })


it('a test for clicking on an element', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', {timeout:6000}).type('learn cypress{enter}')
    cy.get('.toggle').click()
})

it('a test in order to find a word in the DOM', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', {timeout:6000}).type('learn cypress{enter}')
    cy.get('.toggle').click()
    cy.contains('Clear').click()
})

// validation in cypress
// grouping tests in mocha 

describe('validating the todos section', () => {

    const todoPage = new TodoPage()

    beforeEach(()=>{
        todoPage.navigate()
        todoPage.addTodo('clean room')
    })

    it('a test to validate adding text in the todo', ()=>{

        cy.get('label').should('have.text', 'learn cypress')
        cy.get('.toggle').should('not.be.checked')
       
    })
    it.only('a test to validate a mark in the todo', ()=>{
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    })
    it('a test to clear completed todos', ()=>{
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })

})

// to run the tests in interactive way 
// $ npx cypress open 

// to run the tests in detached mode 
// $ npx cypress run

// to run a specific test 
// $ npx cypress run --spec {tests location}
