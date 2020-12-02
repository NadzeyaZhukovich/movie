describe('Testing the app router', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should move to the page movie When clicked link movie', () => {
    cy.get('[data-cy="navigation-list"] > :nth-child(2)')
      .click();

    cy.url()
      .should('include', '/movies');

    cy.get('[data-cy="page-movie-title"]')
      .invoke('text')
      .should('equal', 'Movies');
  });

  it('Should move to the page "TV Shows" When clicked link "TV Shows"', () => {
    cy.get('[data-cy="navigation-list"] > :nth-child(3)')
      .click();

    cy.url()
      .should('include', '/shows');

    cy.get('[data-cy="page-tv-shows-title"]')
      .invoke('text')
      .should('equal', 'TV Shows');
  });

  it('Should move to the page "People" When clicked link "People"', () => {
    cy.get('[data-cy="navigation-list"] > :nth-child(4)')
      .click();

    cy.url()
      .should('include', '/people');

    cy.get('[data-cy="page-people-title"]')
      .invoke('text')
      .should('equal', 'People');
  });

  it('Should move to the page "Home" When clicked link "Home"', () => {
    cy.get('[data-cy="navigation-list"] > :nth-child(1)')
      .click();

    cy.url()
      .should('include', '/');
  });
});
