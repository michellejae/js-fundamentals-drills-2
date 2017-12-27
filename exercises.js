/* #getAllUsernames
 *
 * Takes in an object and returns an array of all usernames.
 *
 * @param {Object}
 * @return {Array}
 */

var getAllUsernames = function (obj) {
  var result = [];
  var users = obj.data.id;
  for (var i in users){
    //console.log(users[i].username)
    result.push(users[i].username)
  }
  return result
  
}

/* #hometownCity
 *
 * Takes in an array and returns a string of the users hometown city.
 *
 * @param {Array}
 * @return {String}
 */

 // ask mel about why it becomes undefined if you try to do arr[i].hometown.state.city?
var hometownCity = function (arr){
  for (var i=0 ; i<arr.length; i++){
     var homeCity = arr[i].hometown.state
    for (var key in homeCity) {
      return homeCity[key].city
    }
  }
}

/* #usersCurrentState
 *
 * Takes 2 arguments 'data' and 'usernames' and returns a new object with the username as the key and the user's current state as the value.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var usersCurrentState = function (data, usernames){
  let obj = {}

  for (let i=0; i<data.length; i++){
    obj[usernames[i]] = data[i][1].currentLocation.state
   // console.log(data[i][1].currentLocation.state)
  }
return obj
}


/* #findAdmin
 *
 * Takes in an object and returns the username of the admin.
 *
 * @param {Object}
 * @return {String}
 */

var findAdmin = function (obj) {
  var info = obj.data.id;
  for (var key in info) {
   if (info[key].admin === true) {
     return info[key].username 
   }
  }
}

/* #addNewMovie
 *
 * Takes in 3 arguments 'data', 'id', 'newMovie'. Returns an array of movie titles.
 *
 * @param {Object}
 * @param {Number} id
 * @param {String} movie to add to array
 * @return {Array}     
 */

var addNewMovie = function (obj, num, str){
  var array = obj.data.id[num].favoriteMovies
  array.push(str)
  return array
} 

 
/* #favoriteBooks
 *
 * Takes in an object and returns an array containing an object with the users favorite books with the author as the key and the title as the value.
 *
 * @param {Object}
 * @return {Array}
 */

var favoriteBooks = function (obj) {
  let arr = [];
  let newObj = {};
  let books = obj.data.id
  for (let i in books){
    newObj[books[i].favoriteBook.author] = books[i].favoriteBook.title
  }
  arr.push(newObj)
  return arr

}

/* #countTracks
 *
 * Takes in an object and returns the number amount of tracks offered.
 *
 * @param {Object}
 * @return {Number}
 */

var countTracks = function (obj) {
  let count = 0;
  let dev = obj.devLeague.tracks;
  for (var key in dev){
      count++
  }
  return count
 // console.log(obj.devLeague.tracks)
}

/* #fullTimeStatus
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var fullTimeStatus = function (obj, str) {
  var arr = obj[str];
  for (var i=0; i<arr.length; i++){
     arr[i].fullTime.offered = true
    return arr[i].fullTime
  }
  
}

/* #newTrack
 *
 * Takes in 3 arguments 'data', 'array', and 'string'. Returns an object with a new track with the 'string' as the key and the 'array' as the value.
 *
 * @param {Object}
 * @param {Array}
 * @param {String}
 * @return {Object}
 */

var newTrack = function (obj, arr, str){
  for (var i=0; i<arr.length; i++) {
  obj[str] = arr[i]
  }
  return obj
}

/* #bigDataTrack
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true and doubles the amount of current students attending.
 *
 * @param {Object}
 * @param {String}
 * @return {Object }
 */

var bigDataTrack = function (data, trackName) { 
  //console.log(data);
  //console.log(trackName);
  let result = {};
  //console.log(data.tracks[trackName][0].fullTime);
  let info = data.tracks[trackName][0].fullTime;
  //console.log(info);
  info.offered = true;
  info.currentStudents = 10;

  result[trackName] = info;
  return result
}

/* #increment
 *
 * Takes in 2 arguments 'value' and 'key' and returns key-value pairs in an object.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var incrementAge = function (value, key) {
  var result = {};
  for (var i=0; i<value.length; i++) {
    result[key[i]] = (value[i] + 1) + ' years old'
  }
  return result
}

/* #movieRatings
 *
 * Takes in 2 arguments 'key' and 'value' and returns key-value pairs in an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var movieRatings = function (arr, value){
  var result = {};

  for (var i=0; i<arr.length; i++){
    for (var j=0; j<arr[i].length; j++){
        result[arr[i][j]] = value[j]
        }
      }
      return result
    }




/* #sumOfAllStudents
 *
 * Takes in an object and returns the sum of all currently enrolled students.
 *
 * @param {Object}
 * @return {Number}
 */

var sumOfAllStudents = function (obj){
  var count = -5;
  for (var i in obj){
    let full = obj[i][0].fullTime.currentStudents
    count+=full;
    let part = obj[i][1].partTime.currentStudents
    count+=part
  }
  return count
}

