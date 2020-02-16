const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
let lastEleOfArray ="";
let firstEleOfArray = "";
function creatHeaderDiv(kataNum,str)
{    
    let header = document.createElement("div");
    header.textContent = "Kata"+kataNum+". " +str;
    header.style.fontSize = "30px";  
    header.style.borderBottom ="1px solid #b68633";
    header.style.backgroundColor = "sliver";
    document.body.appendChild(header);
}
    

//kata1
function kata1() {
    creatHeaderDiv(1,"Function that returns an array with the cities in 'gotCitiesCSV'");
    let newElement = document.createElement("div");
    newElement.style.fontSize = "20px";
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)
    return lotrCitiesArray; 
}
kata1();
//kata2
function kata2() {
    creatHeaderDiv(2,"Function that returns an array of words from the sentence in 'bestThing'");
    let newElement = document.createElement("div"); 
    newElement.style.fontSize = "20px"; 
      let arrayOfWords = bestThing.split(" ");
    newElement.textContent = JSON.stringify(arrayOfWords);
    document.body.appendChild(newElement)
    return arrayOfWords; 
}
kata2();
//kata3
function kata3() {
    creatHeaderDiv(3,"Function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    let arrayOfWords = gotCitiesCSV.split(" ");
    let stringOfSemiColon = arrayOfWords.join(";");
    newElement.textContent = JSON.stringify(stringOfSemiColon);
    document.body.appendChild(newElement)
    return stringOfSemiColon; 
}
kata3();
//kata4
function kata4() {
    creatHeaderDiv(4,"Function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    let arrayOfWords = lotrCitiesArray.join()
    newElement.textContent = JSON.stringify(arrayOfWords);
    document.body.appendChild(newElement)
    return arrayOfWords; 
}
kata4();

//kata5
function kata5() {
    creatHeaderDiv(5,"Function that returns an array with the first 5 cities in 'lotrCitiesArray'.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    let arrayOfWords = lotrCitiesArray.slice(0,5);
    newElement.textContent = JSON.stringify(arrayOfWords);
    document.body.appendChild(newElement)
    return arrayOfWords; 
}
kata5();
//kata6
function kata6() {
    creatHeaderDiv(6,"Function that returns an array with the last 5 cities in 'lotrCitiesArray'.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    let arrayOfWords = lotrCitiesArray.slice(Math.max(lotrCitiesArray.length - 5, 1))
    newElement.textContent = JSON.stringify(arrayOfWords);
    document.body.appendChild(newElement)
    return arrayOfWords; 
}
kata6();
//kata7
function kata7() {
    creatHeaderDiv(7,"Function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    let arrayOfWords = lotrCitiesArray.slice(2,5);
    newElement.textContent = JSON.stringify(arrayOfWords);
    document.body.appendChild(newElement);
    return arrayOfWords; 
}
kata7();

//kata8
function kata8() {
    creatHeaderDiv(8,"Function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Rohan"),1)    
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray; 
}
kata8();

//kata9
function kata9() {
    creatHeaderDiv(9,"Function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
     lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes"))    
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray; 
}
kata9();

//kata10
function kata10() 
{    
    creatHeaderDiv(10,"Function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the new modified 'lotrCitiesArray'.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Gondor")+1,0,"Rohan");    
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray; 
}
kata10();

//kata11
function kata11() 
{    
    const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

    creatHeaderDiv(11,"Function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes"),1,"Deadest Marshes");   
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray; 
}
kata11();


//kata12
function kata12() 
{    
    
    creatHeaderDiv(12,"Function that uses 'slice' to return a string with the first 14 characters from 'bestThing'");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
   let setOfChar = bestThing.slice(0,15)
    newElement.textContent = JSON.stringify(setOfChar);
    document.body.appendChild(newElement);
    return setOfChar; 
}
kata12();


//kata13
function kata13() 
{    
    
    creatHeaderDiv(13,"Function that uses 'slice' to return a string with the last 12 characters from 'bestThing'");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
   let setOfChar = bestThing.slice(bestThing.length - 12)
    newElement.textContent = JSON.stringify(setOfChar);
    document.body.appendChild(newElement);
    return setOfChar; 
}
kata13();



//kata14
function kata14() 
{    
   
    creatHeaderDiv(14,"Function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even').");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
   let setOfChar = bestThing.slice(23,38);
    newElement.textContent = JSON.stringify(setOfChar);
    document.body.appendChild(newElement);
    return setOfChar; 
}
kata14();
//kata15
function kata15() 
{    
  
    creatHeaderDiv(15,"Function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
   let setOfChar = bestThing.substring(bestThing.length-12)
    newElement.textContent = JSON.stringify(setOfChar);
    document.body.appendChild(newElement);
    return setOfChar; 
}
kata15();

//kata16
function kata16() 
{    
  
    creatHeaderDiv(16,"Function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
   let setOfChar = bestThing.substring(23,38)
    newElement.textContent = JSON.stringify(setOfChar);
    document.body.appendChild(newElement);
    return setOfChar; 
}
kata16();
//kata17
function kata17() 
{    
 
    creatHeaderDiv(17,"Function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the new array. ");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
   lastEleOfArray = lotrCitiesArray.pop();
    newElement.textContent = JSON.stringify(lastEleOfArray);
    document.body.appendChild(newElement);
    return lastEleOfArray; 
}
kata17();
//kata18
function kata18() 
{    
  
    creatHeaderDiv(18,"Function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #17 to the back of the array and returns the new array. ");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    lotrCitiesArray.push(lastEleOfArray);
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray; 
}
kata18();
//kata19
function kata19() 
{    
  
    creatHeaderDiv(19,"Function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the new array");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    firstEleOfArray = lotrCitiesArray.shift();
    newElement.textContent = JSON.stringify(firstEleOfArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray; 
}
kata19();
//kata20
function kata20() 
{      
    creatHeaderDiv(20,"Function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #19 to the front of the array and returns the new array.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    lotrCitiesArray.unshift(firstEleOfArray);
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray; 
}
kata20();

//kata21
function kata21() 
{      
    creatHeaderDiv(21,"Function that finds and returns the index of 'only' in 'bestThing'. ");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    let indexOfOnly = bestThing.indexOf("only")
    newElement.textContent = JSON.stringify(indexOfOnly);
    document.body.appendChild(newElement);
    return indexOfOnly; 
}
kata21();
//kata22
function kata22() 
{      
    creatHeaderDiv(22,"Function that finds and returns the index of the last word in 'bestThing'.");
    let newElement = document.createElement("div");  
    newElement.style.fontSize = "20px";
    let splitedArrayWithSpaces = bestThing.split(" ");    
    let indexOfLastEle = bestThing.indexOf(splitedArrayWithSpaces[splitedArrayWithSpaces.length -1]);
    newElement.textContent = JSON.stringify(indexOfLastEle);
    document.body.appendChild(newElement);
    return indexOfLastEle; 
}
kata22();

// //kata23
// function kata23() 
// {      
//     creatHeaderDiv(23,"Function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.).");
//     let newElement = document.createElement("div");  
//     newElement.style.fontSize = "20px";
//     for(let i =0; i<gotCitiesCSV.length; i ++)
//     {

//         if(gotCitiesCSV.charAt(i) === 'a' )
//         {
            
//         }
//     }
//     let splitedArrayWithSpaces = bestThing.split(" ");    
//     let indexOfLastEle = bestThing.indexOf(splitedArrayWithSpaces[splitedArrayWithSpaces.length -1]);
//     newElement.textContent = JSON.stringify(indexOfLastEle);
//     document.body.appendChild(newElement);
//     return indexOfLastEle; 
// }
// kata23();



//kata24
// function kata24() 
// {      
//     creatHeaderDiv(22,"Function that finds and returns the index of the last word in 'bestThing'.");
//     let newElement = document.createElement("div");  
//     newElement.style.fontSize = "20px";
//     let splitedArrayWithSpaces = bestThing.split(" ");    
//     let indexOfLastEle = bestThing.indexOf(splitedArrayWithSpaces[splitedArrayWithSpaces.length -1]);
//     newElement.textContent = JSON.stringify(indexOfLastEle);
//     document.body.appendChild(newElement);
//     return indexOfLastEle; 
// }
// kata22();