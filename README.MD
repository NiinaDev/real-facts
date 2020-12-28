# real-facts

Real Facts by [Snapple](https://www.snapple.com/real-facts)

## Source

All facts are scraped from the official [Snapple](https://www.snapple.com/real-facts) website.

## Install

```
$ npm install real-facts
```

## Usage
Check [test.js](./test.js) for an example

```js
const { getFact } = require("real-facts");

let fact = await getFact()
// fact = { value: '455', fact: 'Lobsters can live up to 50 years.' }
```

## Explanation

```js
{ 
    value: '455', // Fact Number (ex. Fact #455)
    fact: 'Lobsters can live up to 50 years.' // Fact (ex. Fact: Lobsters can live up to 50 years.)
}
```

## Example
The following example is very oversimplied but gives a rough idea on how to implement it in your discord bot 

```js
const { getFact } = require('real-facts');

client.on(`message`, async message => {
    if (message.content = '!fact') {
        let fact = await getFact();
        message.channel.send('Fact #' + fact.value + ': ' + fact.fact);
        // Fact #455: Lobsters can live up to 50 years.
    }
});
```

