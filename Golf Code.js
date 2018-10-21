var names = ["Hole-in-one!", "Eagle", 
"Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    switch(strokes){
        case 1:
        return "Hole-in-one!";
        break;
        case par -2:
        return "Eagle";
        break;
        case par -1:
        return "Birdie";
        break;
        case par:
        return "par";
        break;
        case par + 1:
        return "Bogey";
        break;
        case par + 2:
        return "Double Bogey";
        break; 
        case strokes >= par + 3:
        return "Go Home!";
        break;

    }

  
}

// Change these values to test
console.log( golfScore(5, 1));
console.log( golfScore(4, 2));
console.log( golfScore(5, 2));
console.log( golfScore(4, 3));
console.log( golfScore(4, 4));
console.log( golfScore(1, 1));




var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1){
    return "Hole-in-one!";
  } else if (strokes <= par - 2){
    return names[1];
  } else if (strokes == par -1){
    return "Birdie";
  } else if (strokes == par){
    return names[3];
  } else if (strokes == par +1){
    return names[4];
  } else if (strokes == par +2){
    return names [5];
  } else if (strokes >= par + 3){
    return names[6]
  }
    // Only change code above this line
}

// Change these values to test
golfScore(5, 4);