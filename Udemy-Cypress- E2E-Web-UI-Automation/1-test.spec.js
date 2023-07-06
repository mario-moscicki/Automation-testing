describe("Let's start", () => {
  it("1st test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //by tag name
    cy.get("input");
    //by ID
    cy.get("#inputEmail1");
    //by Class Name
    cy.get(".input-full-width");
    // by Atribute Name
    cy.get("[placeholder]");
    //by Atribute name and Value
    cy.get("[placeholder='Email']");
    // by Class Value
    cy.get("[class='input-full-width size-medium shape-rectangle']");
    //by Tag name an Atribute with value
    cy.get("input[placeholder='Email']");
    //by two different attributes
    cy.get("[placeholder='Email'][type='email']");
    //by tag name, attribute with value, ID and Class name
    cy.get("input[placeholder='Email']#inputEmail1.input-full-width");
    //most Recomended by cypress
    cy.get("[data-cy='imputEmail1']");
  });
  it("2nd test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //Test case(learn-2): trying to jump on "Sign in" button from Horizontal form section in Form Layouts
    //-go to tested site
    //-from left menu click on form link
    //-from drop down submenu click on form layouts
    //-I used "Email" field class to come closer in DOM tree
    //-I added more dependencies like -parent of this field
    //-from DOM tree i asked to find "button"
    //-t should contain "Sign in"
    //-button must be parent of "form" class
    
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form");
    find("");
  });
  it.only("3rd test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.get('[data-cy="signInButton"]')
      .contains("Sign in")
      .contains('[status="primary"]', "Sign in");
  });
  it.only("4rd test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.get('[ng-reflect-status="primary"]')
      .contains("Sign in")
      .contains('[status="primary"]', "Sign in");
  });
});
