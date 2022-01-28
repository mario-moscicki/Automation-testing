describe('the home page contains needed elements', () => {
    it('checks that the home page successfully loads', () => {
        cy.visit('http://localhost:3000')
    });

    it('checks that home page contains sign in text', () => {
        cy.get('h1').contains('Sign in')
    })

    it('check that home page contains username field', () => {
        cy.get('label').contains('Username')

    })

    it('checks that home page contains password field', () => {
        cy.get('label').contains('Password')

    })

    it('check that rember me on the home page contains checkbox', () => {
        cy.get('[type="checkbox"]').check()
    })

    it('check that home page has disabled sign in button', () => {
        cy.get('button').should('be.disabled')
    })

    it('check that link for sign up account redirects to sign up page', () => {

        // click on link with info dont have acc.
        cy.contains('Sign Up').click()

        // new url contain sign up text
        cy.url().should('include', '/signup')

    })

})


