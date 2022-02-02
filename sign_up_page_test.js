describe("Sign up page", () => {
  it("checking fields on Sign up page", () => {
    cy.visit("http://localhost:3000");

    //click on the link Dont have account - Sign Up
    cy.contains("Sign Up").click();
    //First name
    cy.get("#firstName").type("aaaaa");
    cy.wait(2000);
    //Last name
    cy.get("#lastName").type("aaaaa");
    cy.wait(2000);
    //Username
    cy.get("#username").type("aaaaaa123");
    cy.wait(2000);
    //Password
    cy.get("#password").type("123456789");
    cy.wait(2000);
    //Confirm password
    cy.get("#confirmPassword").type("123456789");
    cy.wait(2000);
  });

  it("checking if info about 'password below than 4 characters' & 'Password does not match' is visible", () => {
    cy.visit("http://localhost:3000");

    //click on the link Dont have account - Sign Up
    cy.contains("Sign Up").click();
    //First name
    cy.get("#firstName").type("aaaaa");
    cy.wait(2000);

    //Last name
    cy.get("#lastName").type("aaaaa");
    cy.wait(2000);

    //Username
    cy.get("#username").type("aaaaaa123");
    cy.wait(2000);

    //Password
    cy.get("#password").type("123");
    cy.wait(2000);
    cy.get("#password-helper-text").contains("Password must contain at least 4 characters");
    cy.wait(2000);

    //Confirm Password
    cy.get("#confirmPassword").type("12345");
    cy.wait(2000);
    cy.get("#confirmPassword-helper-text").contains("Password does not match");
  });
});
