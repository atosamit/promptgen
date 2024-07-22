const questions = [
    {
        question: "What are the key sections I should include in a wireframe for a mobile app landing page?",
        prompt: "Landing page wireframe for mobile app"
    },
    {
        question: "Show me how to implement exception handling in Java.",
        prompt: "Java exception handling"
    },
    {
        question: "Show me how to implement a basic authentication system using JWT (JSON Web Tokens) in a React application",
        prompt: "JWT authentication in React"
    },
    {
        question: "How to create a RESTful API using Node.js and Express?",
        prompt: "Node.js RESTful API with Express"
    },
    {
        question: "What are the best practices for optimizing SQL queries?",
        prompt: "Optimizing SQL queries best practices"
    },
    {
        question: "Show me how to use Docker to containerize a Python application.",
        prompt: "Docker containerize Python application"
    },
    {
        question: "How to implement a responsive navigation bar using HTML and CSS?",
        prompt: "Responsive navigation bar with HTML and CSS"
    },
    {
        question: "What is the best way to handle state management in a React application?",
        prompt: "State management in React"
    },
    {
        question: "How can I use Redux for state management in a React application?",
        prompt: "Redux state management in React"
    },
    {
        question: "Show me how to integrate Stripe payment gateway in a Node.js application.",
        prompt: "Stripe integration in Node.js"
    },
    {
        question: "What are the key differences between SQL and NoSQL databases?",
        prompt: "SQL vs NoSQL databases"
    },
    {
        question: "How to perform form validation in Angular?",
        prompt: "Form validation in Angular"
    },
    {
        question: "Show me how to build a chat application using WebSockets.",
        prompt: "Chat application with WebSockets"
    },
    {
        question: "What are the best practices for writing clean and maintainable JavaScript code?",
        prompt: "Clean and maintainable JavaScript code best practices"
    },
    {
        question: "How to create a RESTful API using Django and Django REST framework?",
        prompt: "Django RESTful API with Django REST framework"
    },
    {
        question: "Show me how to set up continuous integration and continuous deployment (CI/CD) with GitHub Actions.",
        prompt: "CI/CD setup with GitHub Actions"
    },
    {
        question: "What are the key features of TypeScript and how to use them?",
        prompt: "Key features of TypeScript"
    },
    {
        question: "How to implement a search functionality in a React application?",
        prompt: "Search functionality in React"
    },
    {
        question: "Show me how to create a simple CRUD application using Vue.js.",
        prompt: "CRUD application with Vue.js"
    },
    {
        question: "How to optimize images for the web?",
        prompt: "Web image optimization"
    },
    {
        question: "Show me how to build a responsive grid layout using CSS Grid.",
        prompt: "Responsive grid layout with CSS Grid"
    },
    {
        question: "How to implement user authentication using Firebase in a web application?",
        prompt: "User authentication with Firebase"
    },
    {
        question: "What are the best practices for writing unit tests in JavaScript?",
        prompt: "JavaScript unit testing best practices"
    },
    {
        question: "How to create and use custom hooks in React?",
        prompt: "Creating and using custom hooks in React"
    },
    {
        question: "Show me how to deploy a web application to Heroku.",
        prompt: "Deploy web application to Heroku"
    },
    {
        question: "What are the differences between classical and prototypal inheritance in JavaScript?",
        prompt: "Classical vs prototypal inheritance in JavaScript"
    },
    {
        question: "How to implement drag and drop functionality in a web application using HTML5 and JavaScript?",
        prompt: "Drag and drop functionality with HTML5 and JavaScript"
    },
    {
        question: "Show me how to create a real-time data visualization dashboard using D3.js.",
        prompt: "Real-time data visualization with D3.js"
    },
    {
        question: "What are the key considerations for designing a RESTful API?",
        prompt: "Designing a RESTful API key considerations"
    },
    {
        question: "How to implement server-side rendering in a Next.js application?",
        prompt: "Server-side rendering with Next.js"
    },
    {
        question: "Show me how to use GraphQL with Apollo Client in a React application.",
        prompt: "GraphQL with Apollo Client in React"
    },
    {
        question: "What are the best practices for securing a Node.js application?",
        prompt: "Securing Node.js application best practices"
    },
    {
        question: "How to handle file uploads in a Django application?",
        prompt: "File uploads in Django"
    },
    {
        question: "Show me how to create a progressive web app (PWA) using React.",
        prompt: "Progressive web app with React"
    },
    {
        question: "What are the differences between synchronous and asynchronous programming in JavaScript?",
        prompt: "Synchronous vs asynchronous programming in JavaScript"
    },
    {
        question: "How to create a custom middleware in an Express.js application?",
        prompt: "Creating custom middleware in Express.js"
    },
    {
        question: "Show me how to build a simple blog using Gatsby.js.",
        prompt: "Simple blog with Gatsby.js"
    },
    {
        question: "What are the key differences between REST and GraphQL?",
        prompt: "REST vs GraphQL"
    },
    {
        question: "How to implement form validation using Formik and Yup in a React application?",
        prompt: "Form validation with Formik and Yup in React"
    },
    {
        question: "Show me how to use the Context API in a React application.",
        prompt: "Using Context API in React"
    },
    {
        question: "What are the best practices for designing a scalable frontend architecture?",
        prompt: "Designing scalable frontend architecture best practices"
    },
    {
        question: "How to handle state management in a Vue.js application using Vuex?",
        prompt: "State management with Vuex in Vue.js"
    },
    {
        question: "Show me how to create a custom directive in Angular.",
        prompt: "Creating custom directive in Angular"
    },
    {
        question: "What are the best practices for optimizing a web application for performance?",
        prompt: "Web application performance optimization best practices"
    },
    {
        question: "How to integrate OAuth 2.0 authentication in a Node.js application?",
        prompt: "OAuth 2.0 authentication in Node.js"
    },
    {
        question: "Show me how to create a simple to-do list application using React and Redux.",
        prompt: "To-do list application with React and Redux"
    },
    {
        question: "What are the differences between SQL JOINs and how to use them?",
        prompt: "Differences between SQL JOINs"
    },
    {
        question: "How to implement lazy loading in an Angular application?",
        prompt: "Lazy loading in Angular"
    },
    {
        question: "Show me how to create a dynamic form in Vue.js.",
        prompt: "Creating dynamic form in Vue.js"
    },
    {
        question: "What are the key features of the latest ECMAScript (ES) version?",
        prompt: "Key features of latest ECMAScript version"
    },
    {
        question: "How to set up a basic GraphQL server using Apollo Server?",
        prompt: "Setting up GraphQL server with Apollo Server"
    },
    {
        question: "Show me how to create a responsive image gallery using CSS and JavaScript.",
        prompt: "Responsive image gallery with CSS and JavaScript"
    },
    {
        question: "What are the best practices for handling user input in a web application?",
        prompt: "Handling user input best practices"
    },
    {
        question: "How to implement a dark mode toggle in a React application?",
        prompt: "Dark mode toggle in React"
    },
    {
        question: "Show me how to use Tailwind CSS for styling a web application.",
        prompt: "Using Tailwind CSS for styling"
    },
    {
        question: "What are the differences between server-side and client-side rendering?",
        prompt: "Server-side vs client-side rendering"
    },
    {
        question: "How to create a multi-step form in a React application?",
        prompt: "Creating multi-step form in React"
    },
    {
        question: "Show me how to implement internationalization (i18n) in a Vue.js application.",
        prompt: "Internationalization (i18n) in Vue.js"
    },
    {
        question: "What are the key considerations for designing a microservices architecture?",
        prompt: "Designing microservices architecture key considerations"
    },
    {
        question: "How to implement authentication and authorization in a Django application?",
        prompt: "Authentication and authorization in Django"
    },
    {
        question: "Show me how to use Material-UI components in a React application.",
        prompt: "Using Material-UI components in React"
    },
    {
        question: "What are the differences between cookies, session storage, and local storage?",
        prompt: "Cookies vs session storage vs local storage"
    },
    {
        question: "How to implement infinite scrolling in a web application?",
        prompt: "Implementing infinite scrolling"
    },
    {
        question: "Show me how to build a real-time chat application using Firebase and React.",
        prompt: "Real-time chat with Firebase and React"
    },
    {
        question: "What are the key differences between Angular and React?",
        prompt: "Angular vs React"
    },
    {
        question: "How to create a custom React hook for fetching data?",
        prompt: "Creating custom React hook for data fetching"
    },
    {
        question: "Show me how to use SASS for styling a web application.",
        prompt: "Using SASS for styling"
    },
    {
        question: "What are the best practices for deploying a web application to AWS?",
        prompt: "Deploying web application to AWS best practices"
    },
    {
        question: "How to create a responsive dropdown menu using HTML, CSS, and JavaScript?",
        prompt: "Responsive dropdown menu with HTML, CSS, and JavaScript"
    },
    {
        question: "Show me how to implement drag-and-drop file upload in a React application.",
        prompt: "Drag-and-drop file upload in React"
    },
    {
        question: "What are the key features of the latest version of React?",
        prompt: "Key features of latest React version"
    },
    {
        question: "How to handle errors and exceptions in an Express.js application?",
        prompt: "Error and exception handling in Express.js"
    },
    {
        question: "Show me how to use Bootstrap for styling a web application.",
        prompt: "Using Bootstrap for styling"
    },
    {
        question: "What are the differences between functional and class components in React?",
        prompt: "Functional vs class components in React"
    },
    {
        question: "How to implement OAuth 2.0 authentication in a Django application?",
        prompt: "OAuth 2.0 authentication in Django"
    },
    {
        question: "Show me how to create a responsive card layout using CSS Flexbox.",
        prompt: "Responsive card layout with CSS Flexbox"
    },
    {
        question: "What are the best practices for writing secure code in JavaScript?",
        prompt: "Writing secure JavaScript code best practices"
    },
    {
        question: "How to set up a MongoDB database with a Node.js application?",
        prompt: "Setting up MongoDB with Node.js"
    },
    {
        question: "Show me how to create a custom hook in React for form validation.",
        prompt: "Creating custom hook for form validation in React"
    },
    {
        question: "What are the differences between GET and POST HTTP methods?",
        prompt: "GET vs POST HTTP methods"
    },
    {
        question: "How to implement pagination in a web application?",
        prompt: "Implementing pagination in web application"
    },
    {
        question: "Show me how to create a simple weather application using React and OpenWeather API.",
        prompt: "Weather application with React and OpenWeather API"
    },
    {
        question: "What are the key features of the latest Angular version?",
        prompt: "Key features of latest Angular version"
    },
    {
        question: "How to handle asynchronous operations in JavaScript using async/await?",
        prompt: "Handling asynchronous operations with async/await in JavaScript"
    },
    {
        question: "Show me how to use Axios for making HTTP requests in a React application.",
        prompt: "Using Axios for HTTP requests in React"
    },
    {
        question: "What are the best practices for structuring a React application?",
        prompt: "Structuring a React application best practices"
    },
    {
        question: "How to implement a search bar with autocomplete in a web application?",
        prompt: "Search bar with autocomplete implementation"
    },
    {
        question: "Show me how to use Jest for testing a React application.",
        prompt: "Using Jest for React application testing"
    },
    {
        question: "What are the key concepts of responsive web design?",
        prompt: "Key concepts of responsive web design"
    },
    {
        question: "How to implement Google Maps in a web application?",
        prompt: "Implementing Google Maps in web application"
    },
    {
        question: "Show me how to build a simple e-commerce application using Next.js.",
        prompt: "E-commerce application with Next.js"
    },
    {
        question: "What are the differences between synchronous and asynchronous programming in Node.js?",
        prompt: "Synchronous vs asynchronous programming in Node.js"
    },
    {
        question: "How to use Redux Toolkit for state management in a React application?",
        prompt: "State management with Redux Toolkit in React"
    }
];
module.exports = questions;