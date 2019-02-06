function createTable() 
{ 
rows = document.getElementById("rows").value;
columns = document.getElementById("columns").value;
   
console.log(rows + "|" + columns);     
tableCode = "";     

// 
// // x = 0;
// y = 0; 
// if (x<=numRows){
//     table.insertRow(x); 
//     x++; 
// }
    
    
// if (y<=numColumns){
//     table.insertColumn(y); 
//     x++; 
// }

tableCode = "";     
    
    
for (r=1;r<=numRows,r++)
{ 
    tableCode += "<tr>" 
}
for (c=1; c<=numColumns; c++)
    { 
        tableCode += "</tr>"; 
    }
    tableCode += "</table>"; 



}