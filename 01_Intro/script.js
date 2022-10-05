// ReactDOM.render(<h1>Hello</h1>,document.getElementById('root'))

//-------------------------------------------------
//variable
let Hello = <h1>I am from Variable</h1>

//-------------------------------------------------
//Function Components
//function
function fun(){
    return (
        <h1>I am from Function</h1>
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

//ReactDOM.render( which element, where you have to show )
//it is making a virtual DOM
//it takes only one element
ReactDOM.render(<Bello />,document.getElementById('root'))