/* #mapLanguageToCreator
 *
 * Takes in 3 arguments 'data', 'createdBy', and 'year' and returns key-value pairs { name: language }.
 *
 * @param {Object} data
 * @param {Array} names
 * @param {Number} year
 * @return {Object}
 */

var mapLanguageToCreator = function (data, names, year){
let result = {};
for (var i in data){
  if(data[i].yearCreated === year){
    result[data[i].createdBy] = i
    
    }
  }
return result
}



/* #mapOccurrences
 *
 * Takes in an object and returns key-value pairs that count how many languages were created in given years { 2017: 1 }.
 *
 * @param {Object} data
 * @return {Object}
 */

var mapOccurrences = function (data) {
  let result = {};
  //console.log(data)
  for (var i in data){
    let year = data[i].yearCreated
    if(result.hasOwnProperty(year)) {
      result[year]++
    } else {
      result[year] = 1
    }
  }
  return result
}
/* #countLanguages
 *
 * Takes in an object and returns the number of languages in the dataset.
 *
 * @param {Object}
 * @return {Number}
 */

var countLanguages = function (obj){
  let count = 0;
  for (var i in obj){
    count++
  }
  return count
}

/* #phoneNumber
 *
 * Takes in a string and returns only the numbers in an array.
 *
 * @param {String} phone number
 * @return {Array}
 */

var phoneNumber = function (str){
  var check = ('0123456789')
  let result = [];
  for (var i=0; i<str.length;i++) {
    if(check.includes(str[i])){
      result.push(+str[i])
    }
  }
 return result
}

/* #phoneNumber
 *
 * Takes in an object and returns the names of the tracks offered reversed.
 *
 * @param {Object}
 * @return {Array}
 */

var reverseStrings = function (obj) {
let arr = [];
let str = ''
let info = obj.devLeague.tracks
  for (var key in info){
    let splitString = key.split('');
    //console.log(splitString)
    let reverseArr = splitString.reverse();
    let joinArr = reverseArr.join('');
    //console.log(joinArr)
    arr.push(joinArr)
    }
    return arr
  }
  //console.log(arr)


/* #getAgeById
 *
 * Takes in an object and returns an array with the user's username and age.
 *
 * @param {Object}
 * @return {Array}
 */

var getAgeById = function (obj){
  let arr = [];
  let info = obj.data.id[3]
  //console.log(info)
  
   // console.log(info)
    arr.push(info.username)
    arr.push(info.age)
    return arr
  }
  


/* #allTheStates
 *
 * Takes in an object and returns an array with all of the state names of where user's have lived.
 *
 * @param {Object}
 * @return {Array}
 */

var allTheStates = function (obj){
  let arr = [];
  for (var i=0; i<obj.length;i++){
    let info = obj[i].citiesLived;
    for (var j=0; j<info.length;j++){
      for (var key in info[j]){
        let state = info[j][key].state
          for (var k in state){
            arr.push(k)
          }
        }
     }
  }
  return arr
}

/* #allTheMovies
 *
 * Takes in an object and returns an array of strings with all the names of each user's favorite movies.
 *
 * @param {Object}
 * @return {Array}
 */

var allTheMovies = function (obj){
  let arr = [];
  for (var i=0; i<obj.length;i++){
    let info = obj[i].favoriteMovies
      for (var j=0; j<info.length; j++){
        arr.push(info[j])
      }
  }
  return arr
}

/* #addCoffeeFlavor
 *
 * Takes in an object and returns a new object with the name of the coffee as the key and the value as an array of flavors plus a new flavor added to each array.
 *
 * @param {Object}
 * @param {String} flavor
 * @return {Object}
 */

var addCoffeeFlavor = function (obj, flavor){
  let result = {};
  for (var key in obj){
    //console.log(key)
    let info = obj[key].flavors;
    info.push(flavor)
    result[key] = info
  }
  return result
}

/* #avgCoffeePrice
 *
 * Takes in 2 arguments 'data' and 'number'. Returns the average price of coffee based on total/number.
 *
 * @param {Object}
 * @param {Number} number of coffee types
 * @return {Number}
 * 
 */

var avgCoffeePrice;

/* #updateBakedGoodsPrice
 *
 * Takes in 2 arguments 'data' and 'discountedPrice' and returns the data object with the new discountedPrice of all bakedGoods.
 *
 * @param {Object}
 * @param {Number} discountedPrice
 * @return {Number}
 * 
 */

var updateBakedGoodsPrice;

/* #costOfCoffeeOnOrder
 *
 * Takes in an object and returns the total cost of all coffee's on order.
 *
 * @param {Object}
 * @return {Number}
 * 
 */

var costOfCoffeeOnOrder;

/* #costOfCoffeeOnOrder
 *
 * Takes in an array and returns a new array with all the flavors of coffee displaying only once in the array.
 *
 * @param {Array}
 * @return {Array}
 * 
 */

var uniqueCoffeeFlavors;

/* #cheapestSandwich
 *
 * Takes in an object and returns a string with the price of the cheapest sandwich and the name of the sandwich. (eg. "$1 sandwichName")
 *
 * @param {Object}
 * @return {String}
 * 
 */

