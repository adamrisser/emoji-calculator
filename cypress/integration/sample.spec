describe('Emoji combinations', () => {
  it('should create a black, female astronaut', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('👩').click();

    cy.displayShouldBe('👩');

    cy.contains('🏿').click(); // click fitzpatrick scale 5

    cy.displayShouldBe('👩');

    cy.clickEnter();

    cy.computedEmojiShouldBe('👩🏿');

    cy.contains('+').click();

    cy.contains('🚀').click();

    cy.clickEnter();

    cy.computedEmojiShouldBe('👩🏿‍🚀');

    cy.percySnapshot('combo astronaut');
  });
});
