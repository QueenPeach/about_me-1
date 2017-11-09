/* jshint -W097 */
/* jshint -W117 */
'use strict';

function getName() {
  var rawName;
  var name;

  while (true) {
    rawName = prompt('What is your first name?');
    if (!rawName) {
      console.log('false rawName:', rawName);
      alert('Invalid input, try again.');
      continue;
    }

    rawName = rawName.trim().toLowerCase();
    name = rawName.charAt(0).toUpperCase() + rawName.substr(1);
    console.log('goodname:', 'name:', name);
    break;
  }

  return name;
}

function boolQuestion(question) {
  var reply;
  var yesNo = false;
  while (true) {
    reply = prompt(question + ' [y/N]?');
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
  return yesNo;
}

function correctAlert(message) {
  console.log('correctAlert:', 'message:', message);
  alert('Excellent, job! You\'re correct! ' + message);
}

function inCorrectAlert(message) {
  console.log('inCorrectAlert:', 'message:', message);
  alert('Whoops. You\'re incorrect. ' + message);
}

function accuracyAlert(actual, expected, message) {
  console.log('accuracyAlert:', 'actual:', actual, 'expected:', expected);
  if (expected === actual) {
    correctAlert(message);
  } else {
    inCorrectAlert(message);
  }
}

//---------------------------- Beginning of Code -----------------------------
var name = getName();
alert('Hello ' + name + '. Let\'s play a quick game. Answer yes/no to following questions based on your prediction of truthiness.');

var underSixtyFive = boolQuestion(name + ', am I less then 65 years old');
accuracyAlert(underSixtyFive, true, name + '. I am 30 years old.');

var fromWashington = boolQuestion(name + ', do you think I\'m a Washington born and raised');
accuracyAlert(fromWashington, false, name + ', I was born and raised in Nebraska.');

var seattleFavoriteCity = boolQuestion(name + ', do you think Seattle is my favorite city');
accuracyAlert(seattleFavoriteCity, true, name + ', Seattle is my all-time favorite city!');

var linuxIsAwesome = boolQuestion(name + ', do you think I enjoy using Linux over other Operating Systems');
accuracyAlert(linuxIsAwesome, true, name + ', I am a huge fan of Linux! Specifically Arch Linux using i3 window manager.');

var twoDogs = boolQuestion(name + ', would you believe me if I told you I have two Yorkshire Terriers');
accuracyAlert(twoDogs, true, name + ', Their names are Charlie and Cookie.');
