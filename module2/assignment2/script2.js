let participantsNum = +prompt('Enter the number of participants');
let participants = [];

for (let i = 0; i < participantsNum; i++) {
  const name = prompt('Enter the name of the participant');
  participants.push(name);
}

participants.sort();
document.write('<ol>');
participants.forEach(participant => document.write('<li>' + participant + '</li>'));
document.write('</ol>');
