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