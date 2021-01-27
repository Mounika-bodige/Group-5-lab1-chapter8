
function outputCard()
{
	var i;
	for(i=0;i<ar.length;i++)
	{
	other.call(ar[i]);
	}
}
function other()
{
	document.write("<div class='mdl-cell mdl-card mdl-shadow--2dp'>");
	document.write("<div class='mdl-card__media'> <img  src='images/"+this.isbn+".jpg' title='Database Processing'></div>");
	document.write("<div class='mdl-card__supporting-text '>");
	document.write("<p>"+this.des+"</p><h6>Adopters</h6> <ul>");
	var i;
	for(i=0;i<this.names.length;i++)
	{
		document.write("<li>"+this.names[i]+"</li>");
	}
	document.write("</ul></div>");
	document.write(" <div class='mdl-card__actions mdl-card--border'> <a class='mdl-button'>READ MORE</a></div></div> ");
}