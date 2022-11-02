


async function getSynonyms() {
    let url = 'https://www.openthesaurus.de/synonyme/search?q=test&format=application/json';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log('Response is ', await responseAsJson);
    let synsets = responseAsJson['synsets'];
    // console.log(synsets);
}





