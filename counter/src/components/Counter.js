import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);

   const handleCounter = () => {setCounter(prev => prev + 1);};
   const handleValueChange = () => setValue((prev) => prev + 2);


   return (
       <div>
           <div>
               <h1>Count : {counter}</h1>
               <button onClick={handleCounter}>Add 1</button>
           </div>
           <div>
               <h1>Count : {value}</h1>
               <button onClick={handleValueChange}>Add 2</button>
           </div>
       </div>
   );
}
export default Counter;