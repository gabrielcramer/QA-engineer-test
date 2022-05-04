// * Cypress Test #2 for Agillic QA Lead position *

// Task:
// 1. Rewrite "createEmail" into "createContent" and add support for both an "email" and "sms" contentType.

// Info you need:
// sms root folder: Your SMS Messages
// sms modal header: Create SMS

// Elements
const inputFieldElement = '.modal input'
const modalHeaderElement = '.modal .header'
const contentTree = '.contentTree'
const contentTreeElement = '.contentTree .createBtn'
const spinner = '.spinner'

// Labels
const rootFolderName = 'Your Emails'
const modalHeader = 'Create Email'

export function createEmail({name, parent = rootFolderName}) {
  cy.get(contentTree).contains(parent).click()
  cy.get(contentTreeElement).click()
  cy.get(spinner, {timeout: 5000}).should('not.exist')

  cy.get(modalHeaderElement).should('have.text', modalHeader)
  cy.get(inputFieldElement).clear().type(name).type('{enter}')
  cy.get(spinner, {timeout: 5000}).should('not.exist')
}