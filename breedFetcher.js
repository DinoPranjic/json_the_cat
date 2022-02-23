const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      if (body === '[]') {
        callback('That breed does not exist', null);
      } else {
        const data = JSON.parse(body);
        callback(null, data[0]["description"]);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

/* OLD CODE
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
*/