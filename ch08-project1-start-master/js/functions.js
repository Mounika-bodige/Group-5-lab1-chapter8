/* define functions here */
function calculateTotal(quantity,price)
{
return quantity * price;
}
function outputCartRow(file,title,quantity,price,total)
{
total=calculateTotal(quantity[i],price[i]);
document.write("<tr>");
document.write("<td>"+title[i]+"</td>");
document.write("<td>"+quantity[i]+"</td>");
document.write("<td>"+price[i].toFixed(2)+"</td>");
document.write("</tr>");
}
        
