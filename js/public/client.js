console.log('Client-side code running');
const button = document.getElementById('submitRecipe');
button.addEventListener('click',function queryRecipes() {
  // request the user from our app's sqlite database
  const userRequest = new XMLHttpRequest();
  userRequest.responseType = 'text';
  userRequest.onreadystatechange = function() {
    if (userRequest.readyState == XMLHttpRequest.DONE) {
       console.log(userRequest.responseText);
       //var res = JSON.parse(userRequest.responseText);
    }
  }
  userRequest.open('post', '/submitRecipe');
  userRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  userRequest.send(JSON.stringify({'query': document.getElementById("query").value}));

});