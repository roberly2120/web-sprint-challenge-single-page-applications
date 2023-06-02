describe("Pizza Order Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

it("sanity check", () => {
    expect(1+1).to.equal(2);
})

const nameInput = () => cy.get("input[name=name]");
const sizeInput = () => cy.get("select[name=size]");
const sauceInput = () => cy.get("select[name=sauce]")
const specialInput = () => cy.get("input[name=special]");
const pepperoniBox = () => cy.get("input[name=pepperoni]")
const mushroomsBox = () => cy.get("input[name=mushrooms]")
const olivesBox = () => cy.get("input[name=olives]")
const pineappleBox = () => cy.get("input[name=pineapple]")
const submitBtn = () => cy.get("button[id='submit']")

it("user can type name into name textbox", () => {
    cy.visit("http://localhost:3000/pizza")
    nameInput().type("Ryan Oberly");
    nameInput().should("have.value", "Ryan Oberly")
    nameInput().clear()
})
it("user can select more than one topping", () => {
    cy.visit("http://localhost:3000/pizza")
    pepperoniBox().check()
    mushroomsBox().check()
    olivesBox().check()
    pineappleBox().check()
    pepperoniBox().should("be.checked")
    mushroomsBox().should("be.checked")
    olivesBox().should("be.checked")
    pineappleBox().should("be.checked")
    cy.visit("http://localhost:3000")
})
it("submit button functions as expected", () => {
    cy.visit("http://localhost:3000/pizza")
    sizeInput().select("Large")
    sauceInput().select("Robust Tomato")
    pepperoniBox().check()
    specialInput().type("Make the pizza extra tasty")
    nameInput().type("John Lastname")
    submitBtn().click()
    cy.contains("Review your order").should("exist");


})

})