describe('Login Functionality', () => {

    const validEmail = 'jotanv00100@stud.noroff.no';
    const validPassword = 'jegerher123456';

    it('Logs in with valid credentials', () => {
        cy.visit('/index.html');

        cy.get('#registerModal').should('be.visible').then(($modal) => {
            if ($modal.length) {
                cy.get('#registerModal .btn-close').click();
            }
        });

        cy.contains('Login').click()

        cy.get('input[name="email"]').first().type(validEmail);
        cy.get('input[name="password"]').first().type(validPassword);
        cy.get('button[type="submit"].btn-success').first().click();

        cy.url().should('include', '?view=profile');
        cy.contains('stud.noroff.no').should('be.visible');
    });
});