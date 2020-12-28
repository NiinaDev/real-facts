# real-facts

Real Facts by Snapple

## Contribute

All facts are scraped from the official [Snapple](https://www.snapple.com/real-facts) website. For any questions, contact me on Discord at [Nina#3643](https://discord.com/users/568824243396149248)

## Install

```
$ npm install real-facts
```

## Usage

```js
const { getFact() } = require("real-facts");

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
The following example is very oversimplied but gives a rough idea on how to implement it in your bot 

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

