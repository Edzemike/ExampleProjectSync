Feature('Example test 2');

Scenario('This test should not be skipped @firstrun', (I) => {
    I.amOnPage('/features');
    I.see('GitHub');
});