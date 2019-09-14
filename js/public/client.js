console.log('Client-side code running');
const button = document.getElementById('submitRecipe');
button.addEventListener('click',function queryRecipes() {
  // request the user from our app's sqlite database
  const userRequest = new XMLHttpRequest();
  userRequest.open('post', '/submitRecipe');
  userRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  userRequest.send(JSON.stringify({'query': document.getElementById("query").value}));
});