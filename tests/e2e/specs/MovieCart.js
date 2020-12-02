describe('Check the movie cart', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/3/movie/popular*',
      response: 'fixture:movie_cart_mock_data.json',
    });
    cy.visit('/');
  });

  it('Should show the details about the movie When cart hovered', () => {
    cy.get('[data-cy="movie-list"] > :nth-child(1)')
      .trigger('mouseover');

    cy.get('[data-cy="movie-list"] > :nth-child(1) [data-cy="movie-cart-details"]')
      .should('be.visible');

    cy.get('[data-cy="movie-list"] > :nth-child(1) [data-cy="movie-cart-title"]')
      .invoke('text')
      .should('equal', 'Lucifer');

    cy.get('[data-cy="movie-list"] > :nth-child(1) [data-cy="movie-cart-year"]')
      .invoke('text')
      .should('contain', '2016');

    cy.get('[data-cy="movie-list"] > :nth-child(1)')
      .trigger('mouseleave');

    cy.get('[data-cy="movie-list"] > :nth-child(1) [data-cy="movie-cart-details"]')
      .should('not.be.visible');
  });

  it('Should display details about the movie When cart is shown', () => {
    cy.get('[data-cy="movie-list"] > :nth-child(1) [data-cy="movie-cart-movie-title"]')
      .invoke('text')
      .should('equal', 'Lucifer');

    cy.get('[data-cy="movie-list"] > :nth-child(1) [data-cy="movie-cart-ratings"]')
      .invoke('text')
      .should('equal', '8.5');
  });
});
