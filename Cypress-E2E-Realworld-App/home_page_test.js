describe("the home page - `sing in` contains needed elements", () => {
  const realUsername = "Katharina_Bernier";
  const validPassword = "s3cret";
  const fakeUsername = "Fake_Mario";
  const invalidPassword = "12ERws";

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("checks that the home page successfully loads and contains needed elements", () => {
    // checks that home page contains sign in text
    cy.get("h1").contains("Sign in");
    cy.wait(2000);
    // check that home page contains username label
    cy.get("label").contains("Username");
    cy.wait(2000);
    // checks that home page contains password label
    cy.get("label").contains("Password");
    cy.wait(2000);
    // check that rember me on the home page contains checkbox'
    cy.get('[type="checkbox"]').check();
    cy.wait(2000);
    // check that home page has disabled sign in button'
    cy.get("button").should("be.disabled");
    cy.wait(2000);
    // check that link for sign up account redirects to sign up page'
    // click on the link with info Don't have an account? Sign Up"
    cy.contains("Sign Up").click();
    cy.wait(2000);
    // new url contain sign up text
    cy.url().should("include", "/signup");
  });

  it("checks that sign in with real username and password works", () => {
    cy.get("#username").type(realUsername);
    cy.wait(2000);
    cy.get("#password").type(validPassword);
    cy.wait(2000);
    cy.get("button").contains("Sign In").click();
    cy.wait(2000);
    cy.get("h6").contains(realUsername);
  });

  it("checks that sign in with false/fake username and password doesnt work", () => {
    cy.get("#username").type(fakeUsername);
    cy.wait(2000);
    cy.get("#password").type(invalidPassword);
    cy.wait(2000);
    cy.get("button").contains("Sign In").click();
    cy.wait(2000);
    cy.get(".MuiAlert-message").contains("Username or password is invalid");
  });

  it("checks that sign in with correct username and wrong password doesnt work", () => {
    cy.get("#username").type(realUsername);
    cy.wait(2000);
    cy.get("#password").type(invalidPassword);
    cy.wait(2000);
    cy.get("button").contains("Sign In").click();
    cy.wait(2000);
    cy.get(".MuiAlert-message").contains("Username or password is invalid");
  });

  it("checks that sign in with wrong username and correct password doesnt work", () => {
    cy.get("#username").type(fakeUsername);
    cy.wait(2000);
    cy.get("#password").type(validPassword);
    cy.wait(2000);
    cy.get("button").contains("Sign In").click();
    cy.wait(2000);
    cy.get(".MuiAlert-message").contains("Username or password is invalid");
  });
});
