document.addEventListener("DOMContentLoaded", function(){
  addWavyUnderline(findAllUnorderedListElements());
});

function addWavyUnderline(elements) {
  //elements = document.querySelectorAll("#education ol li");
  for (let i = 0; i < elements.length; i++){
    elements[i].style.textDecoration = "wavy underline";
  }
}

function displayProjects() {
  //document.getElementById("projects").innerHTML.appendChild(prepareProjects(arguments));
  
  
  //let y = document.createTextNode("test to be seen");
  //x.appendChild(y);
  let c = document.getElementById("projects");
  let x = document.createElement("p");
  let z = document.appendChild("p");
  let y = document.createTextNode("test to be seen");
  x.appendChild(y);
}

function findAllUnorderedListElements() {
 const x = document.querySelectorAll("a.social-media-links");
 return x;
}

function prepareProjects(firstProject, secondProject, thirdProject) {
  let arr = [firstProject, secondProject, thirdProject];
  let projects = [];
  for (let i = 0; i < arr.length; i++){
      if (arr[i].length > 20){
        const project = document.createElement("p").appendChild(document.createTextNode(arr[i]));
       projects.push(project);
      }else{
        const project = document.createElement("span").appendChild(document.createTextNode(arr[i]));
        projects.push(project);
      }
      document.createElement("br"); 
  }
  return projects;
}


exports.findAllUnorderedListElements = findAllUnorderedListElements;
exports.prepareProjects = prepareProjects;









