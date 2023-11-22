import React, { useRef } from 'react';

     function MyComponent() {
       const inputRef = useRef();

       const handleClick = () => {
         inputRef.current.focus();
       };

       return (
         <div>
           <input ref={inputRef} type="text" />
           <button onClick={handleClick}>Фокус</button>
         </div>
       );
     }

     export default MyComponent;