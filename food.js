
let apiData = {
  url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  strMeal: "beef",
}

let {url, strMeal} = apiData;

let apiUrl = `${url}${strMeal}`

// console.log(apiUrl);

fetch(apiUrl)
  .then( (data) => data.json() )
  // .then( (food) => console.log(food.meals[0].strMeal) )
  .then( (food) => generateDish(food) )


  let generateDish = (data)=>{
      console.log(data);
      let html = `
          <div class="name">Food:  ${data.meals[0].strMeal}</div>
          <img src=${data.meals[0].strMealThumb} style="width:160px;height:150px;">
          <div class="type">
            <span>type: ${data.meals[0].strTags}</span>
          </div>
      `
      let foodDiv = document.querySelector('.food');
      foodDiv.innerHTML = html;
  }
