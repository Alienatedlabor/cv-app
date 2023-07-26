import React, { useState } from 'react';
import Input from './Input';

const EmploymentHistory = () => {
  interface EmploymentHistoryObject {
    jobTitle: string;
    employer: string;
    startDate: string;
    endDate: string;
    jobDescription: string;
  }

  const [formState, setFormState] = useState<EmploymentHistoryObject>({
    jobTitle: '',
    employer: '',
    startDate: '',
    endDate: '',
    jobDescription: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
    console.log(formState);
  };

  return (
    <section className="flex flex-col items-center">
      <h1>Employment History</h1>
      <form className="flex flex-col" action="">
        <Input
          placeholder={'Job Title'}
          type={'text'}
          labelText={'Job Title: '}
          value={formState.jobTitle}
          onChange={handleChange}
          name={'jobTitle'}
          required={true}
        />
        <Input
          placeholder={'Employer'}
          type={'text'}
          labelText={'Employer: '}
          value={formState.employer}
          onChange={handleChange}
          name={'employer'}
          required={true}
        />
        <Input
          placeholder={'Start Date'}
          type={'text'}
          labelText={'Start Date: '}
          value={formState.startDate}
          onChange={handleChange}
          name={'startDate'}
          required={true}
        />
        <Input
          placeholder={'End Date'}
          type={'text'}
          labelText={'End Date: '}
          value={formState.endDate}
          onChange={handleChange}
          name={'endDate'}
          required={true}
        />
        <Input
          placeholder={'Description'}
          type={'textarea'}
          labelText={'Job Description: '}
          value={formState.jobDescription}
          onChange={handleChange}
          name={'jobDescription'}
          required={true}
        />

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default EmploymentHistory;
