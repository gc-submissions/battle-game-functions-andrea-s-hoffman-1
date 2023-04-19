"use strict";

// TODO - write your code here.
// 1.
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

// console.log(randomDamage());

// 2.
const chooseOption = (opt1, opt2) => {
  // let randNum = Math.floor(Math.random() * 2);
  // this version of Math.random is more fair because we're looking for a 0
  let randNum = Math.round(Math.random());
  //   console.log(randNum);
  //   if (randNum === 0) {
  //     return opt1;
  //   } else {
  //     return opt2;
  //   }
  return randNum === 0 ? opt1 : opt2;
};

// console.log(chooseOption("Andrea", "James"));

// 3.
const attackPlayer = function (health) {
  // returning a number (health) minus another number (randomDamage() / result)
  let result = randomDamage();
  return health - result;
};

// console.log(attackPlayer(100));

// 4.
const logHealth = (player, health) => {
  // no return here! (returning undefined)
  console.log(player + " health: " + health);
};

// logHealth("Andrea", 50);

// 5.
const logDeath = (winner, loser) => {
  // no return here! (returning undefined)
  console.log(winner + " defeated " + loser);
};

// logDeath("James", "Andrea");

// 6.
const isDead = (health) => {
  // if (health <= 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return health <= 0;
};
// shorthand version:
// const isDead = (health) => health <= 0;

// console.log(isDead(0));

// do not redeclare variables (const, let, var)

// you can re-assign variables (=)

// 7.
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    // attacker is a string (return value of chooseOption fn)
    let attacker = chooseOption(player1, player2);
    // comparing two strings
    if (attacker === player1) {
      // re-assigning (updating) this variable of player2Health
      // it will now equal the return value of attackPlayer fn
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      // attacker === player2
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
    //
    // break for safety:
    // break;
  }
}

fight("Andrea", "James", 100, 100);
