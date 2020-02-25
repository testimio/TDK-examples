'use strict';

const expect = require('chai').expect;
const {
    go, withContext, test,
} = require('testim');

const BUTTON = '#btn';
const IFRAME = '#frame';


test('Click in iframe example', async () => {
    await go('http://jsbin.testim.io/lel/4');
    const { click, waitForText } = withContext({
        //switch to the context of the iframe
        frameSelector: IFRAME,
        //Identifier of the iframe
    });
    await click(BUTTON);
    await waitForText(BUTTON, 'I have been clicked!');
});

test.only('Extract text from an element in iframe', async () => {
    await go('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick');
    const { text, waitForText } = withContext({
        //switch to the context of the iframe
        frameSelector: '#iframeResult',
    });
    const heder_text = await text('body > h1');
    //the header text is in the iframe
    expect(heder_text).to.equal('The onclick Event');
});

