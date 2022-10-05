/*
    Rules of Props
    ->Props of immutable (read only)
    ->we can pass anything if 
        string--> ""
        rest --> {}
*/
let App = () => {
    return (
        <Greeting 
        from="Thiru"
        to="Najeeb"
        arr={[1,2,3,4]} //array
        obj = {{ "key":"value"}} //obj
        isDead = {true} //boolean
        isAlive = {false}
        num={5} //number
        />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));