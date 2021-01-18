/* define functions here */
function calculateTotal(quantity,price)
{
return quantity*price;
}/* define functions here */
var st=0;
function outputCartRow(file,title,quantity,price,total){

document.write("<tr> <td><img src=images/"+file+">  <td>"+title+"</td></td> <td>"+quantity+"</td> <td>$"+price.toFixed(2)+"</td> <td>$"+calculateTotal(quantity,price).toFixed(2)+"</td> </tr>");
st=st+calculateTotal(quantity,price);
return st;
}
