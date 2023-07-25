import React, { useState } from 'react';
import Input from './Input';

interface GeneralInfoObject {
  fullName: string;
  emailAddress: string;
  phoneNumber: number | string;
}

const GeneralInfo = () => {
  const [formState, setFormState] = useState<GeneralInfoObject>({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
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
