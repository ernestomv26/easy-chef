console.log('Client-side code running');
const button = document.getElementById('submitIngredient');
button.addEventListener('click',function queryRecipes() {
  // request the user from our app's sqlite database
  const userRequest = new XMLHttpRequest();
  // userRequest.responseType = 'text';
  // userRequest.onreadystatechange = function() {
  //   if (userRequest.readyState == XMLHttpRequest.DONE) {
  //      console.log(userRequest.responseText);
  //      var res = JSON.parse(userRequest.responseText);
  //      console.log(res['0']['must'])
  //   }
  // }
  userRequest.open('post', '/submitRecipe');
  userRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  userRequest.send(JSON.stringify({'query': document.getElementById("query").value}));

});

const button1 = document.getElementById('getRecipe');
button1.addEventListener('click',function queryRecipes() {
  // request the user from our app's sqlite database
  const userRequest = new XMLHttpRequest();
  userRequest.responseType = 'text';
  userRequest.onreadystatechange = function() {
    if (userRequest.readyState == XMLHttpRequest.DONE) {
       console.log(userRequest.responseText);
<<<<<<< HEAD
       var res = JSON.parse(userRequest.responseText);
       document.getElementById("available").innerHTML = userRequest.responseText;
       console.log(res)
=======
       //var res = JSON.parse(userRequest.responseText);
>>>>>>> 69bfabc2679e51d69732ab98baaba24e2a291b7c
    }
  }
  userRequest.open('get', '/getRecipe');
  userRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  userRequest.send(JSON.stringify({'query': document.getElementById("query").value}));

});