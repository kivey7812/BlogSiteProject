



function myFunction(id){
  var points = document.getElementById("points"+id);
  var showMoreText = document.getElementById("moreText"+id);
  var buttonText = document.getElementById("textButton"+id);
  if (points.style.display === "none"){
    showMoreText.style.display = "none";
    points.style.display = "inline";
    buttonText.innerHTML = "Show More";
  } else {
    showMoreText.style.display = "inline";
    points.style.display = "none";
    buttonText.innerHTML = "Show Less";
  }
}




// <a href="/posts/<%= ele.title %>">Read More</a>
