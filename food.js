var apiData = {
  url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  type: 'food_Category'
}

var apiUrl = `${apiData.url}${apiData.type}`

console.log(apiUrl);
