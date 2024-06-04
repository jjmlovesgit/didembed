let currentPage = 1;
const totalPages = 1;
const agentIds = ["agt_uMSAbzj_"];

document.getElementById('show-iframe-btn').addEventListener('click', function() {
  // Show the already loaded iframe
  document.getElementById('agent-iframe').style.display = 'block';
  // Hide this button
  this.style.display = 'none';
  // Show the close button
  document.getElementById('close-agent-btn').style.display = 'block';
});

document.getElementById('close-agent-btn').addEventListener('click', function() {
  // Hide the iframe
  document.getElementById('agent-iframe').style.display = 'none';
  // Hide this button
  this.style.display = 'none';
  // Show the original show button
  document.getElementById('show-iframe-btn').style.display = 'block';
});

  // Prepare the iframe with the new agent ID but do not display it yet
  const iframe = document.getElementById('agent-iframe');
  iframe.src = `https://studio.d-id.com/agents/share?id=${agentIds[currentPage - 1]}&key=WVhWMGFEQjhOalZpWmpJNE5tTTNZMkkwTVRCa1ltRmhZbUprTTJKbU9tTlRWbmQwTm1neGQxOVZRWGx0TjA1dldIZHpWZz09`;

  // Keep the iframe hidden initially for the next page until the button is clicked again
  iframe.style.display = 'none';

