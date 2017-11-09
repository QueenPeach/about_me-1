/* jshint -W097 */
/* jshint -W117 */
'use strict';

//---------------------------- Beginning of Code -----------------------------
var reply;
var name;
while (true) {
  reply = prompt('What is your first name?');
  if (!reply) {
    console.log('false reply:', reply);
    alert('Invalid input, try again.');
    continue;
  }

  reply = reply.trim().toLowerCase();
  name = reply.charAt(0).toUpperCase() + reply.substr(1);
  console.log('goodname:', 'name:', name);
  break;
}
alert('Hello ' + name + '. Let\'s play a quick game. Answer the next five yes/no questions with your prediction.');

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
    message = name + questionAnswerArray[i][0];
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
  } else {
    console.log('inCorrectAlert:', 'message:', message);
    alert('Whoops. You\'re incorrect. ' + message);
  }
}