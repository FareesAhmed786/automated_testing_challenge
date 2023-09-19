import { Selector } from 'testcafe';

fixture('Deep thought')
    .page('https://dev.deepthought.education/login');

test('Test successful login with valid credentials.', async t => {
    await t.typeText("#username","fareesahmed").typeText("#password","farees").pressKey("enter");
    await t.expect(Selector("#page-content-wrapper>nav>h5").innerText).contains('Welcome to DeepThought');
});

test('Test unsuccessful login attempts with invalid credentials.', async t => {
    await t.typeText("#username","fareesahmed").typeText("#password","abc").pressKey("enter");
    await t.expect(Selector("#login-error-notify>strong").innerText).contains('Login Unsuccessful');
});

test('Validate that appropriate error messages are displayed for invalid login attempts.', async t => {
    await t.typeText("#username","abc").typeText("#password","farees").pressKey("enter");
    await t.expect(Selector("#login-error-notify>strong").innerText).contains('Login Unsuccessful');
});

test('On successful login, validate that the user is redirected to the dashboard screen.', async t => {
    await t.typeText("#username","fareesahmed").typeText("#password","farees").pressKey("enter");
    await t.expect(Selector("#page-content-wrapper>nav>h5").innerText).contains('Welcome to DeepThought');
});