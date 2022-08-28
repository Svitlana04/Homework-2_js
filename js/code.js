document.write("<div class='red'>Задача 1</div>");
document.write("<div>Трикутник</div>");
const max = 5;
let i=0;
while (i < max) {
  for (j = 0; j < max - i; j++)
  document.write("&nbsp;&nbsp;") 
  for (j = 0; j < 2 * i + 1; j++) 
  document.write("*")
  document.write( "</br>");

  i++;
}

document.write("<div>Ромб</div>");
let space = 15;
let star= 1;
const line = 10;
for (let i = 0; i <= line; i++){
    for (let j = 0; j <= space; j++){
        document.write("&nbsp;");
    }
    for (let k = 0; k < star; k++){
        document.write("*");
    }
    space--;
    star++;
    if (i >= line / 2 && i <= line){
        star = star - 2;
        space = space + 2;
    }
    document.write("<br>");
}


document.write("<div>Прямокутник</div>");


const widht= 25; 
const height = 10;


for (let i = 0; i < height; i++) {
     document.write("*")
    if (i == 0 || i == height-1) {  
      for (let j = 0; j < widht-1; j++) {
      document.write("&nbsp;");
      document.write("*");
        } 
    } else {
      
      for (let j = 0; j < widht+ 45 ; j++) {
       document.write("&nbsp;");
      }    
     
      document.write("*")
    }

    document.write("<br>");    
}







let Number1 = 0;


do{
    if(Number1 % 1 ==0){
        Number1 =prompt("Введіть число:", "100");
        alert(`Ваше введене число: ${Number1}`) ;
    }
        
   if(Number1 % 1 != 0){
    Number1 = parseFloat(prompt("Введіть ціле число!!!"));
    alert(`Ваше введене число: ${Number1}`);
    }
}while ((Number1%1) !=0)

for(let i=0; Number1>=i; i++){
   
     if(Number1 % 5 != 0){
        console.log("Sorry, no number");
   }
    if(i%5 === 0 ){
        console.log(i);
    }   
}