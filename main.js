/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let musicPlayerArea = document.querySelector(".player");
let actualPlayer = document.querySelector(".music-player");
let searchArea = document.querySelector(".search");
let actualSearchForm= document.querySelector(".search-form");
let resultsArea = document.querySelector(".results");
let submitButton = document.getElementById("button");

let getSearch =  encodeURIComponent("");

let baseURL = "https://itunes.apple.com/search?term="

// 2. Create your `submit` event for getting the user's search term

actualSearchForm.addEventListener("submit", function(event){
  event.preventDefault()
  console.log("clicked");
  getSearch = event.target.querySelector("input[name='search']").value

// https://itunes.apple.com/search?term=jack+johnson&limit=25
// 3. Create your `fetch` request that is called after a submission
fetch(baseURL + getSearch + "&limit=25")
  .then(function(response){
    response.json()
    // console.log(response.status);
    .then(function(data){
      console.log(data.results);
    })
  })
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
})
