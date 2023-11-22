import React from 'react';
import styles from './MyComponent.module.css';

class MyComponent extends React.Component {
  render() {
    return <div className={styles.myComponent}>Пример компонента</div>;
  }
}

export default MyComponent;
