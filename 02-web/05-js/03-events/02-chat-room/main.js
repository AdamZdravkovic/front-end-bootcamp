// Get references to important DOM elements
const messageInput = document.getElementById('messageInput'); // The input box where user types messages
const sendBtn = document.getElementById('sendBtn');         // The Send button element
const messagesArea = document.getElementById('messagesArea'); // Container where messages appear

// Variable to keep track of which side the next message should appear on (left or right)
let isLeftSide = true;

// Function to add a new message to the chat
function addMessage() {
  // Get the trimmed text from the input field (removes whitespace)
  const text = messageInput.value.trim();

  // If the input is empty, do nothing
  if (text === '') return;

  // Create a new div element to represent the message bubble
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message'); // Add the base message class

  // Assign the message to the left or right side, alternating each time
  if (isLeftSide) {
    messageDiv.classList.add('left');
  } else {
    messageDiv.classList.add('right');
  }
  // Toggle the side for the next message
  isLeftSide = !isLeftSide;

  // Set the text content of the message bubble
  messageDiv.textContent = text;

  // Create a heart icon element that will show when message is liked
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = '❤️'; // You can change this emoji as you like
  messageDiv.appendChild(heart); // Add the heart inside the message div

  // Add a double-click event listener to toggle the "liked" state
  messageDiv.addEventListener('dblclick', () => {
    messageDiv.classList.toggle('liked'); // Add/remove "liked" class which triggers styles

    // If liked, play the heart pulse animation
    if (messageDiv.classList.contains('liked')) {
      heart.classList.add('animate'); // Start animation
      // Remove animation class after animation duration to allow re-triggering on next like
      setTimeout(() => heart.classList.remove('animate'), 800);
    }
  });

  // Add the new message bubble to the messages container
  messagesArea.appendChild(messageDiv);

  // Scroll the messages container to the bottom so the new message is visible
  messagesArea.scrollTop = messagesArea.scrollHeight;

  // Clear the input field and focus it for next message
  messageInput.value = '';
  messageInput.focus();
}

// Add click event listener to the Send button to add messages
sendBtn.addEventListener('click', addMessage);

// Add keydown event listener on the input field to send message on Enter key press
messageInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent default Enter behavior (like form submit or newline)
    addMessage();           // Call addMessage function to send the message
  }
});
