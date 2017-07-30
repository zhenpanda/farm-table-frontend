// Fetches suggestions from the server
export function fetchSuggestions() {

  return new Promise((resolve, reject) => {

    const oReq = new XMLHttpRequest();

    oReq.addEventListener("load", function () {
      // Do not use an arrow function...binds to this

      resolve(JSON.parse(this.responseText));
    });

    oReq.addEventListener("error", reject);

    // TODO - hardcode farmer ID
    oReq.open("GET", "http://apps4ag-farm-table.herokuapp.com/farmer/597d21efea45fa0004ebfd19/suggest/nearby");
    oReq.send();
  });
}

export function getBestSuggestion(suggestionsWithFarmer) {

  return suggestionsWithFarmer.suggestions.reduce((best, suggestion) => {

    if (best === null || best.score === 0) {

      console.log('new best', suggestion);
      return suggestion;
    } else {

      return best;
    }
  }, null);
}

export function suggestionToWidgetText(suggestion) {

  console.log('got suggestion', suggestion);
  switch (suggestion.feature) {
    case 'fruit':
      return {
        title: 'Add a Fruit Tour?',
        subtitle: 'It looks like there are a lot of fruit growers in your area. Are you one of them?',
        buttons: [
          {
            buttonText: 'Add an Orchard Tour',
            type: 'orchard',
            tour: {
              title: 'Orchard Tour',
              description: 'Take a tour of our lovely orchards, followed by a nice meal.',
              price: 30
            }
          },
          {
            buttonText: 'Add Strawberry Picking',
            type: 'strawberry',
            tour: {
              title: 'Strawberry Picking',
              description: 'Pick strawberries fresh from the field, followed by a nice meal.',
              price: 25
            }
          },
          {
            name: 'No, thank you.',
            type: 'No'
          }
        ]
      };

    // These are some of the other features in our API at the moment...
    // But we will filter to only care about fruit for now.
    case 'dairy':
    case 'veggie':
    case 'cattle':
    case 'goats':
    case 'grains':
    case 'sheep':
    case 'poultry':
    default:
      return null;
    break;
  }
}
