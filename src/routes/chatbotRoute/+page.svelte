<script>
  import { onMount } from 'svelte';
  import ElizaBot from 'elizabot';

  let messages = [];

  onMount(() => {
    addMessage('Hello! How can I help you today?');
  });

  function addMessage(text) {
    messages = [...messages, { text, sender: 'bot' }];
  }

  function handleMessageSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.message;
    const text = input.value.trim();

    if (text !== '') {
      messages = [...messages, { text, sender: 'user' }];
      input.value = '';

      const eliza = new ElizaBot();
      const response = eliza.transform(text);
      addMessage(response);
    }
  }
</script>

<style>
  .chatbot-container {
    max-width: 400px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .bot-message {
    background-color: #fcfcfc;
    color: #333;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    align-self: flex-start;
  }

  .user-message {
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    align-self: flex-end;
  }

  .chat-input {
    display: flex;
    margin-top: 20px;
  }

  .chat-input input {
    flex: 1;
    padding: 8px;
    font-size: 16px;
    border: none;
    border-radius: 5px 0 0 5px;
  }

  .chat-input button {
    padding: 8px 15px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
</style>

<div class="chatbot-container">
  {#each messages as message}
    <div class="{message.sender}-message">
      {message.text}
    </div>
  {/each}

  <form on:submit="{handleMessageSubmit}" class="chat-input">
    <input type="text" name="message" placeholder="Type your message..." />
    <button type="submit">Send</button>
  </form>
</div>
