const [axios, cheerio] = [require('axios'), require('cheerio')];

module.exports = {
    getFact() {
        return new Promise(async (resolve, reject) => {
            const [facts, url] = [new Array(), 'https://www.snapple.com/real-facts'];
            const { data } = await axios.get(url), $ = cheerio.load(data), child = $('ol').children();
    
            for (let i = 0; i < child.length; i++) {
                let value = child[i].children[1].children[0].attribs.href.substring(12);
                let fact = child[i].children[1].children[0].children[0].data;
                let obj = { value: value, fact: fact }
                facts.push(obj);
            }
    
            let randFact = facts[Math.floor(Math.random() * facts.length)];
            let errorObj = { value: 'Error', fact: 'Something went wrong, Please try again!' }
    
            if(randFact) {
               resolve(randFact);
            } else {
               reject(errorObj);
            }
        });
    }
}