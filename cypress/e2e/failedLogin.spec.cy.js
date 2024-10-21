describe('failedLogin Functionality', () => {

    const validEmail = 'wrong@email.com';
    const validPassword = '123456';

    it('Logs in with invalid credentials', () => {
        cy.visit('/index.html');

        cy.get('#registerModal').should('be.visible').then(($modal) => {
            if ($modal.length) {
                cy.get('#registerModal .btn-close').click(); // Adjust selector for the close button
            }
        });
        cy.contains('Login').click()

        cy.get('input[name="email"]').first().type(validEmail);
        cy.get('input[name="password"]').first().type(validPassword);
        cy.get('button[type="submit"].btn-success').first().click();
    });
});