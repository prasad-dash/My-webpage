const buttons=document.getElementsByClassName("btn");
const modalHolder=document.getElementById("modalHolder");
for (i of buttons) {
  i.addEventListener('click', function(e) {
    console.log(e);
    var id=e.path[0].dataset['whatever'];
    console.log(id);
    fetch(`http://localhost:3000/projectById?id=${id}`, ).then(response => response.json()).then(res => {modalHolder.innerText=res.description;});
  });
}

