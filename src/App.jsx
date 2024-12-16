import { useState } from 'react';
import './App.css';

export const App = () => {
  const [value, setValue] = useState('');
  const [list, updatedList] = useState([]);
  const [error, setError] = useState([]);
  const [isValueVaild, setIsValueVaild] = useState(false);

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите новое значение:');

    if (promptValue !== null && promptValue.length >= 3) {
      setValue(promptValue);
      setError('');
      setIsValueVaild(true);
    } else {
      setError('Введенное значение должно содержать минимум 3 символа');
      setIsValueVaild(false);
    }
  };

  const onAddButtonClick = () => {
    if (value !== null && value.length >= 3) {
      updatedList([
        ...list,
        {
          id: Date.now(),
          name: value,
          time: new Date().toISOString().replace('T', ' ').substring(0, 19),
        },
      ]);
      setValue('');
      setIsValueVaild(false);
    }
  };

  return (
    <>
      <div className="app">
        <h1 className="page-heading">Ввод значения</h1>
        <p className="no-margin-text">Текущее значение: "{value}"</p>
        {error && <div className="error">{error}</div>}
        <div className="buttons-container">
          <button className="button" onClick={onInputButtonClick}>
            Ввести новое
          </button>
          <button className="button" disabled={!isValueVaild} onClick={onAddButtonClick}>
            Добавить в список
          </button>
        </div>
        <div className="list-container">
          <h2 className="list-heading">Список:</h2>
          {list.length === 0 ? (
            <p className="no-margin-text">Нет добавленных элементов</p>
          ) : (
            <ul className="list">
              {list.map(({ id, name, time }) => (
                <li className="list-item" key={id}>
                  {name}. Добавлено в список: {time}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
