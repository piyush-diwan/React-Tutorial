import React ,{ useState } from "react";
import "./App.css";
import Product from "./Product";

function App() {
  var[a,b] =useState(69)
  var[x,y] = useState(false)
  return(
  <>
    <h1 className="text-5xl underline bg-red-500">Hello world!</h1>
    <button className="text-red-600 mt-10" onClick={()=>b(a-1)}>Decrease</button>
    <h2>{a}</h2>
    <button className="text-red-600" onClick={()=>b(a+1)}>Increase</button>
    <h3>{x=== false ? 'Hey' : 'Hello'} </h3>
    <button onClick={()=>y(!x)}>Change</button>
    <Product naam={a} data={{age:22 ,name: 'Piyush'}} />
  </>
  )
}

export default App;
