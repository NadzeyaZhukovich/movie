describe('Check the movie list', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/3/movie/popular*',
      response: 'fixture:movies_mock_data.json',
    });
    cy.visit('/');
  });

  it('Should contain 6 elements When array movieCarts has 6 objects', () => {
    cy.get('[data-cy="movie-list"]')
      .children()
      .should('have.length', 6);

    cy.get('[data-cy="movie-list"] > :nth-child(1) [data-cy="movie-cart-movie-title"]')
      .invoke('text')
      .should('equal', 'Lucifer');

    cy.get('[data-cy="movie-list"] > :nth-child(2) [data-cy="movie-cart-movie-title"]')
      .invoke('text')
      .should('equal', 'Fear the Walking Dead');

    cy.get('[data-cy="movie-list"] > :nth-child(3) [data-cy="movie-cart-movie-title"]')
      .invoke('text')
      .should('equal', 'Archive');

    cy.get('[data-cy="movie-list"] > :nth-child(4) [data-cy="movie-cart-movie-title"]')
      .invoke('text')
      .should('equal', 'The 100');

    cy.get('[data-cy="movie-list"] > :nth-child(5) [data-cy="movie-cart-movie-title"]')
      .invoke('text')
      .should('equal', 'Final Destination 3');

    cy.get('[data-cy="movie-list"] > :nth-child(6) [data-cy="movie-cart-movie-title"]')
      .invoke('text')
      .should('equal', 'The Umbrella Academy');
  });
});
