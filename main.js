var stylesheet = document.querySelector(".stylesheet");
var mantraBtn = document.querySelector("#mantra");
var affirmBtn = document.querySelector("#affirmation");
var submitButton = document.querySelector("#submit");
var receiveButton = document.querySelector("#receive-btn");
var addMessageButton = document.querySelector("#custom-message");
var yogi = document.querySelector("#yogi");
var showMessage = document.querySelector(".show-message");
var form = document.querySelector(".user-input");
var userSelectMantra = document.querySelector("#user-mantra");
var userSelectAffirm = document.querySelector("#user-affirmation");
var userMessage = document.querySelector("#user-message");

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", 
    "The first step is always the hardest.", 
    "Every day is a second chance.", 
    "Tell the truth and love everyone.", 
    "I am free from sadness.", 
    "I am enough.", 
    "In the beginning it is you, in the middle it is you and in the end it is you.", 
    "I love myself.", 
    "I am present now.", 
    "Inhale the future, exhale the past.", 
    "This too shall pass.", 
    "Yesterday is not today.", 
    "The only constant is change.", 
    "Onward and upward.", 
    "I am the sky, the rest is weather."
];
var affirmations = [
    "I forgive myself and set myself free.", 
    "I believe I can be all that I want to be.", 
    "I am in the process of becoming the best version of myself.", 
    "I have the freedom & power to create the life I desire.", 
    "I choose to be kind to myself and love myself unconditionally.", 
    "My possibilities are endless.", 
    "I am worthy of my dreams.", 
    "I am enough.", 
    "I deserve to be healthy and feel good.", 
    "I am full of energy and vitality and my mind is calm and peaceful.", 
    "Every day I am getting healthier and stronger.", 
    "I honor my body by trusting the signals that it sends me.", 
    "I manifest perfect health by making smart choices."
];

var randomMessage;

// Event Listeners
receiveButton.addEventListener("click", generateMessage);
addMessageButton.addEventListener("click", toForm);
submitButton.addEventListener("click", submitUserInput);

// Event Handlers
function generateMessage() {
    if (affirmBtn.checked) {
        randomMessage = getRandomIndex(affirmations);
    } else if (mantraBtn.checked) {
        randomMessage = getRandomIndex(mantras);
    }
    yogi.classList.add("hidden");
    showMessage.classList.remove("hidden");
    showMessage.innerText = randomMessage;
}

function toForm() {
    form.classList.remove("hidden");
    yogi.classList.add("hidden");
}

function submitUserInput(event) {
    event.preventDefault();
    var newMessage = userMessage.value;
    if (userSelectAffirm.checked) {
        affirmations.push(newMessage);
    } else if (userSelectMantra.checked) {
        mantras.push(newMessage);
    }
    form.classList.add("hidden");
    showMessage.classList.remove("hidden");
    showMessage.innerText = newMessage;
}

function getRandomIndex(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index]
}