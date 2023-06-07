<script>
  let story = {
    currentScene: 0,
    scenes: [
      {
        id: 0,
        text: "prompt1?",
        choices: [
          { text: "1", nextScene: 1 },
          { text: "2", nextScene: 2 },
        ],
      },
      {
        id: 1,
        text: "prompt2",
        choices: [
          { text: "1", nextScene: 3 },
          { text: "2", nextScene: 4 },
        ],
      },
      {
        id: 2,
        text: "end1",
        choices: [],
      },
      {
        id: 3,
        text: "prompt3",
        choices: [
          { text: "1", nextScene: 5 },
          { text: "2", nextScene: 6 },
        ],
      },
      {
        id: 4,
        text: "prompt4",
        choices: [
          { text: "1", nextScene: 7 },
          { text: "2", nextScene: 8 },
        ],
      },
      {
        id: 5,
        text: "end2",
        choices: [],
      },
      {
        id: 6,
        text: "end3",
        choices: [],
      },
      {
        id: 7,
        text: "end4",
        choices: [],
      },
      {
        id: 8,
        text: "end5",
        choices: [],
      },
    ],
  };

  let currentScene = story.scenes[story.currentScene];

  function makeChoice(choiceIndex) {
    story.currentScene = currentScene.choices[choiceIndex].nextScene;
    currentScene = story.scenes[story.currentScene];
  }
</script>

<main>
  <h1>{currentScene.text}</h1>
  {#each currentScene.choices as choice, index}
    <button on:click={() => makeChoice(index)}>{choice.text}</button>
  {/each}
</main>

<style>
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  button {
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
