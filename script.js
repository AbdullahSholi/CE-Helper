// Get the visitor count from localStorage or initialize it to 0
let visitorCount = parseInt(localStorage.getItem('visitorCount')) || 0;

// Get the counter element
const counterElement = document.getElementById('counter');

// Update the counter element with the current visitor count
counterElement.textContent = visitorCount;

// Increment the visitor count and update the counter element
function incrementVisitorCount() {
  visitorCount++;
  counterElement.textContent = visitorCount;
  // Store the updated visitor count in localStorage
  localStorage.setItem('visitorCount', visitorCount.toString());
}

// Call the incrementVisitorCount function when the page loads
window.addEventListener('load', incrementVisitorCount);
