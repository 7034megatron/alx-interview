#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
    return;
  }
  const data = JSON.parse(body);
  const characters = data.characters;

  characters.forEach((characterUrl) => {
    request(characterUrl, (charError, charResponse, charBody) => {
      if (charError) {
        console.error('Error:', charError);
        return;
      }
      if (charResponse.statusCode !== 200) {
        console.error('Failed to fetch data. Status code:', charResponse.statusCode);
        return;
      }
      const character = JSON.parse(charBody);
      console.log(character.name);
    });
  });
});

