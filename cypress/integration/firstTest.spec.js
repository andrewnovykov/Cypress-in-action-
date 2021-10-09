describe("Make shure site loads", () => {
  it("Page Loads", () => {
    cy.visit('');
    cy.contains("ngx");
    cy.contains("admin"); //contains some string
    cy.url().should("include", "/pages");    
  });
});
