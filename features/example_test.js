Feature('Example test');

xScenario('test something 1 @firstrun', (I) => {
    I.amOnPage('/');
    I.see('GitHub');
});

xScenario('test something 2', (I) => {
    I.amOnPage('/');
    I.see('GitHub');
});

xScenario('test something 3 @firstrun', (I) => {
    I.amOnPage('/');
    I.see('GitHub');
    I.clickSomeElement('[type="submit"]');
});

Scenario('test something 4 @firstrun', (I) => {
    I.amOnPage('/');
    I.see('GitHub');

});