<script>
  import { onMount } from 'svelte';

  const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'gray',
    'black',
  ];

  let cards = [];
  let flippedCards = [];
  let matchedPairs = [];

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function initializeGame() {
    cards = shuffle([...colors, ...colors]);
    flippedCards = [];
    matchedPairs = [];
  }

  function flipCard(index) {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedPairs.includes(index)
    ) {
      flippedCards = [...flippedCards, index];

      if (flippedCards.length === 2) {
        const [cardIndex1, cardIndex2] = flippedCards;

        if (cards[cardIndex1] === cards[cardIndex2]) {
          flippedCards = [];
          matchedPairs = [...matchedPairs, cardIndex1, cardIndex2];

          if (matchedPairs.length === colors.length * 2) {
            alert('Congratulations! You have won the game.');
            initializeGame();
          }
        } else {
          setTimeout(() => {
            flippedCards = [];
          }, 1000);
        }
      }
    } else if (flippedCards.length === 2 && flippedCards.includes(index)) {
      flippedCards = flippedCards.filter((cardIndex) => cardIndex !== index);
    }
  }

  onMount(() => {
    initializeGame();
  });
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1px;
    justify-items: center;
    align-items: center;
    height: 75vh;
  }

  .card {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    user-select: none;
  }

  .card.matched {
    background-color: #55a630;
    cursor: default;
  }

  h1 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 10px;
  }

  .message {
    text-align: center;
    font-size: 24px;
    margin-bottom: 10px;
  }
</style>

<h1>Memory Game</h1>

<div class="container">
  {#each cards as color, index}
  <div>
    <div
      class="card"
      on:click={() => flipCard(index)}
      class:matched={matchedPairs.includes(index)}
      style="background-color: {flippedCards.includes(index) || matchedPairs.includes(index) ? color : '#ccc'}"
    >
      {#if flippedCards.includes(index) || matchedPairs.includes(index)}
      {color}
      {/if}
    </div>
  </div>
  {/each}
</div>
