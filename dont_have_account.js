describe("MuiInputBase in Sign Up page - contains helper text", () => {
  //const realUsername = "Katharina_Bernier";
  //const validPassword = "s3cret";
  //const fakeUsername = "Fake_Mario";
  //const invalidPassword = "12ERws";

  //beforeEach(() => {
  //  cy.visit("http://localhost:3000");
  //  cy.get("#signup").contains("Don't have an account? Sign Up").click();
  //});

  it("Login-click", () => {
    cy.visit("http://localhost:3000");
    cy.get("#signup").contains("Don't have an account? Sign Up").click();
  });

  it("First name helper text must be visible", () => {
    cy.get("#firstName").click();
    cy.get("h1").contains("Sign Up").click();
    cy.get("#firstName-helper-text").contains("First Name is required").should("be.visible");
  });
  it("Last name helper text must be visible", () => {
    cy.get("#lastName").click();
    cy.get("h1").contains("Sign Up").click();
    cy.get("#lastName-helper-text").contains("Last Name is required").should("be.visible");
  });
  it("User_name helper text must be visible", () => {
    cy.get("#username").click();
    cy.get("h1").contains("Sign Up").click();
    cy.get("#username-helper-text").contains("Username is required").should("be.visible");
  });
  it("Password helper text must be visible", () => {
    cy.get("#password").click();
    cy.get("h1").contains("Sign Up").click();
    cy.get("#password-helper-text").contains("Enter your password").should("be.visible");
  });
  it("Confirm Password helper text must be visible", () => {
    cy.get("#confirmPassword").click();
    cy.get("h1").contains("Sign Up").click();
    cy.get("#confirmPassword-helper-text").contains("Confirm your password").should("be.visible");
  });
});
