import React, { FormEvent, useState } from 'react';
import Input from './Input';

const GeneralInfo = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const targetName = target.name;

    setFormState((formState) => ({
      ...formState,
      [targetName]: value,
    }));
    console.log(formState);
  };

  return (
    <section>
      <h1>General Information</h1>
      <form action="">
        <Input
          placeholder={'Enter Full Name'}
          type={'text'}
          labelText={'Full Name: '}
          value={formState.fullName}
          onChange={handleChange}
          name={'fullName'}
          required={true}
        />
        <Input
          placeholder={'Enter Email'}
          type={'email'}
          labelText={'Email: '}
          value={formState.emailAddress}
          onChange={handleChange}
          name={'emailAddress'}
          required={true}
        />

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default GeneralInfo;
