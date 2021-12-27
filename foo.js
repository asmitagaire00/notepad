function Monster(speed) {
  // properties
  this.health = 50; // same value for all the monsters
  this.src = "URL-TO-A-IMAGE-YOU-WANT"; // same image for all the monsters
  this.speed = speed; // our monsters will have a different speed specified by a parameter

  // method
  this.attack = function () {
    alert("I am a bad monster. Run for your life !");
  };
}

const monster1 = new Monster(30); // specify the speed parameter; This monster is slow
const monster2 = new Monster(100); // This monster is fast

// Let's console log our monsters and see what we got

console.log("the first monster is ", monster1);
console.log("the second monster is ", monster2);
