//Layouts Rule
/*
    Rules:
    1. Every components name should start with Capital Letter
    2. Always create one component per file in .js or .jsx
    3. We also need to have a root component call App,
     which combiner everything into single component
    4.Only App.js will be rendering on index.js and 
    it is the starting point of our React App 
*/
function App(){
    return(
        <div>
            <Header />  
            <Section />
            <Footer />
        </div>
    )
}

//JSX syntax
ReactDOM.render(<App />, document.getElementById('root'));