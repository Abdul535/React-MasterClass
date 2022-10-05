//Ex: Hello, ___________, I am ___________
//Ex: Hello, Thirupathi , I am Najeeb
//Ex: Hello, Abdullah , I am Qasim
// ---------------------------------------
//accessing props 1st
// function Greeting(props){
//     console.log(props);
//     return (
//         <h1>Hello,{props.from}, I am {props.to}</h1>
//     )
// }

// ---------------------------------------
//accessing props 2nd
// function Greeting({to , from}){
//     return (
//         <h1>Hello,{to}, I am {from}</h1>
//     )
// }


// ---------------------------------------
//accessing props 3rd
// function Greeting(props){
//     let {to,from} = props;
//     return (
//         <h1>Hello,{to}, I am {from}</h1>
//     )
// }

// ---------------------------------------
//Testing whether props are immutable
//if changing directly we can't , after destructuring we can
// function Greeting(props){
//     props.to = "Qasim"
//     return (
//         <h1>Hello,{props.to}, I am {props.from}</h1>
//     )
// }

// ---------------------------------------
function Greeting(props){
    console.log(props)
    return (
        <h1>Hello</h1>
    )
}
