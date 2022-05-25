import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 w-1/2 mx-auto my-5 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p>React is a free and open-source front-end javascript Library. React is used for building user Inter faces based on UI components. We can improve the performance of a React Application by using immutable data structures, avoiding inline function definition in the render function, spreading props on DOM elements, throttling and Debouncing Event Action in JavaScript, Using Reselect in redux to avoid frequent Re-render and also memoising React Components.</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 w-1/2 mx-auto my-5 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p>React is a free and open-source front-end javascript Library. React is used for building user Inter faces based on UI components. There are four types of states to manage a state in React application. There is a Local state, Global state, Server state and URL state. The local state is most often managed in React using the useState hook. The global state is that data which we manage across multiple components. The Server state is a simple concept but can be hard to manage alongside all of our local and global UI states. URL state is often missing as a category of state, but it is an important one.</p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 w-1/2 mx-auto my-5 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties to objects. Inheritance solves the problem of data and logic duplication. By inheriting, objects can share properties and methods.</p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 w-1/2 mx-auto my-5 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>Unit testing is a type of software testing where individual units or components of a software are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 w-1/2 mx-auto my-5 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div class="collapse-content">
                    <p>It's obvious from the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won't be able to see that there is a change of the state and so it won't be reflected in the original DOM until we reload. The problem is more obvious when we extend a component with React.PureComponent instead of where React tries to optimize some time by not rendering components if no changes are found. Also, mutating the state directly can lead to odd bugs and components that are hard to optimize.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;