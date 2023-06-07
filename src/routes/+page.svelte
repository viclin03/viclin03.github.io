
<head>
    <title>Navigation Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0; 
        }

        header {
            background-color: #333;
            padding: 16px;
            color: #fff;
        }

        h1 {
            font-size: 24px;
            margin: 0;
        }

        nav {
            background-color: #A4AD28;
            padding: 16px;
        }

        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        nav li {
            display: inline;
            margin-right: 16px;
        }

        nav a {
            color: #7839AD;
            text-decoration: none;
            font-weight: bold;
        }

        nav a:hover {
            text-decoration: underline;
        }
       
@keyframes colorAnimation {
  0% {
    background-color: red;
  }
  50% {
    background-color: blue;
  }
  100% {
    background-color: green;
  }
}


body {
  animation: colorAnimation 5s infinite linear;
}

    </style>
</head>
<body>
    <header>
        <h1>Navigation Page</h1>
    </header>
    <nav>
        <ul>
            <li><a href="/clickRoute">Clicker</a> game</li>
            <li><a href="/2doRoute">Todolist</a></li>
            <li><a href="/chatbotRoute">Chatbot</a></li>
            <li><a href="/memoryRoute">kit.svelte.de</a>v</li>
            <li><a href="/telltaleRoute">Telltale</a></li>
        </ul>
    </nav>
</body>

