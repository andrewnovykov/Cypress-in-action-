describe("Make shure site loads", () => {
  it("Page Loads", () => {
    cy.visit('');
    
    cy.contains("ngx");
    cy.contains("admin"); //contains some string
    cy.url().should("include", "/pages");    
  });

  it("Testing forn input", () => {
    cy.visit("");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.get("#inputEmail"); //select bi ID
    cy.get(".input-full-width"); //select by calssName
    cy.get("[placeholder]"); //by attr name
    cy.get('[placeholder="Email"]'); //by attr name & value
    cy.get('[class="input-full-width size-medium shape-rectangle"]'); //select by calss nValue
    cy.get('input[placeholder="Email"]'); //by tag name and attr and value
    cy.get('[placeholder="Email"][type="email"]'); //two diff attr
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width'); //by tag name, attr with value , id & class name
    cy.get('[data-cy="imputEmail1"]'); //recomended by cy (data-cy="imputEmail1")
  })


});
