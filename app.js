const eightBall = document.getElementById('eight-ball');
const answer = document.getElementById('answer');

// Define an array of possible answers
const answers = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes, definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy, try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no"
];

// Listen for device motion events
window.addEventListener('devicemotion', (event) => {
  // Get the acceleration values
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;
  
  // Calculate the total acceleration
  const acceleration = Math.sqrt(x * x + y * y + z * z);
  
  // If the acceleration is greater than a certain threshold, display a random answer
  if (acceleration > 25) {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answer.innerText = randomAnswer;
  }
});