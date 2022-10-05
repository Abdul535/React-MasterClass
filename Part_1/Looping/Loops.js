function Loops() {

  let arr = [1,2,3,4]
  let uls = <ul> {arr.map(m => <li>{m}</li>)} </ul>

  let multipleHello = [1,2,3,4,5];

  return (
    <div>
        {/* <ul> */}
            {/* {arr.map(m => <li>{m}</li>)} */}
        {/* </ul> */}

        { multipleHello.map((e,idx) => <Hello  key={idx} />)}

        {uls}

    </div>
  )
}
