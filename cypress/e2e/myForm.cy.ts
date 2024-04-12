describe("myForm", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[name="name"]').type("firstName");
    cy.get('[type="number"]').type("40");
    cy.get('[type="submit"]').click();
  });
});
