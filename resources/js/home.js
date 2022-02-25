import {services} from '@tomtom-international/web-sdk-services';
import SearchBox from '@tomtom-international/web-sdk-plugin-searchbox';


let searchBox = document.getElementById('search-box');

var options = {
    searchOptions: {
        key: 'xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR',
        language: 'it-IT',
        limit: 1,
        countrySet: 'IT'
    },
    autocompleteOptions: {
        key: 'xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR',
        language: 'it-IT'
    }
};
const ttSearchBox = new SearchBox(services, options);
const searchHtml = ttSearchBox.getSearchBoxHTML();
searchBox.append(searchHtml)

ttSearchBox.on('tomtom.searchbox.resultsfound', function(data) {
    if (data.data.metadata.triggeredBy === 'submit') {
    const results = data.data.results.fuzzySearch.results[0]
    sessionStorage.setItem('location', JSON.stringify(results));
    window.location.href= '/search';
    }
    
});

let cards = document.getElementsByClassName('recommendedPlaces');
console.log(cards);
for (let index = 0; index < cards.length; index++) {
    const i = index
    cards[index].addEventListener('click', function() {
        const city = cards[index].getElementsByClassName('RecomenText')[0].innerText
        // console.log(city);
        services.fuzzySearch({
            key: 'xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR',
            query: city
          }).then(function(data){
           const results = data.results[0]
            sessionStorage.setItem('location', JSON.stringify(results))
            window.location.href='/search'
          });
    })
}