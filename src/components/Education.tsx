import React, { useState } from 'react';
import Input from './Input';

const Education = () => {
  interface EducationObject {
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    description: string;
  }

  const [formState, setFormState] = useState<EducationObject>({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    description: '',
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
      <h1>Education</h1>
      <form className="flex flex-col" action="">
        <Input
          placeholder={'school'}
          type={'text'}
          labelText={'school: '}
          value={formState.school}
          onChange={handleChange}
          name={'school'}
          required={true}
        />
        <Input
          placeholder={'Degree'}
          type={'text'}
          labelText={'Degree: '}
          value={formState.degree}
          onChange={handleChange}
          name={'degree'}
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
          placeholder={'e.g Graduated with Honors'}
          type={'textarea'}
          labelText={'Description: '}
          value={formState.description}
          onChange={handleChange}
          name={'description'}
          required={true}
        />

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Education;
