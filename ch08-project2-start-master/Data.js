var countries=
[
 {"country":"canada", //first country
  "continent":"North America",
 "cities":["Toronto","Montreal","Calgery","Thunder Bay"],
 "images":["canada1.jpg","canada2.jpg","canada3.jpg"]},

 {"country":"United States", //second country
  "continent":"North America",
 "cities":["Boston","Chicago","New York","Seattle","Washington"],
 "images":["us1.jpg","us2.jpg"]},

 {"country":"Italy",  //third country
 "continent":"Europe",
 "cities":["Florence","Milan","Naples","Rome"],
 "images":["italy4.jpg","italy5.jpg","italy6.jpg"]},

  {"country":"Spain", //fourth country
  "continent":"Europe",
  "cities":["Almeria","Barcelona","Madrid"],
  "images":["spain1.jpg","spain2.jpg"]},
]

//Function.js
/* add in your functions here */
var k=0;
function outputCities()
{
var ci=countries[k].cities;
var m=0;
  for(m=0;m<ci.length;m++)
  {
   document.write("<li>"+ci[m]+"</li>");
  }
}
function outputPhotos()
{
var ci=countries[k].images;
var m=0;
  for(m=0;m<ci.length;m++)
  {
   document.write("<img src='images/"+ci[m]+"' class='photo' />");
   console.log(ci[m]);
  }
}
function outputCountryBox(name,continent,cities,photos)
{
  document.write("  <div class='item'> <h2>"+name+"</h2> <p>"+continent+"</p>");
  document.write("<div class='inner-box'> <h3>Cities</h3> ");
  document.write("<ul>");
  outputCities();
  document.write("</ul>");
  document.write("</div>");
  document.write("<div class='inner-box'> <h3>Popular Photos</h3>");
  outputPhotos();
  document.write("</div> <button>Visit</button> </div>");
  k=k+1;
}