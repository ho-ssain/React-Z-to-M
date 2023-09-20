#

- [Docs](https://www.reactjs.org)

1. **What is React?**

   --> A JS library for building User Interfaces. React is developed and maintained by Facebook(now Meta). React is all about Components.

2. **So, What is Component in react?**

   --> We can think component as independent, reusable building blocks or chunks that encapsulates a piece of UI and it's associated logic.
   Component can be as small as one html element, let's say a button or heading or can be entire page/app
   It break down the UI into smaller, manageable pieces.
   This type of design promote - code reusability, - maintainability and a - modular structure.
   Then we cam piece it together just like lego blocks.
   And that can be help us to build a super complex app.
   An app can have many components but it will always have at least one, called root component

3. **Workflow:**

   - browser
   - Vs Code
   - node
   - CRA: **_npx create-react-app app-name_**
     - Purpose: A tool for quickly setting up a new React application with a predefined project structure, build configuration, and development environment.
     - Use Case: Great for beginners or developers who want to start a React project without spending time on complex setup.
     - [Creating an App](https://github.com/facebook/create-react-app)
   - vite: **_npm create vite@latest app-name_**
     - Purpose: A build tool that offers a fast development server and near-instantaneous build times. It's framework-agnostic and can be used with various frontend frameworks, including React.
     - Use Case: Ideal for experienced developers who want a highly performant and flexible build tool for their React projects. It's particularly known for its speed during development.
     - [Awesome Vite.js](https://github.com/vitejs/awesome-vite#templates)
   - What is npm and npx ?

     --> npm is the package manager for Node.js and JavaScript. It is used for installing, managing, and sharing packages (libraries and dependencies) for JavaScript and Node.js projects. npm also provides a command-line interface for various development tasks.
     --> npx is a command-line tool that comes bundled with npm (version 5.2.0 and higher). It is used to execute Node.js packages or commands from the npm registry. npx is particularly useful for running packages that you don't want to install globally or for running package-specific commands without installing the package permanently.

4. **What is JSX?**

   --> JSX, which stands for JavaScript XML, is a syntax extension used in React for describing the structure of user interfaces (UI). It allows developers to write HTML-like code within JavaScript, making it easier to create and manipulate the UI components of a React application.

   **_Key points about JSX in React:_**

   - Combining JavaScript and HTML
   - Looks Like HTML but note that JSX is not HTML; it's a JavaScript syntax extension.
   - When JSX code is compiled, it is transformed into JavaScript objects called React elements. These elements represent the structure and content of the UI components.
   - You can embed JavaScript expressions inside curly braces {} within JSX to create dynamic content. For example, {variable}, {1 + 2}, or {functionCall()}.

5. **What is Props?**

   --> In React, "props" is short for "properties," and it refers to a mechanism for passing data from a parent component to a child component. Props are used to make components dynamic by allowing values or functions to be passed down to child components, enabling them to render content and behavior based on the data received from their parent component.

6. **React Data-flow / Props Dilling:**

   --> In react data flow can only pass down.
   Alternatives Context API, redux, other state libraries.

7. **What is Prop drilling?**

   --> "prop drilling" or "prop passing," is a term used in React to describe the process of passing props (properties) from a higher-level component down to one or more nested child components. It occurs when you have a deep component hierarchy, and you need to pass data or functions from a high-level parent component to a low-level child component that is not directly connected to the parent.

   Here's a simplified example to illustrate props drilling:

   Suppose you have a React application with three levels of components: Grandparent, Parent, and Child. Data or functions need to be passed from Grandparent to Child. However, because Parent is in between, you need to pass the props through Parent. This passing of props through intermediate components is what's known as "props drilling."

8. **set up wrapper:**

   --> runs instantly.

9. **What is state in react?**

   --> State is built-in-object
   --> it is used to store the data of thecomponents that have to be rendered to the view.
   --> it holds the data and can change over time.
   --> it can only be used in class components
   --> Event handlers generally update state.

10. **what is Props in react?**

    ---> In React, "props" is short for "properties," and it refers to a mechanism for passing data or event handlers from a parent component to a child component.
    --> they are immutable--once set, props cannot be changed.
    --> they can be used in both functional and class components.
    --> The parent component sets props for the children components.

11. **What is hook?**

    --> In React, a hook is a special function that allows functional components to access and manage various aspects of the component's state and behavior. Hooks were introduced in React 16.8 to enable stateful logic in functional components, which were traditionally stateless. They make it easier to reuse code, manage component state, and handle side effects, all while maintaining the simplicity and composability of functional components. Some common hooks include useState, useEffect, useContext, and useRef, each serving a specific purpose within a React component. Hooks provide a more flexible and organized way to build complex and interactive user interfaces in React applications

    **_General rules of hooks_**

    - starts with 'use' (both -react and custom hooks)
    - component must be uppercase
    - invoke inside function/component body
    - don't call hooks conditionally
    - set functions don't update state immediately

12. **What is useState?\***

    --> Certainly! The `useState` hook is a fundamental part of React and is used for managing state within functional components. Here's a detailed explanation of various aspects and theories related to the `useState` hook:

    **_Introduction to `useState`_**:

    - `useState` is one of the built-in hooks introduced in React 16.8. It allows functional components to manage local state, replacing the need for class components with `this.state`.
    - It's imported from the `react` library and is typically used like this: `const [state, setState] = useState(initialState);`

    **_State Initialization_**:

    - `useState` takes an initial state value as its argument. This initial value can be of any data type, including primitive values (e.g., numbers, strings) or objects.

    **_Return Values_**:

    - `useState` returns an array with two elements: the current state value (`state`) and a function (`setState`) to update the state.
    - The destructuring assignment is commonly used to assign these values to variables with more meaningful names, e.g., `const [count, setCount] = useState(0);`

    **_Updating State_**:

    - You should never modify the state directly. Instead, use the `setState` function provided by `useState`.
    - `setState` can be called with a new value to update the state. It can accept a new state value directly or a function that computes the new state based on the previous state.

    **_Functional Updates_**:

    - When the new state depends on the previous state, it's recommended to use the functional form of `setState` to ensure proper updates. For example:
      setCount((prevCount) => prevCount + 1);

    **_Multiple `useState` Calls_**:

    - You can use `useState` multiple times in a single component to manage different pieces of state.
    - Each call to `useState` is independent and doesn't affect the other state variables.

    **_Lazy Initialization_**:

    - The initial state passed to `useState` is only evaluated during the initial render. Subsequent renders ignore it.
    - If you want to initialize state based on props or other variables, you can do so in a separate `useEffect` hook.

    **_Functional Component Re-renders_**:

    - When you call `setState`, it schedules a re-render of the component, but it doesn't immediately update the state. React may batch multiple state updates for better performance.

    **_State in Event Handlers_**:

    - When using state in event handlers or asynchronous code, be aware that closures can capture stale state values. To work around this, use the functional update form or the `useEffect` hook.

    **_State and Component Lifecycles_**:

    - Unlike class components, where state management is tied to component lifecycles, in functional components, state persists across re-renders. This can simplify state management.

    **_Best Practices_**:

    - It's a good practice to define a separate `useState` call for each piece of state to keep your code organized.
    - If state values share common functionality, consider using custom hooks to encapsulate that logic.

    **_Debugging State_**:

    - You can use tools like React DevTools or `console.log` to inspect and debug state changes in your components.

    **_Rules of Hooks_**:

    - `useState` should always be called at the top level of your functional component, not within conditionals or loops. This is part of the "Rules of Hooks" enforced by React.

    **_Use Cases_**:

    - `useState` is commonly used for managing form input values, toggling UI elements, tracking component visibility, and any other component-specific state.

    **_Performance Considerations_**:

    - While React is highly optimized, excessive use of `useState` can impact performance, especially in components that re-render frequently. Consider using other hooks like `useMemo` or `useCallback` to optimize performance.

    **_Cleaning Up State_**:

    - If your component subscribes to external data sources or timers, make sure to clean up those subscriptions in a `useEffect` hook with a cleanup function to avoid memory leaks.

    By understanding and applying these theories related to the `useState` hook, you can effectively manage local component state in your React functional components.

13. **What is render and re-render?**

    --> In the context of React, "render" and "re-render" refer to processes related to updating the user interface of a component.

    **_Render_**:

    - The initial rendering occurs when a component is first created and inserted into the DOM (Document Object Model). During this process, the component's `render` method (in class components) or its JSX (in functional components) is executed to produce the initial UI.
    - Rendering can also occur whenever a component's state or props change. React re-evaluates the component's render method (or JSX) to create a new virtual DOM representation of the component's UI.

    **_Re-render_**:

    - Re-rendering happens when React determines that a component's state or props have changed. When this occurs, React schedules a re-render of the component.
    - During a re-render, React does not necessarily replace the entire DOM element for the component. Instead, it creates a new virtual DOM tree representing the updated UI based on the component's render method or JSX.
    - React then compares this new virtual DOM tree with the previous one to identify the differences (the "diffing" process). It calculates the minimal set of changes needed to update the actual DOM to match the new virtual DOM.

    **_The key idea here is that React optimizes re-renders to be as efficient as possible. Instead of re-creating the entire UI from scratch, it computes the differences and updates only the parts of the DOM that have changed. This helps maintain good performance in React applications, even as components re-render in response to state or prop changes._**

14. **Automatic Batching**

    --> In React, "batching" refers to the process of grouping multiple state updates into a single update. This can be useful in certain cases because it allows React to optimize the rendering of your components by minimizing the number of DOM updates that it has to perfoem.

15. **useEffect?**

    - **_What is useEffect?_**

      - useEffect is a hook provided by react for performing side effects in functional component. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount that are used in class components.

    - **_Why it is used?_**

      - it is used to manage side effects in react components.
      - side effects are operations that occur outside of the regular rendering process, such as fetching data from API, subscribing to a data source, updating the DOM, or interacting with browser APIs.
      - It allows you to keep your component's logic organized and separate from the rendering logic, improving code readability and maintainability.

      **_key points_**

      - accepts two arguments (second optional)
      - 1st argument - cb function
      - 2nd argument - dependency array
      - by defualt runs each render (initial and re-render)
      - cb can't return promise (so can't make it async)
      - if dependency array empty [] runs only om initail render

16. **Conditional rendering**

    - multiple returns
