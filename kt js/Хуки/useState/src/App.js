import React, { useState } from 'react';

     function MyComponent() {
       const [count, setCount] = useState(0);

       return (
         <div>
           <p>Счетчик: {count}</p>
           <button onClick={() => setCount(count + 1)}>Увеличить</button>
         </div>
       );
     }

     export default MyComponent;