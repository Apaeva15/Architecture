import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Код, который будет выполнен после рендера компонента
    console.log("Компонент отрисован");
    
    
    
    // Функция, которая будет выполнена перед размонтированием компонента
    return () => {
      console.log("Компонент размонтирован");
    }
  }, []); // Пустой массив зависимостей указывает на то, что эффект будет запускаться только один раз, при монтировании компонента
  
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличить счетчик
      </button>
    </div>
  );
}

export default ExampleComponent;