describe("the home page - `sing in` contains needed elements", () => {
  it("checks that the home page successfully loads and contains needed elements", () => {
    cy.visit("http://localhost:3000");

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
    cy.visit("http://localhost:3000");

    cy.get("#username").type("Katharina_Bernier");
    cy.wait(2000);
    cy.get("#password").type("s3cret");
    cy.wait(2000);
    cy.get("button").contains("Sign In").click();
    cy.wait(2000);
    cy.get("h6").contains("Katharina_Bernier");
  });

  it("checks that sign in with false/fake username and password doesnt work", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("Katharina_B");
    cy.wait(2000);
    cy.get("#password").type("123456");
    cy.wait(2000);
    cy.get("button").contains("Sign In").click();
    cy.wait(2000);
    cy.get(".MuiAlert-message").contains("Username or password is invalid");
  });

  it("checks that sign in with correct username and wrong password doesnt work", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("Katharina_Bernier");
    cy.wait(2000);
    cy.get("#password").type("123456");
    cy.wait(2000);
    cy.get("button").contains("Sign In").click();
    cy.wait(2000);
    cy.get(".MuiAlert-message").contains("Username or password is invalid");
  });

  it("checks that sign in with wrong username and correct password doesnt work", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("Katharina_B");
    cy.wait(2000);
    cy.get("#password").type("s3cret");
    cy.wait(2000);
    cy.get("button").contains("Sign In").click();
    cy.wait(2000);
    cy.get(".MuiAlert-message").contains("Username or password is invalid");
  });
});
