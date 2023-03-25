# React Assignment

### 1. List five significant features of React

React is a popular JavaScript library used for building user interfaces. Here are five significant features of React:\

a. Component-based architecture: React follows a component-based architecture, where the user interface is broken down into small, reusable components. This makes it easy to manage and scale the application as the components can be reused across different parts of the application.\

b. Virtual DOM: React uses a virtual DOM, which is a lightweight copy of the actual DOM. React updates the virtual DOM whenever there is a change in the component and then compares it with the previous version to find the differences. This approach makes the application faster and more efficient.\

c. JSX: React uses JSX, a syntax extension that allows developers to write HTML-like code within JavaScript. This makes it easy to create and manage components as well as to integrate JavaScript logic within the HTML-like code.\

d. One-way data binding: React follows a one-way data binding approach, where the data flows in one direction, from the parent component to the child component. This approach makes it easier to manage the state of the application and to debug errors.\

e. React Native: React also has a mobile development framework called React Native. With React Native, developers can create mobile applications for both iOS and Android platforms using JavaScript and React syntax. This makes it easy to share code between web and mobile applications and to reduce development time and cost.\

### `2. List five major advantages of React`

The five major advantages of React:\

- a. It is a handy and powerful Javascript library that allows developers to reuse code and build interactive UI elements1.
- b. It is fast, simple, and easy to use, as it uses Virtual DOM to update dynamic UI elements without reloading the page12.
- c. It eases debugging by separating components and allowing developers to find and fix bugs quickly12.
- d. It is scalable and can handle complex UI functions with simple HTML and Javascript components2.
- e. It is SEO friendly and can improve the performance and ranking of web application

### `3. What is the name of the Software Engineer that created React? Also, which company owns React?`

React was created by Jordan Walke, a software engineer at Facebook. React is an open-source project maintained by Facebook, but it is not owned by any company or individual. The React project is managed by a community of developers who contribute to its development and maintenance. However, Facebook employs many of the core contributors to the React project and continues to invest heavily in its development.\

### `4. What are the notable differences between HTML & JSX? Give at least 3 of them`

HTML and JSX are both used for creating user interfaces, but there are several notable differences between the two. Here are three of them:\

Syntax: The syntax of HTML and JSX is different. HTML uses angle brackets (< >) to denote tags, and the attributes are specified using HTML attributes. On the other hand, JSX uses angle brackets to denote tags, but the attributes are specified using JavaScript objects.\

Components: In HTML, the components are defined by the HTML tags. In contrast, JSX components are defined as JavaScript functions, which can take in parameters and return a React element. This makes it easier to create reusable components and to integrate them with JavaScript code.\

Dynamic Content: In HTML, the dynamic content is typically added using server-side scripting or JavaScript. In contrast, JSX allows developers to write dynamic content using JavaScript expressions within the JSX code. This makes it easier to create dynamic user interfaces, as the JSX code can access and manipulate the state of the application.\

### `5. Why can’t browsers read JSX?`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

Browsers cannot read JSX because it is not a standard web language like HTML, CSS, and JavaScript. JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. This HTML-like code is not recognized by the browser because it is not valid HTML.\

To solve this issue, developers use a tool called a `"transpiler"` or `"compiler"` to convert JSX code into regular JavaScript code that browsers can understand. One popular transpiler is Babel, which can convert JSX into JavaScript using a plugin called "@babel/preset-react".\

This process of transpiling JSX into JavaScript is often done as part of a build process, where the original code is transformed and bundled into a single JavaScript file that can be served to the browser. The resulting JavaScript code contains the same functionality as the original JSX code, but it is compatible with all modern browsers that support JavaScript.\
