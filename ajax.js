

var pages=1;
var info = document.getElementById("animalinfo");
var clicks= document.getElementById('thisclick');
clicks.onclick=function(){


  var ourrequest= new XMLHttpRequest();
ourrequest.open('GET','https://unique1o1.github.io/jsonfile'+pages+'.json');


  ourrequest.onload=function(){
var ourdata = JSON.parse(ourrequest.responseText);

showdata(ourdata);
pages++;
if(pages>2)
{
  clicks.classList.add("hide-me")
}
};

ourrequest.send();
};


function showdata(data){
  var htmlstring='';
  for (var i = 0; i < data.length; i++) {
    htmlstring+="<p>"+data[i].name+" is a "+ data[i].bread + " his favirote food is "+data[i].food+"</p>";
  }
  info.insertAdjacentHTML('beforeEnd',htmlstring);
}
