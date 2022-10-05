/*
    -> if else return k andar confuse, people ternary operator
    conflict of curly brackets inside return
     1. while,for....curly brackets
     2. JSX ---js curly brackets
     -> Conditional Rendering Popular Methods
     1.if else
     2.Switch
     3.Assign to variable
     4.Using ternary
     5.Using Logical && (Short Circuit Evaluation)
     6.Using Immediately Invoked Function Expressions (IIFEs)
     7.Using Enhanced JSX Libraries
     -> defaultProps
*/
function App(){
    return (
        <div >
            <Machine x={1} y={2} z={1}/>
            <Machine />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));