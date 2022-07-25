
import {} from "cypress"
import { IAuth } from "../../src/domain/interfaces/IAuth"

describe('Login form', () => {
  let fieldAliases

  before(() => {
    fieldAliases = {
      email: '[data-cy="UI-input-text-email"]',
      password: '[data-cy="UI-input-text-password"]',
      loginButton: '[data-cy="UI-button-login"]',
      loginFormError: '[data-cy="UI-form-error-message-login"]',
    }
  })
  beforeEach(() => {
    cy.visit('https://localhost:3000/#/login')
  })
  it("Empty form", () => {
    cy.get(fieldAliases.loginButton).should("be.disabled")
  })
  it('Empty email and password with blank spaces', () => {
    cy.get(fieldAliases.email).type("  ")
    cy.get(fieldAliases.password).type("  ")
    cy.get(fieldAliases.loginButton).should("be.disabled")
  })
  it('Empty email with valid password', () => {
    cy.get(fieldAliases.email).type("  ")
    cy.get(fieldAliases.password).type("1234")
    cy.get(fieldAliases.loginButton).should("be.disabled")
  })
  it('Not valid email and blank spaces', () => {
    cy.get(fieldAliases.email).type("emailfield")
    cy.get(fieldAliases.password).type("1234")
    cy.get(fieldAliases.loginButton).should("be.disabled")
  })
  it('Valid email and blank spaces', () => {
    cy.get(fieldAliases.email).type("emailfield@mail.com")
    cy.get(fieldAliases.password).type("  ")
    cy.get(fieldAliases.loginButton).should("be.disabled")
  })
  it('Valid email and valid password with invalid credentials', () => {
    cy.get(fieldAliases.email).type("emailfield@mail.com")
    cy.get(fieldAliases.password).type("1234")
    cy.get(fieldAliases.loginButton).click()
    cy.get(fieldAliases.loginFormError).should("be.visible")
  })
  it('Valid form and valid credentials', () => {
    const email = "ncarm89@gmail.com"
    const password = "12344"

    const credentials: IAuth = { email, password }
    cy.request({
      url: "https://localhost:5000/auth/signup",
      method: "POST",
      body: credentials,
    })

    cy.request({
      url: "https://localhost:5000/auth/signin",
      method: "POST",
      body: credentials,
    }).then(() => {
      cy.get(fieldAliases.email).type(email)
      cy.get(fieldAliases.password).type(password)
      cy.get(fieldAliases.loginButton).click()

      cy.url().should("contain", "/")
    })
    cy.clearCookies()
    cy.request({
      url: "https://localhost:5000/test/drop-collections",
      method: "PUT",
    })
  })
})
