document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('testBtn');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        // Change the UI state instantly to confirm JS is alive
        output.innerText = "🚀 JavaScript is working perfectly!";
        output.style.color = "#10b981"; // Success Green

        console.log("Test log: Button was successfully clicked.");
    });
});