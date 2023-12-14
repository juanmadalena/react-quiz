export const quizes = [
  {
      id:0,
      title: 'General Quiz',
      questions: [
        {
          question: 'How can a datatype be declared to be a constant type?',
          choices: [ 'const', 'var', 'let', 'constant' ],
          correctAnswer: 'Y29uc3Q='
        },
        {
          question: 'Which of the following is not a feature of React?',
          choices: [ 'Components', 'v-if Directives', 'State', 'JSX' ],
          correctAnswer: 'di1pZiBEaXJlY3RpdmVz'
        },
        {
          question: 'What is the name of the built-in state management system in React?',
          choices: [ 'Redux', 'Context API', 'useState', 'State Manager' ],
          correctAnswer: 'dXNlU3RhdGU='
        },
        {
          question: 'Which React hook is used for side effects in functional components?',
          choices: [ 'useEffect', 'useFetch', 'useLifecycle', 'useSideEffect' ],
          correctAnswer: 'dXNlRWZmZWN0'
        },
        {
          question: 'What is the main purpose of React Router?',
          choices: [
            'Handle global state',
            'Manage routes in the application',
            'Optimize performance',
            'Manipulate the DOM'
          ],
          correctAnswer: 'TWFuYWdlIHJvdXRlcyBpbiB0aGUgYXBwbGljYXRpb24='
        },
        {
          question: 'Where is the initial state defined in a React class component?',
          choices: [
            'In the render() method',
            'In the constructor() method',
            'In the componentDidMount() method',
            'In the componentWillMount() method'
          ],
          correctAnswer: 'SW4gdGhlIGNvbnN0cnVjdG9yKCkgbWV0aG9k'
        },
        {
          question: 'What is the purpose of the map() function in React?',
          choices: [
            'Create a copy of the array',
            'Iterate over array elements and render them',
            'Filter array elements',
            'Modify array elements'
          ],
          correctAnswer: 'SXRlcmF0ZSBvdmVyIGFycmF5IGVsZW1lbnRzIGFuZCByZW5kZXIgdGhlbQ=='
        },
        {
          question: 'How is information passed from a parent component to a child component in React?',
          choices: [
            'Through props',
            'Through state',
            'Through context',
            'Through refs'
          ],
          correctAnswer: 'VGhyb3VnaCBwcm9wcw=='
        },
        {
          question: 'Which method is used to update state in a React class component?',
          choices: [ 'setState()', 'updateState()', 'changeState()', 'modifyState()' ],
          correctAnswer: 'c2V0U3RhdGUoKQ=='
        },
        {
          question: 'What is the function of the React DOM library?',
          choices: [
            'Handle global state',
            'Render components in the browser',
            'Manage routes in the application',
            'Optimize performance'
          ],
          correctAnswer: 'UmVuZGVyIGNvbXBvbmVudHMgaW4gdGhlIGJyb3dzZXI='
        }
      ]
    },
    {
      id:1,
      title: 'JSX',
      questions: [
        {
          question: 'What does JSX stand for in React?',
          choices: [ 'JavaScript XML', 'Java XML', 'JSON XML', 'JS XML' ],
          correctAnswer: 'SmF2YVNjcmlwdCBYTUw='
        },
        {
          question: 'How do you render a component in JSX?',
          choices: [
            '<Component />',
            'render(Component)',
            'React.render(Component)',
            'componente.render()'
          ],
          correctAnswer: 'PENvbXBvbmVudCAvPg=='
        },
        {
          question: 'What is the correct way to insert a variable in JSX?',
          choices: [ '{variable}', '<variable>', '${variable}', '(${variable})' ],
          correctAnswer: 'e3ZhcmlhYmxlfQ=='
        },
        {
          question: 'How do you comment in JSX?',
          choices: [
            '// This is a comment',
            '<!-- This is a comment -->',
            '{/* This is a comment */}',
            '/* This is a comment */'
          ],
          correctAnswer: 'ey8qIFRoaXMgaXMgYSBjb21tZW50ICovfQ=='
        },
        {
          question: 'What is the main function of Babel in the context of JSX?',
          choices: [
            'Handle state',
            'Transpile JSX to JavaScript',
            'Optimize performance',
            'Generate CSS styles'
          ],
          correctAnswer: 'VHJhbnNwaWxlIEpTWCB0byBKYXZhU2NyaXB0'
        },
        {
          question: 'How do you style a component in JSX?',
          choices: [
            'Using the style property with a styles object',
            'Including styles directly in the component',
            'Applying CSS classes with the className property',
            'All of the above'
          ],
          correctAnswer: 'VXNpbmcgdGhlIHN0eWxlIHByb3BlcnR5IHdpdGggYSBzdHlsZXMgb2JqZWN0'
        },
        {
          question: 'What does JSX.Fragment represent?',
          choices: [
            'A data type in React',
            'A function for code fragments',
            'A way to group multiple elements without a parent node',
            'A method for string fragmentation'
          ],
          correctAnswer: 'QSB3YXkgdG8gZ3JvdXAgbXVsdGlwbGUgZWxlbWVudHMgd2l0aG91dCBhIHBhcmVudCBub2Rl'
        },
        {
          question: 'How do you render lists in JSX?',
          choices: [
            'Using the <list> tag',
            'Using the map() function to iterate over elements',
            'With the items property of the <ul> tag',
            'None of the above'
          ],
          correctAnswer: 'VXNpbmcgdGhlIG1hcCgpIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBlbGVtZW50cw=='
        },
        {
          question: "What does the following JSX expression do: {variable ? 'True' : 'False'}?",
          choices: [
            'Creates an if-else condition in JSX',
            'Renders the value of the variable',
            'Handles click events in the component',
            'Defines component properties'
          ],
          correctAnswer: 'Q3JlYXRlcyBhbiBpZi1lbHNlIGNvbmRpdGlvbiBpbiBKU1g='
        },
        {
          question: 'What is the correct way to pass props in JSX?',
          choices: [
            '<Component props={myProps} />',
            '<Component myProps />',
            '<Component {...myProps} />',
            '<Component props={myProps}></Component>'
          ],
          correctAnswer: 'PENvbXBvbmVudCB7Li4ubXlQcm9wc30gLz4='
        }
      ]
    },
    {
      id:2,
      title: 'User Clicks',
      questions:[
        {
          question: 'How do you handle a click event in React?',
          choices: [
            'onClick={() => handleEvent()}',
            'onEvent={handleClick}',
            'handleClick={() => onClick()}',
            'eventHandler=handleClick'
          ],
          correctAnswer: 'b25DbGljaz17KCkgPT4gaGFuZGxlRXZlbnQoKX0='
        },
        {
          question: 'What property provides information about the clicked element in a click event?',
          choices: [
            'targetElement',
            'clickedElement',
            'event.target',
            'elementInfo'
          ],
          correctAnswer: 'ZXZlbnQudGFyZ2V0'
        },
        {
          question: 'How can you prevent the default behavior of a click event in React?',
          choices: [
            'event.preventClickDefault()',
            'event.preventPropagation()',
            'event.preventDefault()',
            'event.stopDefault()'
          ],
          correctAnswer: 'ZXZlbnQucHJldmVudERlZmF1bHQoKQ=='
        },
        {
          question: 'What is the purpose of the synthetic event in React?',
          choices: [
            'To simulate user interactions',
            'To replace native browser events',
            'To prevent event bubbling',
            'To handle asynchronous events'
          ],
          correctAnswer: 'VG8gc2ltdWxhdGUgdXNlciBpbnRlcmFjdGlvbnM='
        },
        {
          question: 'How do you pass additional data to an event handler in React?',
          choices: [
            'event.data',
            'event.info',
            'event.payload',
            'event.currentTarget.dataset'
          ],
          correctAnswer: 'ZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0'
        },
        {
          question: 'Which method is used to remove an event listener in React?',
          choices: [ 'removeEventListener', 'detachEvent', 'off', 'removeEvent' ],
          correctAnswer: 'cmVtb3ZlRXZlbnRMaXN0ZW5lcg=='
        },
        {
          question: 'What is event delegation in React?',
          choices: [
            'Delegating events to child components',
            'Handling events at the top level and relying on event bubbling',
            'Delegating events to parent components',
            'Dispatching events to multiple listeners'
          ],
          correctAnswer: 'SGFuZGxpbmcgZXZlbnRzIGF0IHRoZSB0b3AgbGV2ZWwgYW5kIHJlbHlpbmcgb24gZXZlbnQgYnViYmxpbmc='
        },
        {
          question: 'How do you conditionally handle a click event based on a certain condition?',
          choices: [
            'onClick={handleClick && condition}',
            'onClick={condition ? handleClick : null}',
            'if (condition) { handleClick() }',
            'handleClick(when: condition)'
          ],
          correctAnswer: 'b25DbGljaz17Y29uZGl0aW9uID8gaGFuZGxlQ2xpY2sgOiBudWxsfQ=='
        },
        {
          question: 'What is the purpose of the e.persist() method in React?',
          choices: [
            'To persist the event object',
            'To prevent event propagation',
            'To remove the event listener',
            'To simulate a persistent event'
          ],
          correctAnswer: 'VG8gcGVyc2lzdCB0aGUgZXZlbnQgb2JqZWN0'
        },
        {
          question: 'How do you handle right-click events in React?',
          choices: [
            'onRightClick={handleEvent}',
            'onClick={handleEvent} onContextMenu={handleContextMenu}',
            'onContextMenu={handleEvent}',
            'onMouseRightClick={handleEvent}'
          ],
          correctAnswer: 'b25Db250ZXh0TWVudT17aGFuZGxlRXZlbnR9'
        }
      ]
    },
    {
      id:3,
      title: 'UseEffect Hook',
      questions: [
        {
          question: 'What is the primary purpose of the useEffect hook in React?',
          choices: [
            'Handling form submissions',
            'Fetching data from a server',
            'Managing side effects in functional components',
            'Defining event listeners'
          ],
          correctAnswer: 'TWFuYWdpbmcgc2lkZSBlZmZlY3RzIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50cw=='
        },
        {
          question: 'When does the useEffect hook run?',
          choices: [
            'Only on component mount',
            'On every render',
            'Only on component update',
            'On component unmount'
          ],
          correctAnswer: 'T24gZXZlcnkgcmVuZGVy'
        },
        {
          question: 'How do you conditionally run useEffect in React?',
          choices: [
            'Use if statements inside useEffect',
            'Pass a condition as the second argument to useEffect',
            'Wrap useEffect in a conditional statement',
            'Use useEffect(condition, effect)'
          ],
          correctAnswer: 'UGFzcyBhIGNvbmRpdGlvbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHVzZUVmZmVjdA=='
        },
        {
          question: 'What is the purpose of the cleanup function in useEffect?',
          choices: [
            'To clean up memory leaks',
            'To unsubscribe from subscriptions',
            'To cancel network requests',
            'All of the above'
          ],
          correctAnswer: 'QWxsIG9mIHRoZSBhYm92ZQ=='
        },
        {
          question: 'How do you perform cleanup in useEffect?',
          choices: [
            'Using the cleanup prop in useEffect',
            'Returning a function from useEffect',
            'Calling a separate cleanup function',
            'Using a special useEffectCleanup hook'
          ],
          correctAnswer: 'UmV0dXJuaW5nIGEgZnVuY3Rpb24gZnJvbSB1c2VFZmZlY3Q='
        },
        {
          question: 'What is the second argument of useEffect used for?',
          choices: [
            'Defining dependencies for the effect',
            'Setting a timeout for the effect',
            'Specifying the order of execution',
            'Configuring the cleanup behavior'
          ],
          correctAnswer: 'RGVmaW5pbmcgZGVwZW5kZW5jaWVzIGZvciB0aGUgZWZmZWN0'
        },
        {
          question: 'How do you fetch data with useEffect?',
          choices: [
            'Use the fetch() function directly in useEffect',
            'Call an asynchronous function inside useEffect',
            'Create a separate fetchData() function and call it in useEffect',
            'Use the axios library for data fetching'
          ],
          correctAnswer: 'Q2FsbCBhbiBhc3luY2hyb25vdXMgZnVuY3Rpb24gaW5zaWRlIHVzZUVmZmVjdA=='
        },
        {
          question: 'What happens if you omit the second argument in useEffect?',
          choices: [
            'The effect runs only once',
            'The effect runs on every render',
            'The effect never runs',
            'An error is thrown'
          ],
          correctAnswer: 'VGhlIGVmZmVjdCBydW5zIG9uIGV2ZXJ5IHJlbmRlcg=='
        },
        {
          question: 'How do you handle cleanup for subscriptions in useEffect?',
          choices: [
            'Manually unsubscribe in the cleanup function',
            'Use the unsubscribe() method provided by subscriptions',
            'React automatically handles subscription cleanup',
            'There is no need for cleanup with subscriptions'
          ],
          correctAnswer: 'TWFudWFsbHkgdW5zdWJzY3JpYmUgaW4gdGhlIGNsZWFudXAgZnVuY3Rpb24='
        },
        {
          question: 'What is the purpose of the empty dependency array [] in useEffect?',
          choices: [
            'To specify no dependencies for the effect',
            'To run the effect only once',
            'To indicate that the effect has no cleanup',
            'To avoid linting warnings'
          ],
          correctAnswer: 'VG8gc3BlY2lmeSBubyBkZXBlbmRlbmNpZXMgZm9yIHRoZSBlZmZlY3Q='
        }
      ]
    },
    {
      id:4,
      title: 'UseState Hook',
      questions: [
        {
          question: 'What is the primary purpose of the useState hook in React?',
          choices: [
            'Handling side effects',
            'Managing state in functional components',
            'Creating event listeners',
            'Fetching data from a server'
          ],
          correctAnswer: 'TWFuYWdpbmcgc3RhdGUgaW4gZnVuY3Rpb25hbCBjb21wb25lbnRz'
        },
        {
          question: 'How do you use the useState hook to declare state in a functional component?',
          choices: [
            'const [state, setState] = useState;',
            'const state = useState();',
            'const { state, setState } = useState();',
            'const [state, setState] = useState(initialValue);'
          ],
          correctAnswer: 'Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpOw=='
        },
        {
          question: 'What does the first element in the array returned by useState represent?',
          choices: [
            'The current state value',
            'A function to update the state',
            'The initial state value',
            'The component props'
          ],
          correctAnswer: 'VGhlIGN1cnJlbnQgc3RhdGUgdmFsdWU='
        },
        {
          question: 'How do you update state using the setState function in useState?',
          choices: [
            'setState(newValue);',
            'setState = newValue;',
            'setState(() => newValue);',
            'setState(prevState => newValue);'
          ],
          correctAnswer: 'c2V0U3RhdGUobmV3VmFsdWUpOw=='
        },
        {
          question: 'What is the purpose of the initial value passed to useState?',
          choices: [
            'To define the default state value',
            'To specify the type of state',
            'To create a constant state',
            'It is optional and can be omitted'
          ],
          correctAnswer: 'VG8gZGVmaW5lIHRoZSBkZWZhdWx0IHN0YXRlIHZhbHVl'
        },
        {
          question: 'Can you use the useState hook more than once in a single component?',
          choices: [
            'Yes, but only for different types of state',
            'No, useState can only be used once per component',
            'Yes, you can use it as many times as needed',
            'Yes, but it must be in separate custom hooks'
          ],
          correctAnswer: 'WWVzLCB5b3UgY2FuIHVzZSBpdCBhcyBtYW55IHRpbWVzIGFzIG5lZWRlZA=='
        },
        {
          question: 'What is the alternative syntax for destructuring the array returned by useState?',
          choices: [
            'const [state, setState] = useState();',
            'const state = useState()[0]; const setState = useState()[1];',
            'const { state, setState } = useState();',
            'const state = useState(); const setState = state[1];'
          ],
          correctAnswer: 'Y29uc3QgeyBzdGF0ZSwgc2V0U3RhdGUgfSA9IHVzZVN0YXRlKCk7'
        },
        {
          question: 'When should you use the useState hook instead of class component state?',
          choices: [
            'In all cases',
            'When the component has complex logic',
            'When the component needs lifecycle methods',
            'When the component needs to access props'
          ],
          correctAnswer: 'SW4gYWxsIGNhc2Vz'
        },
        {
          question: 'What is the key advantage of using the useState hook?',
          choices: [
            'It provides better performance',
            'It simplifies state management in functional components',
            'It automatically handles asynchronous updates',
            'It eliminates the need for the render method'
          ],
          correctAnswer: 'SXQgc2ltcGxpZmllcyBzdGF0ZSBtYW5hZ2VtZW50IGluIGZ1bmN0aW9uYWwgY29tcG9uZW50cw=='
        },
        {
          question: 'How do you handle multiple state variables with the useState hook?',
          choices: [
            'Use multiple instances of useState',
            'Use a single object for all state variables',
            'Combine state variables into a single array',
            'Use a custom hook for each state variable'
          ],
          correctAnswer: 'VXNlIG11bHRpcGxlIGluc3RhbmNlcyBvZiB1c2VTdGF0ZQ=='
        }
      ]
    },
    {
      id:5,
      title: 'React Router',
      questions: [
        {
          question: 'What is the purpose of React Router in a React application?',
          choices: [
            'To manage state',
            'To handle HTTP requests',
            'To navigate between different views/components',
            'To create animations'
          ],
          correctAnswer: 'VG8gbmF2aWdhdGUgYmV0d2VlbiBkaWZmZXJlbnQgdmlld3MvY29tcG9uZW50cw=='
        },
        {
          question: 'Which React Router component is used to define routes?',
          choices: [ '<Router />', '<Route />', '<Link />', '<Switch />' ],
          correctAnswer: 'PFJvdXRlIC8+'
        },
        {
          question: 'How do you render a component for a specific route using React Router?',
          choices: [
            "<Route path='/component' component={Component} />",
            "<RenderRoute path='/component' component={Component} />",
            "<Link to='/component' component={Component} />",
            "<NavigateRoute path='/component' component={Component} />"
          ],
          correctAnswer: 'PFJvdXRlIHBhdGg9Jy9jb21wb25lbnQnIGNvbXBvbmVudD17Q29tcG9uZW50fSAvPg=='
        },
        {
          question: "What is the purpose of the 'exact' prop in React Router?",
          choices: [
            'To match the route exactly without considering nested routes',
            'To specify the exact URL path for the component',
            'To prevent route matching',
            'To ensure that the route is not a wildcard'
          ],
          correctAnswer: 'VG8gbWF0Y2ggdGhlIHJvdXRlIGV4YWN0bHkgd2l0aG91dCBjb25zaWRlcmluZyBuZXN0ZWQgcm91dGVz'
        },
        {
          question: 'How do you create a link to navigate between routes in React Router?',
          choices: [
            "<Navigate to='/new-route' />",
            "<a href='/new-route'>Go to New Route</a>",
            "<SwitchRoute to='/new-route' />",
            "<Link to='/new-route'>Go to New Route</Link>"
          ],
          correctAnswer: 'PExpbmsgdG89Jy9uZXctcm91dGUnPkdvIHRvIE5ldyBSb3V0ZTwvTGluaz4='
        },
        {
          question: 'Which React Router component is used to conditionally render routes?',
          choices: [
            '<ConditionalRoute />',
            '<Switch />',
            '<IfRoute />',
            '<RenderRoute />'
          ],
          correctAnswer: 'PFN3aXRjaCAvPg=='
        },
        {
          question: 'How do you pass parameters to a route using React Router?',
          choices: [
            "<Route path='/user/:id' component={User} />",
            "<Route path='/user/{id}' component={User} />",
            "<Route path='/user/' param=id component={User} />",
            "<Route path='/user/' component={User(id)} />"
          ],
          correctAnswer: 'PFJvdXRlIHBhdGg9Jy91c2VyLzppZCcgY29tcG9uZW50PXtVc2VyfSAvPg=='
        },
        {
          question: 'What does the useHistory hook in React Router provide?',
          choices: [
            "Access to the browser's history object",
            'Access to route parameters',
            'Access to the current route path',
            "Access to the router's configuration"
          ],
          correctAnswer: 'QWNjZXNzIHRvIHRoZSBicm93c2VyJ3MgaGlzdG9yeSBvYmplY3Q='
        },
        {
          question: 'How do you perform programmatic navigation in React Router?',
          choices: [
            'Use the <Navigate /> component',
            'Use the window.location object',
            'Use the <Link /> component with an onClick handler',
            'Use the useHistory hook'
          ],
          correctAnswer: 'VXNlIHRoZSB1c2VIaXN0b3J5IGhvb2s='
        },
        {
          question: "Which component is used to handle '404 Not Found' scenarios in React Router?",
          choices: [
            '<NotFound />',
            '<ErrorRoute />',
            "<Route path='*' component={NotFound} />",
            "<SwitchRoute path='*' component={NotFound} />"
          ],
          correctAnswer: 'PFJvdXRlIHBhdGg9JyonIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+'
        }
      ]
    },
    {
      id:6,
      title: 'Components and Props',
      questions: [
        {
          question: 'What is the primary purpose of React components?',
          choices: [
            'To manage state',
            'To structure the user interface',
            'To handle HTTP requests',
            'To create animations'
          ],
          correctAnswer: 'VG8gc3RydWN0dXJlIHRoZSB1c2VyIGludGVyZmFjZQ=='
        },
        {
          question: 'How do you define a functional component in React?',
          choices: [
            'class MyComponent extends React.Component',
            'function MyComponent() {}',
            'const MyComponent = React.createFunctionComponent',
            'const MyComponent = new React.FunctionComponent'
          ],
          correctAnswer: 'ZnVuY3Rpb24gTXlDb21wb25lbnQoKSB7fQ=='
        },
        {
          question: 'What is the purpose of props in React components?',
          choices: [
            'To define initial state',
            'To store component methods',
            'To pass data from parent to child components',
            'To handle component events'
          ],
          correctAnswer: 'VG8gcGFzcyBkYXRhIGZyb20gcGFyZW50IHRvIGNoaWxkIGNvbXBvbmVudHM='
        },
        {
          question: 'How do you pass props to a component in JSX?',
          choices: [
            '<MyComponent props={myProps} />',
            '<MyComponent myProps />',
            '<MyComponent {...myProps} />',
            '<MyComponent props={myProps}></MyComponent>'
          ],
          correctAnswer: 'PE15Q29tcG9uZW50IHsuLi5teVByb3BzfSAvPg=='
        },
        {
          question: 'Can you modify the value of props directly within a component?',
          choices: [
            'Yes, it is a common practice',
            'Yes, but it is considered bad practice',
            'No, props are immutable',
            'No, props can only be modified by parent components'
          ],
          correctAnswer: 'Tm8sIHByb3BzIGFyZSBpbW11dGFibGU='
        },
        {
          question: 'What is the purpose of the children prop in React components?',
          choices: [
            'To define child components',
            'To access child elements between component tags',
            'To pass data from child to parent components',
            'To specify default values for props'
          ],
          correctAnswer: 'VG8gYWNjZXNzIGNoaWxkIGVsZW1lbnRzIGJldHdlZW4gY29tcG9uZW50IHRhZ3M='
        },
        {
          question: 'How do you access props in a functional component?',
          choices: [ 'this.props', 'props', 'component.props', 'function.props' ],
          correctAnswer: 'cHJvcHM='
        },
        {
          question: 'What is the purpose of defaultProps in React components?',
          choices: [
            'To set default values for component state',
            'To provide default values for props',
            'To define default behavior for component methods',
            'To specify default styling for components'
          ],
          correctAnswer: 'VG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgcHJvcHM='
        },
        {
          question: 'How do you define PropTypes for props validation in React?',
          choices: [
            'propTypes: { ... }',
            'React.PropTypes = { ... }',
            'static propTypes = { ... }',
            'PropTypes = { ... }'
          ],
          correctAnswer: 'TXlDb21wb25lbnQucHJvcFR5cGVzID0geyAuLi4gfQ=='
        },
        {
          question: 'What is the purpose of React.Fragment?',
          choices: [
            'To define custom fragments for components',
            'To create reusable fragments of JSX',
            'To avoid adding unnecessary div elements when rendering multiple components',
            'To handle asynchronous rendering in React'
          ],
          correctAnswer: 'VG8gYXZvaWQgYWRkaW5nIHVubmVjZXNzYXJ5IGRpdiBlbGVtZW50cyB3aGVuIHJlbmRlcmluZyBtdWx0aXBsZSBjb21wb25lbnRz'
        }
      ]
    },
    {
      id:7,
      title: 'Functional Components',
      questions: [
        {
          question: 'What is a functional component in React?',
          choices: [
            'A component written in functional programming style',
            'A component that uses only functions and no classes',
            'A component that handles side effects',
            'A component with only visual elements'
          ],
          correctAnswer: 'QSBjb21wb25lbnQgdGhhdCB1c2VzIG9ubHkgZnVuY3Rpb25zIGFuZCBubyBjbGFzc2Vz'
        },
        {
          question: 'How do you define a functional component in React?',
          choices: [
            'class MyComponent extends React.FunctionComponent',
            'function MyComponent() {}',
            'const MyComponent = React.createFunctionalComponent',
            'const MyComponent = new React.Component'
          ],
          correctAnswer: 'ZnVuY3Rpb24gTXlDb21wb25lbnQoKSB7fQ=='
        },
        {
          question: 'What is the primary benefit of using functional components?',
          choices: [
            'They provide better performance',
            'They simplify state management',
            'They allow the use of lifecycle methods',
            'They enable more complex logic'
          ],
          correctAnswer: 'VGhleSBzaW1wbGlmeSBzdGF0ZSBtYW5hZ2VtZW50'
        },
        {
          question: 'Can functional components have state in React?',
          choices: [
            'Yes, but state is handled differently than in class components',
            'No, functional components cannot have state',
            'Yes, state is managed in the same way as in class components',
            'Yes, but only when using Redux'
          ],
          correctAnswer: 'WWVzLCBidXQgc3RhdGUgaXMgaGFuZGxlZCBkaWZmZXJlbnRseSB0aGFuIGluIGNsYXNzIGNvbXBvbmVudHM='
        },
        {
          question: 'How do you handle lifecycle events in functional components?',
          choices: [
            'Use special lifecycle functions for functional components',
            'Use the useEffect hook',
            'Lifecycle events are not applicable to functional components',
            'Functional components do not support lifecycle events'
          ],
          correctAnswer: 'VXNlIHRoZSB1c2VFZmZlY3QgaG9vaw=='
        },
        {
          question: 'What is the purpose of the `useState` hook in functional components?',
          choices: [
            'To define the initial state of the component',
            'To manage state in functional components',
            'To create event handlers',
            'To handle HTTP requests'
          ],
          correctAnswer: 'VG8gbWFuYWdlIHN0YXRlIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50cw=='
        },
        {
          question: 'How do you pass props to functional components?',
          choices: [
            'Use the this.props syntax',
            'Props are automatically available in functional components',
            'Use the props argument in the function signature',
            'Use the props() function'
          ],
          correctAnswer: 'VXNlIHRoZSBwcm9wcyBhcmd1bWVudCBpbiB0aGUgZnVuY3Rpb24gc2lnbmF0dXJl'
        },
        {
          question: 'What is the purpose of the `memo` function in React functional components?',
          choices: [
            'To create higher-order components',
            'To memoize the results of expensive computations',
            'To define default props for functional components',
            'To manage state updates in functional components'
          ],
          correctAnswer: 'VG8gbWVtb2l6ZSB0aGUgcmVzdWx0cyBvZiBleHBlbnNpdmUgY29tcHV0YXRpb25z'
        },
        {
          question: 'How do you handle side effects in functional components?',
          choices: [
            'Use the componentWillMount method',
            'Side effects are not applicable to functional components',
            'Use the useEffect hook',
            'Define side effects directly in the render method'
          ],
          correctAnswer: 'VXNlIHRoZSB1c2VFZmZlY3QgaG9vaw=='
        },
        {
          question: 'What is the primary limitation of functional components compared to class components?',
          choices: [
            'They are less performant',
            'They cannot have state',
            'They lack support for lifecycle methods',
            'They cannot handle side effects'
          ],
          correctAnswer: 'VGhleSBjYW5ub3QgaGFuZGxlIHNpZGUgZWZmZWN0cw=='
        }
      ]      
    },
    {
      id:8,
      title: 'SPA with React',
      questions: [
        {
          question: 'What does SPA stand for in the context of web development?',
          choices: [
            'Server Page Application',
            'Single Page Application',
            'Static Page Application',
            'Stateful Page Application'
          ],
          correctAnswer: 'U2luZ2xlIFBhZ2UgQXBwbGljYXRpb24='
        },
        {
          question: 'What is the key characteristic of a Single Page Application (SPA)?',
          choices: [
            'It uses only one HTML file',
            'It has a single route for all pages',
            'It loads all content on a single page dynamically',
            'It has a single component for the entire application'
          ],
          correctAnswer: 'SXQgbG9hZHMgYWxsIGNvbnRlbnQgb24gYSBzaW5nbGUgcGFnZSBkeW5hbWljYWxseQ=='
        },
        {
          question: 'How does React contribute to building SPAs?',
          choices: [
            'React is not suitable for building SPAs',
            'React provides a router for managing routes',
            'React is used only for styling in SPAs',
            'React is used for server-side rendering in SPAs'
          ],
          correctAnswer: 'UmVhY3QgcHJvdmlkZXMgYSByb3V0ZXIgZm9yIG1hbmFnaW5nIHJvdXRlcw=='
        },
        {
          question: 'What is React Router used for in a Single Page Application?',
          choices: [
            'Handling server-side routing',
            'Handling client-side routing',
            'Handling HTTP requests',
            'Handling state management'
          ],
          correctAnswer: 'SGFuZGxpbmcgY2xpZW50LXNpZGUgcm91dGluZw=='
        },
        {
          question: 'How do you implement client-side routing in React with React Router?',
          choices: [
            'Using <a> tags with href attributes',
            'Using the BrowserRouter component',
            'Client-side routing is not possible in React',
            'Using only server-side routing'
          ],
          correctAnswer: 'VXNpbmcgdGhlIEJyb3dzZXJSb3V0ZXIgY29tcG9uZW50'
        },
        {
          question: 'What is a benefit of client-side routing in a SPA?',
          choices: [
            'Improved server performance',
            'Faster navigation between pages',
            'Simplified client logic',
            'Elimination of the need for a database'
          ],
          correctAnswer: 'RmFzdGVyIG5hdmlnYXRpb24gYmV0d2VlbiBwYWdlcw=='
        },
        {
          question: 'How do you define routes in a React application using React Router?',
          choices: [
            'Using the <Link /> component',
            'Using the <Route /> component',
            'Using the <Redirect /> component',
            'Routes are defined automatically based on component names'
          ],
          correctAnswer: 'VXNpbmcgdGhlIDxSb3V0ZSAvPiBjb21wb25lbnQ='
        },
        {
          question: 'What is the purpose of the `exact` prop in a React Route?',
          choices: [
            'To match the route exactly without considering nested routes',
            'To specify the exact URL path for the component',
            'To prevent route matching',
            'To ensure that the route is not a wildcard'
          ],
          correctAnswer: 'VG8gbWF0Y2ggdGhlIHJvdXRlIGV4YWN0bHkgd2l0aG91dCBjb25zaWRlcmluZyBuZXN0ZWQgcm91dGVz'
        },
        {
          question: "How can you handle '404 Not Found' scenarios in a SPA with React Router?",
          choices: [
            'Use a server-side route',
            "Define a special 'NotFound' component with a wildcard route",
            '404 errors are not applicable to SPAs',
            'Use the <ErrorBoundary /> component'
          ],
          correctAnswer: 'RGVmaW5lIGEgc3BlY2lhbCAnTm90Rm91bmQnIGNvbXBvbmVudCB3aXRoIGEgd2lsZGNhcmQgcm91dGU='
        },
        {
          question: 'What is the benefit of lazy loading components in a SPA?',
          choices: [
            'Reduced initial page load time',
            'Increased server-side rendering',
            'Improved server performance',
            'Elimination of the need for a router'
          ],
          correctAnswer: 'UmVkdWNlZCBpbml0aWFsIHBhZ2UgbG9hZCB0aW1l'
        }
      ],  
    },
    {
      id:9,
      title: 'Forms Handling',
      questions: [
        {
          question: 'What is the purpose of forms in web development?',
          choices: [
            'To structure HTML documents',
            'To apply styling to web pages',
            'To handle user input and collect data',
            'To define routing in a Single Page Application'
          ],
          correctAnswer: 'VG8gaGFuZGxlIHVzZXIgaW5wdXQgYW5kIGNvbGxlY3QgZGF0YQ=='
        },
        {
          question: 'How do you handle forms in React?',
          choices: [
            'Use only HTML forms without React',
            'Use the `form` element in React without additional handling',
            'Use the `useState` hook and event handlers to manage form data',
            'Forms cannot be handled in React'
          ],
          correctAnswer: 'VXNlIHRoZSBgdXNlU3RhdGVgIGhvb2sgYW5kIGV2ZW50IGhhbmRsZXJzIHRvIG1hbmFnZSBmb3JtIGRhdGE='
        },
        {
          question: 'What is the purpose of the `onChange` event in a form input element?',
          choices: [
            'To trigger the form submission',
            'To handle changes in input values',
            'To validate form data',
            'To reset the form'
          ],
          correctAnswer: 'VG8gaGFuZGxlIGNoYW5nZXMgaW4gaW5wdXQgdmFsdWVz'
        },
        {
          question: 'How do you prevent the default behavior of a form submission in React?',
          choices: [
            'Use the `e.preventDefault()` method in the form element',
            'Forms in React do not have default behavior',
            'Use the `onSubmit` event with a callback function',
            'Disable the submit button'
          ],
          correctAnswer: 'VXNlIHRoZSBgZS5wcmV2ZW50RGVmYXVsdCgpYCBtZXRob2QgaW4gdGhlIGZvcm0gZWxlbWVudA=='
        },
        {
          question: 'What is controlled form input in React?',
          choices: [
            'Forms that are difficult to control',
            'Forms that use uncontrolled components',
            'Forms where React controls the input value',
            'Forms with no input validation'
          ],
          correctAnswer: 'Rm9ybXMgd2hlcmUgUmVhY3QgY29udHJvbHMgdGhlIGlucHV0IHZhbHVl'
        },
        {
          question: 'How do you handle the value of an input field in a controlled form?',
          choices: [
            'Use the `defaultValue` prop',
            'Use the `value` prop and update it with the `onChange` event',
            'Forms in React do not require handling input values',
            'Use the `state` variable directly'
          ],
          correctAnswer: 'VXNlIHRoZSBgdmFsdWVgIHByb3AgYW5kIHVwZGF0ZSBpdCB3aXRoIHRoZSBgb25DaGFuZ2VgIGV2ZW50'
        },
        {
          question: 'What is the purpose of the `onSubmit` event in a form?',
          choices: [
            'To handle input changes',
            'To validate form data',
            'To reset the form',
            'To handle the form submission'
          ],
          correctAnswer: 'VG8gaGFuZGxlIHRoZSBmb3JtIHN1Ym1pc3Npb24='
        },
        {
          question: 'How do you handle form submissions in React?',
          choices: [
            'Use the `submit` event in the form element',
            'Use the `onSubmit` event with a callback function',
            'Call the `submitForm` method directly',
            'Use the `handleChange` event'
          ],
          correctAnswer: 'VXNlIHRoZSBgb25TdWJtaXRgIGV2ZW50IHdpdGggYSBjYWxsYmFjayBmdW5jdGlvbg=='
        },
        {
          question: 'What is the purpose of the `reset` event in a form?',
          choices: [
            'To validate form data',
            'To clear input values',
            'To submit the form',
            'To trigger the `onSubmit` event'
          ],
          correctAnswer: 'VG8gY2xlYXIgaW5wdXQgdmFsdWVz'
        },
        {
          question: 'How do you handle form resets in React?',
          choices: [
            'Use the `reset` event in the form element',
            'Use the `onReset` event with a callback function',
      'Call the `resetForm` method directly',
            'Use the `onChange` event'
          ],
          correctAnswer: 'VXNlIHRoZSBgb25SZXNldGAgZXZlbnQgd2l0aCBhIGNhbGxiYWNrIGZ1bmN0aW9u'
        }
      ],
    }
]