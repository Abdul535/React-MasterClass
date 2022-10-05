function Header(){
    return (
        <h1>Header</h1>
    );
}

function Section(){
    return (
        <h1>Section</h1>
    );
}

function Footer(){
    return (
        <h1>Footer</h1>
    );
}

function Main(){
    return(
        <div>
            <Header />  
            <Section />
            <Footer />
        </div>
    )
}

//JSX syntax
ReactDOM.render(<Main />, document.getElementById('root'));

//normal JS syntax
// ReactDOM.render(Main() ,document.getElementById('root'))
