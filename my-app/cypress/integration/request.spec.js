describe('Request', () => {
    it('displays articles from API', () => {
        cy.request('/api/articles').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.articles).to.have.length(10);
        });
    });
});
