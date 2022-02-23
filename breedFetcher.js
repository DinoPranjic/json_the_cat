const request = require('request');
const args = process.argv.splice(2);
const query = args[0];


request('https://api.thecatapi.com/v1/breeds/search?q=' + query, (error, response, body) => {

  if (error) {
    console.log('Request failed:', error);
  }
  
  if (body === '[]') {
    console.log('That breed does not seem to exist!');
  } else {
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  }

});