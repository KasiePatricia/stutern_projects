# JavaScript Basics

### Questions

1. What runs JavaScript outside the browser ?
   > Node Js
2. Name 5 things Javascript can do.

   - Dynamic user interface updates: JavaScript can dynamically update content and styles on a web page, creating a responsive and interactive user interface.

   - Web page animations: JavaScript can be used to create animations, transitions and other visual effects on a web page.

   - Form validation: JavaScript can be used to validate form input before it's submitted to a server, reducing the need for server-side validation and improving user experience.

   - Interactivity: JavaScript allows for the creation of interactive elements on a web page, such as dropdown menus, modal windows, and buttons.

   - Server communication: JavaScript can be used to communicate with a server and retrieve data, allowing for the creation of dynamic, single-page applications and data-driven web pages.

3. When was ECMAScript first released ?
   > June 1997
4. How do you log to the console?

```
console.log("Hello World");
```

5. List the tech fields that use JavaScript, for example FrontEnd.

   JavaScript is widely used across various fields of technology, some of the most common include:

- Front-end Web Development: JavaScript is used for client-side scripting on websites and browser applications.

- Back-end Web Development: JavaScript can also be used for server-side scripting using technologies like Node.js.

- Mobile App Development: JavaScript is used to develop cross-platform mobile apps using frameworks like React Native and Ionic.

- Game Development: JavaScript is used to develop browser-based games and interactive media using engines like Phaser and PixiJS.

- Virtual Reality (VR) and Augmented Reality (AR): JavaScript is used to develop web-based VR and AR experiences using libraries like A-Frame and Three.js.

- Internet of Things (IoT): JavaScript is used to develop IoT applications and devices using Node.js and Johnny-Five.

- Artificial Intelligence (AI) and Machine Learning (ML): JavaScript is used to develop AI and ML-powered applications and tools using libraries like TensorFlow.js.

- Data Visualization: JavaScript is used to develop data visualization tools and charts using libraries like D3.js.

These are just a few examples of the diverse fields in which JavaScript is used. The versatility and ubiquity of the language have made it a crucial tool in the technology industry.

6. Differentiate between Statically typed and Dynamically typed programming languages and give examples of languages that fall under each category

Statically typed and dynamically typed programming languages are differentiated based on the type checking mechanism.

In statically typed programming languages, the type of a variable must be explicitly declared before it is used in the code. Once the type is declared, the variable can only hold values of that particular type and any attempt to assign a value of a different type will result in a compile-time error. Examples of statically typed programming languages are: C, C++, Java, and Swift.

On the other hand, in dynamically typed programming languages, the type of a variable is determined at runtime. These languages do not require the programmer to explicitly declare the type of a variable and can often automatically determine the type of a value being assigned to a variable. Examples of dynamically typed programming languages are: Python, Ruby, JavaScript, and PHP.

In general, statically typed languages are considered to be more robust and secure as they catch type errors at compile time, while dynamically typed languages are often considered more flexible and easy to write as they don't require the programmer to declare types and perform type checking.

7. Differentiate between the JavaScript data types 'null' and 'undefined'

In JavaScript, both null and undefined are special values that represent the absence of a value or an unknown value. However, there is a subtle difference between them:

- undefined is a value that is automatically assigned to variables that have been declared but have not been assigned a value. It indicates that the variable has been declared but its value is unknown or has not yet been set.

- null is a value that represents the intentional absence of any object value. It is explicitly set by the programmer to indicate that a variable has no value.

In other words, undefined is a value that is automatically assigned by JavaScript, while null is a value that is explicitly set by the programmer.

Here's an example to illustrate the difference:

let x;
console.log(x); // Output: undefined

let y = null;
console.log(y); // Output: null
