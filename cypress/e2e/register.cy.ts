
import {} from "cypress"
import { IAuth } from "../../src/domain/interfaces/IAuth"

describe("Register form", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000/#/register")
     cy.get('[data-cy="UI-input-text-email"]').as("emailField")
     cy.get('[data-cy="UI-input-text-password"]').as("passwordField")
     cy.get('[data-cy="UI-input-text-repeat-password"]').as("repeatPasswordField")
     cy.get('[data-cy="UI-button-register"]').as("registerButton")
  })
  afterEach(() => {
    cy.request({
      url: "https://localhost:5000/test/drop-collections",
      method: "PUT",
    })
  })

  it("Empty form", () => cy.get("@registerButton").should("be.disabled"))
  it("Blank fields must keep button disabled", () => {
    cy.get("@emailField").type("  ")
    cy.get("@passwordField").type("  ")
    cy.get("@repeatPasswordField").type("  ")
    cy.get("@registerButton").should("be.disabled")
  })
  it("Invalid email must keep button disabled", () => {
    cy.get("@emailField").type("notarealemail")
    cy.get("@passwordField").type("12344")
    cy.get("@repeatPasswordField").type("12344")
    cy.get("@registerButton").should("be.disabled")
  })
  it("empty repeat password field must keep button disabled", () => {
    cy.get("@emailField").type("notarealemail")
    cy.get("@passwordField").type("12344")
    cy.get("@registerButton").should("be.disabled")
  })
  it("blank repeat password field must keep button disabled", () => {
    cy.get("@emailField").type("notarealemail")
    cy.get("@passwordField").type("12344")
    cy.get("@repeatPasswordField").type("   ")
    cy.get("@registerButton").should("be.disabled")
  })
  it("empty password field must keep button disabled", () => {
    cy.get("@emailField").type("notarealemail")
    cy.get("@repeatPasswordField").type("12344")
    cy.get("@registerButton").should("be.disabled")
  })
  it("blank repeat password field must keep button disabled", () => {
    cy.get("@emailField").type("notarealemail")
    cy.get("@passwordField").type("  ")
    cy.get("@repeatPasswordField").type("12344")
    cy.get("@registerButton").should("be.disabled")
  })
  it("Different passwords must keep button disabled", () => {
    cy.get("@emailField").type("notarealemail")
    cy.get("@passwordField").type("12345")
    cy.get("@repeatPasswordField").type("12344")
    cy.get("@registerButton").should("be.disabled")
  })
  it("Valid mail and same passwords must enable the register button", () => {
    cy.get("@emailField").type("ncarm89@gmail.com")
    cy.get("@passwordField").type("12345")
    cy.get("@repeatPasswordField").type("12345")
    cy.get("@registerButton").should("be.enabled")
  })
  it("Create an user with a none registered email", () => {
    const email = "ncarm89@gmail.com"
    const password = "12344"

    cy.get("@emailField").type(email)
    cy.get("@passwordField").type(password)
    cy.get("@repeatPasswordField").type(password)

    cy.get("@registerButton").click()
  })
  it("Create an user with an email already registered", () => {
    const email = "ncarm89@gmail.com"
    const password = "12344"

    const credentials: IAuth = { email, password }
    cy.request({
      url: "https://localhost:5000/auth/signup",
      method: "POST",
      body: credentials,
    })
    cy.get("@emailField").type(email)
    cy.get("@passwordField").type(password)
    cy.get("@repeatPasswordField").type(password)
    cy.get("@registerButton").click()
  })
})
describe("Title view", () => {
  before(() => {
    cy.visit("https://localhost:3000/#/register")
     cy.get('[data-cy="view-title"]').as("viewTitle")
  })
  it("View must have view title header", () => {
    cy.get('[data-cy="view-title"]').should("be.visible")
  })
})
describe("Already have an account", () => {
  beforeEach(() => {
    cy.visit('https://localhost:3000/#/register')
    cy.get('[data-cy="alreadyHaveAnAccount"]').as("registered")
  })
  it("Not registered component must be visible", () => {
    cy.get("@registered").should("be.visible")
  })
  it("Not registered component link must redirect to /signup", () => {
    cy.get("@registered").get("a").should("have.attr", "href", "#/login")
  })
  it("Register text must contain span", () => {
    cy.get("@registered").get("span").should("be.visible")
  })
})