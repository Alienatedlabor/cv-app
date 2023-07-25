import { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <section>
        <h1>General Info</h1>
        <Input
          placeholder={'Enter First Name'}
          type={'text'}
          labelText={'First Name: '}
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
      </section>
      <section></section>
      <section></section>
    </>
  );
}

export default App;
