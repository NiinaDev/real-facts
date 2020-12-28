const { getFact } = require('./index');

async function test() {
    let fact = await getFact()
    console.log(`Fact #${fact.value}: ${fact.fact}`)
}

test();