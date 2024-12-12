import { useState } from 'react';
import './App.css';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [buttonState, setButtonState] = useState(true);
  const [errorState, setErrorState] = useState(true);
  const [list, updatedList] = useState([]);

  const onAddButtonClick = () => {
    updatedList([...list, { id: Date.now(), name: inputValue }]);
    setInputValue('');
    setButtonState(true);
  };

  const enterNewInput = () => {
    const newValue = prompt('Введите новое значение:');
    if (newValue !== null && newValue.length >= 3) {
      setInputValue(newValue);
      setButtonState(false);
      setErrorState(true);
    } else {
      setErrorState(false);
      setButtonState(true);
    }
  };

  const listLayout = () => {
    if (list.length === 0) {
      return <p className="no-margin-text">Нет добавленных элементов</p>;
    } else {
      return (
        <ul className="list">
          {list.map(({ id, name }) => (
            <li className="list-item" key={id}>
              {name}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <>
      <div className="app">
        <h1 className="page-heading">Ввод значения</h1>
        <p className="no-margin-text">
          Текущее значение: "{inputValue}"
          {/* <code>value</code>: "<output class="current-value"></output>" */}
        </p>
        <div className="error" hidden={errorState}>
          Введенное значение должно содержать минимум 3 символа
        </div>
        <div className="buttons-container">
          <button className="button" onClick={enterNewInput}>
            Ввести новое
          </button>
          <button className="button" disabled={buttonState} onClick={onAddButtonClick}>
            Добавить в список
          </button>
        </div>
        <div className="list-container">
          <h2 className="list-heading">Список:</h2>
          {listLayout()}
        </div>
      </div>
    </>
  );
};
