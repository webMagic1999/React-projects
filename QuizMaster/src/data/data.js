const quizQuestions = {
  "HTML CSS JS": [
    {
      id: 1,
      question: "What is the purpose of the `DOCTYPE` declaration in HTML?",
      options: [
        "It defines the HTML version and type.",
        "It links CSS files.",
        "It initializes JavaScript variables.",
        "It specifies character encoding.",
      ],
      answer: "It defines the HTML version and type.",
      isCorrect: (selectedOption) =>
        selectedOption === "It defines the HTML version and type.",
    },
    {
      id: 2,
      question: "What does the CSS `box-model` include?",
      options: [
        "Margin, border, padding, and content",
        "Height and width only",
        "Padding and content only",
        "Border and margin only",
      ],
      answer: "Margin, border, padding, and content",
      isCorrect: (selectedOption) =>
        selectedOption === "Margin, border, padding, and content",
    },
    {
      id: 3,
      question: "What is the purpose of the `z-index` property in CSS?",
      options: [
        "It sets the transparency of an element.",
        "It determines the stack order of elements.",
        "It aligns elements horizontally.",
        "It applies a gradient background.",
      ],
      answer: "It determines the stack order of elements.",
      isCorrect: (selectedOption) =>
        selectedOption === "It determines the stack order of elements.",
    },
    {
      id: 4,
      question:
        "What is the difference between `var`, `let`, and `const` in JavaScript?",
      options: [
        "`var` is block-scoped, `let` is function-scoped, `const` is immutable.",
        "`var` is function-scoped, `let` is block-scoped, `const` is block-scoped.",
        "`var` is immutable, `let` is block-scoped, `const` is global-scoped.",
        "All three behave the same in modern JavaScript.",
      ],
      answer:
        "`var` is function-scoped, `let` is block-scoped, `const` is block-scoped.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "`var` is function-scoped, `let` is block-scoped, `const` is block-scoped.",
    },
    {
      id: 5,
      question: "What does `===` check in JavaScript?",
      options: [
        "Equality and type",
        "Only equality",
        "Type only",
        "Equality and length",
      ],
      answer: "Equality and type",
      isCorrect: (selectedOption) => selectedOption === "Equality and type",
    },
    {
      id: 6,
      question: "What is the purpose of the `event.preventDefault()` method?",
      options: [
        "Stops the event from bubbling up the DOM tree.",
        "Cancels the browser's default behavior for the event.",
        "Stops the event from being captured.",
        "Destroys the event listener after execution.",
      ],
      answer: "Cancels the browser's default behavior for the event.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "Cancels the browser's default behavior for the event.",
    },
    {
      id: 7,
      question: "What is a JavaScript closure?",
      options: [
        "A function that runs in strict mode.",
        "A function that remembers its lexical scope even when executed outside of it.",
        "A block of code executed synchronously.",
        "A method for error handling.",
      ],
      answer:
        "A function that remembers its lexical scope even when executed outside of it.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "A function that remembers its lexical scope even when executed outside of it.",
    },
    {
      id: 8,
      question: "Which HTML element is used to create an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>",
      isCorrect: (selectedOption) => selectedOption === "<ul>",
    },
    {
      id: 9,
      question:
        "What is the purpose of the `alt` attribute in the `<img>` tag?",
      options: [
        "Specifies the source of the image.",
        "Provides alternative text for the image.",
        "Adds a caption below the image.",
        "Specifies the width of the image.",
      ],
      answer: "Provides alternative text for the image.",
      isCorrect: (selectedOption) =>
        selectedOption === "Provides alternative text for the image.",
    },
    {
      id: 10,
      question: "What does the `position: absolute` property do in CSS?",
      options: [
        "Positions the element relative to the nearest positioned ancestor.",
        "Positions the element relative to the viewport.",
        "Centers the element within its container.",
        "Prevents the element from being displayed.",
      ],
      answer:
        "Positions the element relative to the nearest positioned ancestor.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "Positions the element relative to the nearest positioned ancestor.",
    },
  ],
  "REACT & REDUX": [
    {
      id: 1,
      question: "What are React hooks, and why are they used?",
      options: [
        "They are lifecycle methods for class components.",
        "They allow state and lifecycle methods in functional components.",
        "They are event listeners in React.",
        "They are used for server-side rendering.",
      ],
      answer:
        "They allow state and lifecycle methods in functional components.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "They allow state and lifecycle methods in functional components.",
    },
    {
      id: 2,
      question: "What is the purpose of `useEffect` in React?",
      options: [
        "To manage component state.",
        "To handle side effects in functional components.",
        "To optimize rendering performance.",
        "To define prop types.",
      ],
      answer: "To handle side effects in functional components.",
      isCorrect: (selectedOption) =>
        selectedOption === "To handle side effects in functional components.",
    },
    {
      id: 3,
      question: "What is Redux used for?",
      options: [
        "To manage component styles.",
        "To manage application state.",
        "To perform API calls.",
        "To handle animations.",
      ],
      answer: "To manage application state.",
      isCorrect: (selectedOption) =>
        selectedOption === "To manage application state.",
    },
    {
      id: 4,
      question: "What does `getStaticProps` do in Next.js?",
      options: [
        "Fetch data on every request.",
        "Fetch data at build time.",
        "Handle server-side rendering.",
        "Fetch data after the page loads.",
      ],
      answer: "Fetch data at build time.",
      isCorrect: (selectedOption) =>
        selectedOption === "Fetch data at build time.",
    },
    {
      id: 5,
      question: "What is the purpose of `useState` in React?",
      options: [
        "To create a stateful component.",
        "To manage side effects in functional components.",
        "To define a reducer function.",
        "To fetch data from an API.",
      ],
      answer: "To create a stateful component.",
      isCorrect: (selectedOption) =>
        selectedOption === "To create a stateful component.",
    },
    {
      id: 6,
      question:
        "What is the difference between server-side rendering and client-side rendering?",
      options: [
        "SSR generates HTML on the server; CSR generates HTML in the browser.",
        "CSR generates HTML on the server; SSR generates HTML in the browser.",
        "SSR is faster than CSR in all cases.",
        "CSR doesn't work with React.",
      ],
      answer:
        "SSR generates HTML on the server; CSR generates HTML in the browser.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "SSR generates HTML on the server; CSR generates HTML in the browser.",
    },
    {
      id: 7,
      question: "What is the purpose of `useReducer` in React?",
      options: [
        "To fetch data from an API.",
        "To handle complex state logic.",
        "To manage component styling.",
        "To replace the `useEffect` hook.",
      ],
      answer: "To handle complex state logic.",
      isCorrect: (selectedOption) =>
        selectedOption === "To handle complex state logic.",
    },
    {
      id: 8,
      question: "What does the `next/link` component do in Next.js?",
      options: [
        "It adds a link to an external stylesheet.",
        "It allows client-side navigation between pages.",
        "It handles server-side rendering.",
        "It fetches data for static props.",
      ],
      answer: "It allows client-side navigation between pages.",
      isCorrect: (selectedOption) =>
        selectedOption === "It allows client-side navigation between pages.",
    },
    {
      id: 9,
      question: "What is the purpose of `Provider` in Redux?",
      options: [
        "To fetch data from a global store.",
        "To pass the Redux store to React components.",
        "To define reducers.",
        "To replace React context.",
      ],
      answer: "To pass the Redux store to React components.",
      isCorrect: (selectedOption) =>
        selectedOption === "To pass the Redux store to React components.",
    },
    {
      id: 10,
      question: "What is `useContext` in React used for?",
      options: [
        "To create a new context.",
        "To consume a context in a functional component.",
        "To manage side effects.",
        "To update component state.",
      ],
      answer: "To consume a context in a functional component.",
      isCorrect: (selectedOption) =>
        selectedOption === "To consume a context in a functional component.",
    },
  ],
  "JAVA & AI": [
    {
      id: 1,
      question: "What is the purpose of the `public` keyword in Java?",
      options: [
        "It defines a private method.",
        "It allows a method or variable to be accessible from other classes.",
        "It restricts access to the method.",
        "It specifies a class constructor.",
      ],
      answer:
        "It allows a method or variable to be accessible from other classes.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "It allows a method or variable to be accessible from other classes.",
    },
    {
      id: 2,
      question: "What is the significance of the `main` method in Java?",
      options: [
        "It is the entry point of any Java program.",
        "It is a default method in Java.",
        "It defines the exit point of the program.",
        "It initializes variables in a class.",
      ],
      answer: "It is the entry point of any Java program.",
      isCorrect: (selectedOption) =>
        selectedOption === "It is the entry point of any Java program.",
    },
    {
      id: 3,
      question: "What is machine learning in AI?",
      options: [
        "A method to hard-code all tasks.",
        "A subset of AI where systems learn from data.",
        "A framework for designing software.",
        "A type of programming language.",
      ],
      answer: "A subset of AI where systems learn from data.",
      isCorrect: (selectedOption) =>
        selectedOption === "A subset of AI where systems learn from data.",
    },
    {
      id: 4,
      question: "What is the role of the JVM in Java?",
      options: [
        "To compile Java code into bytecode.",
        "To interpret and run bytecode.",
        "To write Java source code.",
        "To debug Java applications.",
      ],
      answer: "To interpret and run bytecode.",
      isCorrect: (selectedOption) =>
        selectedOption === "To interpret and run bytecode.",
    },
    {
      id: 5,
      question: "What does overloading mean in Java?",
      options: [
        "Having multiple methods with the same name but different parameters.",
        "Overriding a parent class method.",
        "Extending multiple classes.",
        "Using dynamic polymorphism.",
      ],
      answer:
        "Having multiple methods with the same name but different parameters.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "Having multiple methods with the same name but different parameters.",
    },
    {
      id: 6,
      question: "What is deep learning in AI?",
      options: [
        "A basic programming model.",
        "A subset of machine learning using neural networks.",
        "A statistical analysis tool.",
        "A technique for database management.",
      ],
      answer: "A subset of machine learning using neural networks.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "A subset of machine learning using neural networks.",
    },
    {
      id: 7,
      question: "What is the significance of `this` in Java?",
      options: [
        "It refers to the current instance of the class.",
        "It refers to a static member of the class.",
        "It refers to the parent class.",
        "It creates a new object of the class.",
      ],
      answer: "It refers to the current instance of the class.",
      isCorrect: (selectedOption) =>
        selectedOption === "It refers to the current instance of the class.",
    },
    {
      id: 8,
      question: "What is reinforcement learning in AI?",
      options: [
        "Learning by example data.",
        "Learning by trial and error to maximize rewards.",
        "Using supervised datasets to predict outcomes.",
        "A rule-based decision-making approach.",
      ],
      answer: "Learning by trial and error to maximize rewards.",
      isCorrect: (selectedOption) =>
        selectedOption === "Learning by trial and error to maximize rewards.",
    },
    {
      id: 9,
      question: "What is polymorphism in Java?",
      options: [
        "A single method having multiple forms.",
        "A type of inheritance.",
        "Defining variables with multiple data types.",
        "A way to define constants.",
      ],
      answer: "A single method having multiple forms.",
      isCorrect: (selectedOption) =>
        selectedOption === "A single method having multiple forms.",
    },
    {
      id: 10,
      question: "What is the Turing Test in AI?",
      options: [
        "A test to determine the correctness of a program.",
        "A test to evaluate a machine's ability to exhibit intelligent behavior.",
        "A test for debugging machine learning models.",
        "A test for identifying computer viruses.",
      ],
      answer:
        "A test to evaluate a machine's ability to exhibit intelligent behavior.",
      isCorrect: (selectedOption) =>
        selectedOption ===
        "A test to evaluate a machine's ability to exhibit intelligent behavior.",
    },
  ],
  Cricket: [
    {
      id: 1,
      question:
        "What is the maximum number of overs allowed per bowler in a T20 match?",
      options: ["2", "4", "5", "6"],
      answer: "4",
      isCorrect: (selectedOption) => selectedOption === "4",
    },
    {
      id: 2,
      question: "Who has the highest individual score in ODI cricket?",
      options: [
        "Virat Kohli",
        "Chris Gayle",
        "Rohit Sharma",
        "Sachin Tendulkar",
      ],
      answer: "Rohit Sharma",
      isCorrect: (selectedOption) => selectedOption === "Rohit Sharma",
    },
    {
      id: 3,
      question: "What does the term 'Duck' mean in cricket?",
      options: [
        "A batsman gets out without scoring any runs.",
        "A batsman scores exactly one run.",
        "A bowler bowls three consecutive dot balls.",
        "A fielder catches the ball with one hand.",
      ],
      answer: "A batsman gets out without scoring any runs.",
      isCorrect: (selectedOption) =>
        selectedOption === "A batsman gets out without scoring any runs.",
    },
    {
      id: 4,
      question: "Which country won the first Cricket World Cup in 1975?",
      options: ["Australia", "England", "India", "West Indies"],
      answer: "West Indies",
      isCorrect: (selectedOption) => selectedOption === "West Indies",
    },
    {
      id: 5,
      question:
        "What is the term for a delivery bowled by a fast bowler aimed at the batsman's head?",
      options: ["Yorker", "Bouncer", "Full toss", "Swinger"],
      answer: "Bouncer",
      isCorrect: (selectedOption) => selectedOption === "Bouncer",
    },
    {
      id: 6,
      question: "Who holds the record for the fastest century in ODI cricket?",
      options: [
        "Virat Kohli",
        "AB de Villiers",
        "Chris Gayle",
        "Shahid Afridi",
      ],
      answer: "AB de Villiers",
      isCorrect: (selectedOption) => selectedOption === "AB de Villiers",
    },
    {
      id: 7,
      question:
        "What is the term for a batsman scoring 100 runs in a single inning?",
      options: ["Century", "Duck", "Fifty", "Hat-trick"],
      answer: "Century",
      isCorrect: (selectedOption) => selectedOption === "Century",
    },
    {
      id: 8,
      question: "What does LBW stand for in cricket?",
      options: [
        "Left Behind Wicket",
        "Leg Before Wicket",
        "Lost Ball Wicket",
        "Long Bat Wicket",
      ],
      answer: "Leg Before Wicket",
      isCorrect: (selectedOption) => selectedOption === "Leg Before Wicket",
    },
    {
      id: 9,
      question: "What is the official length of a cricket pitch?",
      options: ["18 yards", "20 yards", "22 yards", "24 yards"],
      answer: "22 yards",
      isCorrect: (selectedOption) => selectedOption === "22 yards",
    },
    {
      id: 10,
      question: "Which player is known as the 'God of Cricket'?",
      options: [
        "Brian Lara",
        "Ricky Ponting",
        "Virat Kohli",
        "Sachin Tendulkar",
      ],
      answer: "Sachin Tendulkar",
      isCorrect: (selectedOption) => selectedOption === "Sachin Tendulkar",
    },
  ],
  "CAR & BIKES": [
    {
      id: 1,
      question: "Which car brand manufactures the 'Model S'?",
      options: ["BMW", "Tesla", "Audi", "Ford"],
      answer: "Tesla",
      isCorrect: (selectedOption) => selectedOption === "Tesla",
    },
    {
      id: 2,
      question: "What is the engine capacity of a Royal Enfield Classic 350?",
      options: ["250cc", "350cc", "500cc", "750cc"],
      answer: "350cc",
      isCorrect: (selectedOption) => selectedOption === "350cc",
    },
    {
      id: 3,
      question: "Which company manufactures the Ninja series of bikes?",
      options: ["Honda", "Kawasaki", "Yamaha", "Suzuki"],
      answer: "Kawasaki",
      isCorrect: (selectedOption) => selectedOption === "Kawasaki",
    },
    {
      id: 4,
      question: "What does ABS stand for in vehicles?",
      options: [
        "Advanced Braking System",
        "Anti-lock Braking System",
        "Automatic Brake System",
        "Auto Balance System",
      ],
      answer: "Anti-lock Braking System",
      isCorrect: (selectedOption) =>
        selectedOption === "Anti-lock Braking System",
    },
    {
      id: 5,
      question:
        "Which car brand uses the slogan 'The Ultimate Driving Machine'?",
      options: ["Mercedes-Benz", "Audi", "BMW", "Jaguar"],
      answer: "BMW",
      isCorrect: (selectedOption) => selectedOption === "BMW",
    },
    {
      id: 6,
      question: "Which bike is known as the 'Hayabusa'?",
      options: [
        "Suzuki GSX-1300R",
        "Kawasaki Ninja ZX-14R",
        "Ducati Panigale V4",
        "Yamaha R1",
      ],
      answer: "Suzuki GSX-1300R",
      isCorrect: (selectedOption) => selectedOption === "Suzuki GSX-1300R",
    },
    {
      id: 7,
      question: "Which type of fuel does a Tesla vehicle primarily use?",
      options: ["Petrol", "Diesel", "Electric", "Hybrid"],
      answer: "Electric",
      isCorrect: (selectedOption) => selectedOption === "Electric",
    },
    {
      id: 8,
      question: "Which company produces the 'Mustang' car?",
      options: ["Ford", "Chevrolet", "Dodge", "BMW"],
      answer: "Ford",
      isCorrect: (selectedOption) => selectedOption === "Ford",
    },
    {
      id: 9,
      question: "What is the primary function of a turbocharger in a car?",
      options: [
        "Increase braking efficiency",
        "Enhance fuel economy",
        "Boost engine power by compressing air",
        "Improve suspension handling",
      ],
      answer: "Boost engine power by compressing air",
      isCorrect: (selectedOption) =>
        selectedOption === "Boost engine power by compressing air",
    },
    {
      id: 10,
      question: "What is the top speed of the Bugatti Chiron?",
      options: ["261 mph", "240 mph", "300 mph", "320 mph"],
      answer: "261 mph",
      isCorrect: (selectedOption) => selectedOption === "261 mph",
    },
  ],
  NATURE: [
    {
      id: 1,
      question: "What is the largest rainforest in the world?",
      options: [
        "Congo Rainforest",
        "Amazon Rainforest",
        "Daintree Rainforest",
        "Borneo Rainforest",
      ],
      answer: "Amazon Rainforest",
      isCorrect: (selectedOption) => selectedOption === "Amazon Rainforest",
    },
    {
      id: 2,
      question: "What is the main source of energy for Earth's ecosystem?",
      options: ["The Moon", "The Sun", "Earth's core", "Volcanoes"],
      answer: "The Sun",
      isCorrect: (selectedOption) => selectedOption === "The Sun",
    },
    {
      id: 3,
      question: "Which planet is known as the 'Blue Planet'?",
      options: ["Mars", "Earth", "Neptune", "Venus"],
      answer: "Earth",
      isCorrect: (selectedOption) => selectedOption === "Earth",
    },
    {
      id: 4,
      question: "What is the largest desert on Earth?",
      options: [
        "Sahara Desert",
        "Antarctic Desert",
        "Gobi Desert",
        "Arabian Desert",
      ],
      answer: "Antarctic Desert",
      isCorrect: (selectedOption) => selectedOption === "Antarctic Desert",
    },
    {
      id: 5,
      question: "What is the process through which plants make their food?",
      options: [
        "Respiration",
        "Photosynthesis",
        "Transpiration",
        "Evaporation",
      ],
      answer: "Photosynthesis",
      isCorrect: (selectedOption) => selectedOption === "Photosynthesis",
    },
    {
      id: 6,
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
      answer: "Mount Everest",
      isCorrect: (selectedOption) => selectedOption === "Mount Everest",
    },
    {
      id: 7,
      question: "What is the largest animal on Earth?",
      options: [
        "African Elephant",
        "Blue Whale",
        "Giraffe",
        "Great White Shark",
      ],
      answer: "Blue Whale",
      isCorrect: (selectedOption) => selectedOption === "Blue Whale",
    },
    {
      id: 8,
      question: "Which gas do plants primarily absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide",
      isCorrect: (selectedOption) => selectedOption === "Carbon Dioxide",
    },
    {
      id: 9,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
      isCorrect: (selectedOption) => selectedOption === "Pacific Ocean",
    },
    {
      id: 10,
      question: "What is the main component of the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      answer: "Nitrogen",
      isCorrect: (selectedOption) => selectedOption === "Nitrogen",
    },
  ],
};
export default quizQuestions;
