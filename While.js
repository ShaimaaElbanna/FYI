//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

console.log(contacts[3]["likes"]);
function lookUpProfile(name, prop){
// Only change code below this line


  for (var i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName){
        if (contacts[i].hasOwnProperty(prop)) {
              return contacts[i][prop];
        } else {
          return  "No such property";
        }
    } 
}
 
      return "No such contact";
    


// Only change code above this line
}
// Change these values to test your function
lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "number");


var count = 0;

function cc(card) {
  // Only change code below this line
 var answer = ""; 
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count = count + 1;
  break;
  case 7:
  case 8:
  case 9:
  count = count + 0;
  break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
  count = count -1;
}
if (count > 0){
  return console.log( count + " Bet");
} else if (count <= 0){
  return console.log(count + " Hold");
}

  
  return console.log(count) ;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');  



  

// Setup
function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
  var lookup = {
      "alpha"   :  "Adams",
      "bravo"   :  "Boston",
      "charlie" :  "Chicago",
      "delta"   :  "Denver",
      "echo"    :  "Easy",
      "foxtrot" :  "Frank",      
    }
    result = lookup[val]
  
    // Only change code above this line
    return console.log(result) ;
  }
  
  // Change this value to test
  phoneticLookup("charlie");