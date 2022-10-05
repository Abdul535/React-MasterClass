
/*
JSX Rules:
    1. its should be closing if not self closing tag
    2. if we need js then wrap with {}
    3. we can assign html tags to variables
    4. every component should be returning only one element
*/
//-------------------------------------------------
ReactDOM.render(<h1>Hello</h1>,document.getElementById('root'))

//-------------------------------------------------
//Function Components
//function
function fun(){
    return (
        <h1>I am from Function {2+2}</h1>
    )
}

//arrow functions
let arrow = () =>{
    return(
        <div> 
            <h1>I am from Arrow Function</h1>
            <h1>I am from Arrow Function</h1>
            <p>hello i am para</p>
        </div>
    )
}

//-------------------------------------------------
//class Components
class Bello extends React.Component{
    render(){
        return(
            <h1>I am from Class</h1>
        )
    }
}

//-------------------------------------------------
//variable
let Hello = <h1>I am from Variable</h1>

//-------------------------------------------------
//Babel is converting below JSX to JS
// :before

// let Hello = <h1>I am from Variable</h1>  //JSX

// :after
// let data = {
//     "type":"h1",
//     "key":null,
//     "ref":null,
//     "props":{"children":"I am from Variable"},
//     "_owner":null,
//     "_store":{}
// }

// document.getElementById("root").append(JSON.stringify(Hello));

//-------------------------------------------------
//without using JSX writing React Code
// let arrowInPure = () => {
//   return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "I am from Arrow Function"), /*#__PURE__*/React.createElement("h1", null, "I am from Arrow Function"), /*#__PURE__*/React.createElement("p", null, "hello i am para"));
// };

// ReactDOM.render(arrowInPure(),document.getElementById('root'))

//-------------------------------------------------
//ReactDOM.render( which element, where you have to show )
//it is making a virtual DOM
//it takes only one element
ReactDOM.render(fun() ,document.getElementById('root'))