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