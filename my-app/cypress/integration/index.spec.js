describe('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should load our app and show content based on input', () => {
        cy.get('nav').contains('a');
        cy.get('form');
        cy.get('input[name=search]').type('Beauty');
        cy.server();
        cy.route({
            url: '/api/articles',
            method: 'GET',
            params: {
                q: 'beauty'
            },
            response: { status: 'Saved', code: 201 }
        });
    });

    it('should load our app and show content based on clicked filter', () => {
        cy.get('main div').eq(4).click();
        cy.server();
        cy.route({
            url: '/api/articles',
            method: 'GET',
            params: {
                q: 'art'
            },
            response: { status: 'Saved', code: 201 }
        });
    });
});