var cheapestSandwich;

/* #allcafeItems
 *
 * Takes in an object and returns key value pairs where the key is the category product (coffee, baked goods, etc) and the value is an array of strings. (eg. { category: ['']})
 *
 * @param {Object}
 * @return {String}
 * 
 */

var allcafeItems;

/* #halfOffSandwiches
 *
 * Takes in an 'array' and a 'number'. If the price of the item is greater than the 'number', return an object with the sandwich name as the key and the value as half the price of it's current price.
 *
 * @param {Array}
 * @return {Object}
 * 
 */

var halfOffSandwiches;

/* #getNoMeatSandwiches
 *
 * Takes in an array and returns an object of only sandwiches with no meat as an ingredient. The key is the name of the sandwich and the value is the price of the sandwich ( eg: { sandwich1: $5 } ).
 *
 * @param {Array}
 * @return {Object}
 * 
 */

var getNoMeatSandwiches;

/* #updateCoffeeInventory
 *
 * Takes in an object, array, and number. Should return a new object with the property 'inStock' and 'ordered', set the value to an object with key as the coffee name and the value as the new amount.
 *
 * @param {Array}
 * @param {Array} amtToRemoveFromStock,
 * @param {Number} maxStock
 * @return {Object}
 * 
 */

var updateCoffeeInventory;

/* #findCupOfCoffee
 *
 * Takes in an object and number. Returns a new object with the name of the coffee as the key and the value set to true if the cup of coffee cost less than or equal to number param.
 *
 * @param {Object} data
 * @param {Number} budget
 * @return {Object}
 * 
 */

var findCoffee;

/* #totalPopulation
 *
 * Takes in an object and returns the total sum of the all the places every user has lived.
 *
 * @param {Object} data
 * @return {Number} sum of population
 * 
 */

var totalPopulation;

/* #placesLived
 *
 * Takes in an object and returns a new object with 2 properties 'hometown' and 'currentLocation' and set the value to an object with the user's username as the key and the state as the value.
 * 
 * example:
 * { home: {person1: 'homeState'},
 * current: {person1: 'currState'}}
 *
 * @param {Object} data
 * @return {Object} user object containing their username, state of hometown and state of currentLocation
 * 
 */

var placesLived;

/* #addSchool
 *
 * Takes in 3 arguments 'data', 'newSchool', and 'tracks'. Returns the 'data' object with the 'newSchool' object added. Set 'tracks' value to an array of tracks offered.
 *
 * @param {Object} data
 * @return {Number} sum of population
 * 
 */

var addSchool;

/* #updateGitHubRank
 *
 * Takes in an object and a number. Returns a new object with a gitHubRank property set to an object with the rank of each language in the data object.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var updateGitHubRank;

/* #top3rankedLang
 *
 * Takes in an object. Returns a new object with the property 'topRankingLanguages' and the value set to an object of the name of the language as the key and the number rank as the value.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var top3rankedLang;

/* #removeIngredient
 *
 * Takes in an object and string. Returns a new object with the property 'availableBread' and the value set to an array of all available breads listed only once.
 *
 * @param {Object} dataObj
 * @param {String} removeIng
 * @return {Object}
 * 
 */

var removeIngredient;

/* #removeIngredient
 *
 * Takes in an object and returns a new object with the key as the name of the item and the value set to the price.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var getPrices;

/* #addName
 *
 * Takes in an object and array. Returns the object with each user's full name where the first element in the array belonging to the first user, second element belonging to the second user, etc...
 *
 * @param {Object} newObj
 * @param {Array} nameArray
 * @return {Object}
 * 
 */

var addName;

module.exports = {
  getAllUsernames: getAllUsernames,
  hometownCity: hometownCity,
  usersCurrentState: usersCurrentState,
  findAdmin: findAdmin,
  addNewMovie: addNewMovie,
  favoriteBooks: favoriteBooks,
  countTracks: countTracks,
  newTrack: newTrack,
  fullTimeStatus: fullTimeStatus,
  bigDataTrack: bigDataTrack,
  incrementAge: incrementAge,
  movieRatings: movieRatings,
  sumOfAllStudents: sumOfAllStudents,
  mapLanguageToCreator: mapLanguageToCreator,
  mapOccurrences: mapOccurrences,
  countLanguages: countLanguages,
  phoneNumber: phoneNumber,
  reverseStrings: reverseStrings,
  getAgeById: getAgeById,
  allTheStates: allTheStates,
  allTheMovies: allTheMovies,
  addCoffeeFlavor: addCoffeeFlavor,
  avgCoffeePrice: null,
  updateBakedGoodsPrice: null,
  costOfCoffeeOnOrder: null,
  uniqueCoffeeFlavors: null,
  cheapestSandwich: null,
  allcafeItems: null,
  halfOffSandwiches: null,
  getNoMeatSandwiches: null,
  updateCoffeeInventory: null,
  findCoffee: null,
  totalPopulation: null,
  placesLived: null,
  addSchool: null,
  updateGitHubRank: null,
  top3rankedLang: null,
  removeIngredient: null,
  getPrices: null,
  addName: null
};