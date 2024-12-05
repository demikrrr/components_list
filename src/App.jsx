// import { useState } from 'react'
import './App.css'

export const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <h1 className="page-heading">Ввод значения</h1>
        <p className="no-margin-text">
          Текущее значение
          {/* <code>value</code>: "<output class="current-value"></output>" */}
        </p>
        <div className="error">Введенное значение должно содержать минимум 3 символа</div>
        <div className="buttons-container">
          <button className="button">Ввести новое</button>
          <button className="button" disabled>Добавить в список</button>
        </div>
        <div className="list-container">
          <h2 className="list-heading">Список:</h2>
          <p className="no-margin-text">Нет добавленных элементов</p>
          <ul className="list">
            <li className="list-item">Первый элемент</li>
          </ul>
        </div>
      </div>
    </>
  )
}

// return (
//   <>
//     <div>
//       <a href="https://vite.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )
