
import {} from "cypress"
import { IAuth } from "../../src/domain/interfaces/IAuth"

describe('Login form', () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000/#/login')
    cy.get('[data-cy="UI-input-text-email"]').as("emailField")
    cy.get('[data-cy="UI-input-text-password"]').as("passwordField")
    cy.get('[data-cy="UI-button-login"]').as("loginButton")
    cy.get('[data-cy="UI-form-error-message-login"]').as("loginFormError")
  })
  it("Empty form", () => {
    cy.get("@loginButton").should("be.disabled")
  })
  it('Empty email and password with blank spaces', () => {
    cy.get("@emailField").type("  ")
    cy.get("@passwordField").type("  ")
    cy.get("@loginButton").should("be.disabled")
  })
  it('Empty email with valid password', () => {
    cy.get("@emailField").type("  ")
    cy.get("@passwordField").type("1234")
    cy.get("@loginButton").should("be.disabled")
  })
  it('Not valid email and blank spaces', () => {
    cy.get("@emailField").type("emailfield")
    cy.get("@passwordField").type("1234")
    cy.get("@loginButton").should("be.disabled")
  })
  it('Valid email and blank spaces', () => {
    cy.get("@emailField").type("emailfield@mail.com")
    cy.get("@passwordField").type("  ")
    cy.get("@loginButton").should("be.disabled")
  })
  it('Valid email and valid password with invalid credentials', () => {
    cy.get("@emailField").type("emailfield@mail.com")
    cy.get("@passwordField").type("1234")
    cy.get("@loginButton").click()
    cy.get("@loginFormError").should("be.visible")
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
      cy.get("@emailField").type(email)
      cy.get("@passwordField").type(password)
      cy.get("@loginButton").click()

      cy.url().should("contain", "/")
    })
    cy.clearCookies()
    cy.request({
      url: "https://localhost:5000/test/drop-collections",
      method: "PUT",
    })
  })
})
describe('View title', () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000/#/login')
  })

  it("View must have view title header", () => {
    cy.get('[data-cy="view-title"]').should("be.visible")
  })
})
describe("Register text and link", () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000/#/login')
    cy.get('[data-cy="not-registed-text"]').as("notRegistered")
  })
  it("Not registered component must be visible", () => {
    cy.get("@notRegistered").should("be.visible")
  })
  it("Not registered component link must redirect to /signup", () => {
    cy.get("@notRegistered").get("a").should("have.attr", "href", "#/register")
  })
  it("Register text must contain span", () => {
    cy.get("@notRegistered").get("span").should("be.visible")
  })
})