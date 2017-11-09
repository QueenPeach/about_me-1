/* jshint -W097 */
/* jshint -W117 */
'use strict';

//---------------------------- Beginning of Code -----------------------------
var correctAnswerCount = 0;
var totalQuestionCount = 7;
var reply;
var userName;
while (true) {
  reply = prompt('What is your first name?');
  if (!reply) {
    console.log('false reply:', reply);
    alert('Invalid input, try again.');
    continue;
  }

  reply = reply.trim().toLowerCase();
  userName = reply.charAt(0).toUpperCase() + reply.substr(1);
  console.log('goodname:', 'name:', userName);
  break;
}
alert('Hello ' + userName + '. Let\'s play a quick game. Answer the next five yes/no questions with your prediction.');

// Each nested array contains the question, correct answer, & a response
var questionAnswerArray = [
  [
    ', am I less then 65 years old',
    true,
    'I am 30 years old.'
  ],
  [
    ', do you think I\'m a Washington born and raised',
    false,
    'I was born and raised in Nebraska.'
  ],
  [
    ', do you think Seattle is my favorite city',
    true,
    'Seattle is my all-time favorite city!'
  ],
  [
    ', do you think I enjoy using Linux over other Operating Systems',
    true,
    'I am a huge fan of Linux! Specifically Arch Linux using i3 window manager.'
  ],
  [
    ', would you believe me if I told you I have two Yorkshire Terriers',
    true,
    'Their names are Charlie and Cookie.'
  ],
];

/*
 * Ask yes/no questions
 */
var yesNo;
var message;
for (var i = 0; i < questionAnswerArray.length; i++) {
  yesNo = false;
  while (true) {
    message = userName + questionAnswerArray[i][0];
    reply = prompt(message + ' [y/N]?');
    if (!reply) {
      console.log('false reply:', reply);
      alert('Invalid input, try again.');
      continue;
    }
    console.log('reply:', reply);

    reply = reply.trim().toLowerCase();
    console.log('cleaned reply:', reply);
    if (reply === 'y' || reply === 'ye' || reply === 'yes') {
      yesNo = true;
      break;
    } else if (reply === 'n' || reply === 'no') {
      yesNo = false;
      break;
    }

    alert('Invalid input, try again.');
    console.log('invalid reply:', reply);
  }

  /*
   * Report correctness
   */
  message = questionAnswerArray[i][2];
  if (yesNo === questionAnswerArray[i][1]) {
    console.log('correctAlert:', 'message:', message);
    alert('Excellent, job! You\'re correct! ' + message);
    correctAnswerCount++;
  } else {
    console.log('inCorrectAlert:', 'message:', message);
    alert('Whoops. You\'re incorrect. ' + message);
  }
}

var min = 1;
var max = 30;
var randomInt = Math.floor(Math.random() * (max - min)) + min;
var correct = false;
var numberGuesses = 4;
for (i = 0; i < numberGuesses; i++) {
  while (true) {
    reply = prompt('Please guess my secret number. (hint it is between ' + min + ' and ' + max + ')');
    if (!reply) {
      alert('Invalid input. Try again.');
      continue;
    }
    reply = reply.trim();
    console.log('random int guess:', reply);
    reply = parseInt(reply, 10);
    if (!reply) {
      alert('Invalid input. Try again.');
      continue;
    }
    break;
  }

  // We have a valid number, but is it correct?
  if (reply !== randomInt) {
    alert('Nope. It is a ' + (reply < randomInt ? 'larger' : 'smaller') + ' number.');
    console.log('incorrect guess:', randomInt);
  } else {
    alert('Yay, you guessed correct! The number was ' + randomInt + '.');
    console.log('correct guess:', randomInt);
    correctAnswerCount++;
    correct = true;
    break;
  }
}
// Were all attempts exhausted without success? :(
if (!correct) {
  alert('Well, just for your curiosity, the number was ' + randomInt + '.');
}

// States I've been to not including washington
var statesIveBeenTo = [
  'nebraska',
  'iowa',
  'new york',
  'oregon',
  'california',
  'texas',
  'louisiana',
  'arizona',
  'idaho',
  'wyoming',
  'montana',
  'south dakota'
];

// Have them guess one of those states
for (i = 0; i < numberGuesses; i++) {
  while (true) {
    reply = prompt('Please guess a state I\'ve been to (not including Washington).');
    console.log('state guess:', reply);
    if (!reply) {
      alert('Invalid input. Try again.');
      continue;
    }
    reply = reply.trim().toLowerCase();
    break;
  }

  // Correct guess?
  if (statesIveBeenTo.includes(reply)) {
    alert('Wonderful guess! You are correct!');
    correctAnswerCount++;
    break;
  } else {
    alert('Incorrect. I\'ve been meaning to go there though.');
  }
}
// Tell them
var statesString = '\n';
for (i = 0; i < statesIveBeenTo.length; i++) {
  statesString = statesString.concat(statesIveBeenTo[i] + '\n');
}
alert('In case you wondered, here are all the states I\'ve been to not including Washington:\n' + statesString);

// Report correct number of questions
if (correctAnswerCount === totalQuestionCount) {
  alert('Bravo, you got all ' + correctAnswerCount + ' out of ' + totalQuestionCount + ' questions correct.');
} else {
  alert('Keep striving for perfection! You got ' + correctAnswerCount + ' out of ' + totalQuestionCount + ' questions correct this time.');
}
