'use strict';

const expect = require('chai').expect;
const {
    go, evaluate, test,
} = require('testim');

const BUTTONS = 'body > button';
const LIST_ITEMS = 'body > ul > li';

test('evaluate', async () => {
    await go('http://jsbin.testim.io/nuv/2');
    const BUTTONS = 'body > button';
    const LIST_ITEMS = 'body > ul > li';
    const numberOfBtn = await evaluate((BUTTONS) => document.querySelectorAll(BUTTONS).length, BUTTONS);
    expect(numberOfBtn).to.equal(6);
    const numberOfListItems = await evaluate((LIST_ITEMS) => document.querySelectorAll(LIST_ITEMS).length, LIST_ITEMS);
    expect(numberOfListItems).to.equal(4);
});
