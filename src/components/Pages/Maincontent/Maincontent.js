import './Maincontent.css';

function MainContent() {
   return (
    <div className="main">
        <h2>React Js</h2>
         <p>
          ReactJS is JavaScript library used for building reusable UI components. 
          According to React official documentation, following is the definition 
          React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is
          easier to reason about than traditional data binding.
         </p>

         <h2>React Advantages</h2>
         <p>
          Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is
          faster than the regular DOM.
          Can be used on client and server side as well as with other frameworks.
          Component and data patterns improve readability, which helps to maintain larger apps.
         </p>
         <h2>What is DOM?</h2>
         <p>
            DOM in React Js | What is DOM | DOM structure | What is Logical Tree like Structure | What is nodes?
            Dom full form is document Object Model The browser construct a logical tree like structure from HTML to show the user on request in Client Side Means when user request any page browser construct a logical tree like structure from HTML code.
            This tree like structure is called DOM.
            1) Dom is an interface so that JavaScript and other programming languages can programmatically interact , manipulate can access with document content.
            2) Dom is cross platform (various operating systems or devices) and language independent.
            3) Dom nodes are HTML tages.
         </p>
    </div>
   )
}

export default MainContent;