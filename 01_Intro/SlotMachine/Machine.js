function Machine(props){
    let {x, y, z} = props;
    // let msg;
    // if ((x==y) && (y==z)){
    //     msg = <h1>Winner</h1> 
    // }
    // else {
    //     msg = <h1>Loser</h1> 
    // } 
    return(
        <div>
            <h1>My props are {x} {y} {z}</h1>
            {/* {msg} */}

            {/* Conditional Rendering */}
            {((x==y) && (y==z)) ? <h1>Winner</h1> : <h1>Looser</h1>}
        </div>
    )
}

//default Props
Machine.defaultProps = {
    x: 1,
    y: 1,
    z: 1
}

//x == y == z print "Winner"
//x != y != z print "Loser"