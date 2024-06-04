// JavaScript to control showing and hiding the iframe
document.addEventListener('DOMContentLoaded', function() {
    var showButton = document.getElementById('show-iframe-btn');
    var closeButton = document.getElementById('close-agent-btn');
    var iframe = document.getElementById('agent-iframe');
    var footerCover = document.getElementById('footer-cover');

    showButton.addEventListener('click', function() {
        iframe.style.display = 'block'; // Show the iframe
        closeButton.style.display = 'block'; // Show the close button
        footerCover.style.display = 'block'; // Show the footer cover
        this.style.display = 'none'; // Hide the show button
    });

    closeButton.addEventListener('click', function() {
        iframe.style.display = 'none'; // Hide the iframe
        footerCover.style.display = 'none'; // Hide the footer cover
        showButton.style.display = 'block'; // Show the show button
        this.style.display = 'none'; // Ensure the close button is hidden
    });
});
