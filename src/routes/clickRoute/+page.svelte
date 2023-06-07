
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }

    main {
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      font-size: 1.5em;
      margin-bottom: 1em;
      text-align: center;
      color: #333;
    }

    button {
      display: block;
      width: 100%;
      padding: 0.5em 1em;
      font-size: 1em;
      background-color: #4287f5;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #1a5bc9;
    }

    p {
      font-size: 1em;
      text-align: center;
      color: #666;
      margin-top: 1em;
    }

    span {
      font-weight: bold;
      color: #333;
    }
    
    .upgrade {
      margin-top: 1em;
    }

    .upgrade button {
      background-color: #4caf50;
    }

    .upgrade button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <script>
    let count = 0;
    let clickValue = 1;
    let upgradeCost = 10;

    function handleClick() {
      count += clickValue;
      document.getElementById('count-display').innerText = count;
    }

    function purchaseUpgrade() {
      if (count >= upgradeCost) {
        count -= upgradeCost;
        clickValue++;
        upgradeCost *= 2;
        document.getElementById('count-display').innerText = count;
        document.getElementById('click-value').innerText = clickValue;
        document.getElementById('upgrade-cost').innerText = upgradeCost;
      }
    }
  </script>
  
  <main>
    <h1>Clicker Game</h1>
    <button onclick="handleClick()">Click Me</button>
    <p>Click count: <span id="count-display">0</span></p>
    
    <div class="upgrade">
      <button onclick="purchaseUpgrade()">Increase Click Value</button>
      <p>Current Click Value: <span id="click-value">1</span></p>
      <p>Upgrade Cost: <span id="upgrade-cost">10</span></p>
    </div>
  </main>
</body>


