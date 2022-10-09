import React from "react";
import mainStyles from "../styles/mainStyles.module.css";

function Main(props) {
  return (
      <main className={props.darkMode ? `${mainStyles.main}` : `${mainStyles.light} ${mainStyles.main}`}>
        <div className={mainStyles.container}>
          <h1 className={mainStyles.title}>Fun facts about React</h1>
          <ul>
            <li className={mainStyles.item}>Was first released in 2013</li>
            <li className={mainStyles.item}>Was originally created by Jordan Walke</li>
            <li className={mainStyles.item}>Has well over 100K stars on GitHub</li>
            <li className={mainStyles.item}>Is maintained by Facebook</li>
            <li className={mainStyles.item}>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
      </main>
  )
}

export default Main;