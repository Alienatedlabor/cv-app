import './App.css';
import Education from './components/Education';
import EmploymentHistory from './components/EmploymentHistory';
import GeneralInfo from './components/GeneralInfo';

function App() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <section className=" flex flex-col justify-center">
          <GeneralInfo />
          <section className=" flex flex-col justify-center">
            <EmploymentHistory />
          </section>
          <section className=" flex flex-col justify-center">
            <Education />
          </section>
        </section>
        <section className="flex flex-col">CV</section>
      </div>
    </>
  );
}

export default App;
