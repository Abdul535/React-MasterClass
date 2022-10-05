# Taste of React 
## Separation of Concerns
It's a library only react lightweight compare to Angular
combined with react router,redux,Webpack it becomes a framework
## Components
Two ways of writing react
- Class Components
- Functional Components
## Three ways of running a react
1.cdn / react / react-dom
2. CRA
3. WebPack

## Talking about 
- ReactDOM.render()
- Writing directly to ReactDOM.render
- class component + Fragments
-  variables
-  functions
-  arrow functions
-  Showing how class has render method while function doesn't

## Diff between class and functional 
- both accept props 
- Prev functional components doesn't have life cycle and states
- ab due to intro to hooks now it is fully featured functional component


#  JSX
- JS + XML
- we can write react without jsx it ugly
- babel is transpiler who transpile  jsx into js
> RULES
- should have explicit closing tags <b><b/>
 - or self closing tags like >img />
## JSX in depth
- go to react docs then jsx then scroll down you get 
https://babeljs.io/repl
## WRITING REGULAR JS IN JSX 
: using {}
### CONDITIONAL RENDERING IN JSX
https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications
> three ways
- using terneray
- using &&
- writing at the start of functions normal if else
-  assigning the variables to html tags 

### Layouts
- Always create a one components per file with Pascal Hello.js 
- Then we create a App component, whatever we need combines into single component
- Its a entry Point to our code
- It is the only thing that will be rendering on index.js
- Showing them example of header,footer and all breaking into components and adding the file in index.html without import export

# Props and More
> Why Props:
it makes component reusable one, means making it configurable or customizable
Ex: make a compoent with says
"Our greeting will be Hi ____ from ____"
 Our greeting will be Hi {to} from {from} 
just like attr in html  
### PROPS REQUIREMENT:
- Props are for configuring your component
- Props are immutable {make a example of changing the prop you will get error}
- we can pass anything number,string,objects,booleans,arrays (string: "", rest all are curly brackets {}
- show with img url props 
- SLOT MACHINE EXAMPLE

### Looping in JSX

### Default Props


### Styling in JSX
- show using creating style.css in index.html
- class -> className
- label .......for --> forHTML
 - line style={{fontSize: "5px" }} ........camelCase like Objects

# Creact React App
- ES2015 modules...import export
> WHY
-CRA is complex utility script
-Create skeleton
-setup to run babel automatically
-super modern js features
-make testing and deployment much easier

- https://create-react-app.dev/
                                
### TWO WAYS OF CRA
-  using npx
[npx create-react-app my-app]
 - installing  create-react-app globally
[npm install -g create-react-app
 create-react-app my_app]
- WEBPACK
->CRA is built on Webpack
->Enables module import/export
->Packs all CSS/images into single file
->Hot Reloading
->Enables testing and deployment
- Modules
export default ... //name doesn't matter
export {...} //name matters
- CRA and Components
->components/Cars.js
->components/Bikes.js
->Assume that there is App.js
- ASSETS AND CSS
src/images/....
import logo from './logo.svg'
import './App.css'

https://blog.webdevsimplified.com/2022-07/react-folder-structure/

# React Hooks
useState: it is to write statefull logic
Explanation: the useState() is a function that returns a array which includes
1. the piece of state
2. a function to update that piece of state
const [count, setCount] = useState(0)
- CONVENTION
isHappy, setIsHappy
count, setCount
- Creating Custom Hooks
useToggle
useInput

- talking about useEffect
- simple count state+useEffect
https://swapi.dev/
