
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

inputForm.addEventListener('submit', function(event) {

  event.preventDefault();
  const input = inputField.value;
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  const response = generateResponse(input);

  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

function generateResponse(input) {
  // Check if the user's input is "hi" or "hello"
  if (input.toLowerCase() === "hi" || input.toLowerCase() === "hello") {
      // Response to greet and offer assistance
      return "Hi, how can I help you?";
  }

  // Check if the user's input contains the phrase "NGO"
  if (input.toLowerCase().includes("ngo")) {
      // Response about NGOs
      return "An NGO (Non-Governmental Organization) is a non-profit organization that operates independently of any government, typically to address social or political issues, such as humanitarian aid, environmental protection, or human rights advocacy.";
  }

  // Initial greeting
  let response = "Hi, how can I help? ";

  // Provide the contact information
  response += "Please contact John Doe at +91 9064714677 for further assistance.";

  return response;
}





