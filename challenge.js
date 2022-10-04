document.addEventListener("DOMContentLoaded", function(){
  // addWavyUnderline(findAllUnorderedListElements());
});

function addWavyUnderline(elements) {
  //elements = document.querySelectorAll("#education ol li");
  // for (let i = 0; i < elements.length; i++){
  //   elements[i].style.textDecoration = "wavy underline";
  }
}

function displayProjects() {
 
  // let c = document.getElementById("projects");
  // let x = document.createElement("p");
  // let z = document.appendChild("p");
  // let y = document.createTextNode("test to be seen");
  // x.appendChild(y);
}

function findAllUnorderedListElements() {
 const x = document.querySelectorAll("a.social-media-links");
 return x;
}

function prepareProjects(firstProject, secondProject, thirdProject) {
  let arr = [firstProject, secondProject, thirdProject];
  let str = "";
  for (let i = 0; i < arr.length; i++){
      if (arr[i].length > 20){
        str = "<p>" + arr[i] + "</p>";
      }else{
        str = "<span>" + arr[i] + "</span>";
      }
      str += "<br>";
  }
  return str;
}


exports.findAllUnorderedListElements = findAllUnorderedListElements;
exports.prepareProjects = prepareProjects;









