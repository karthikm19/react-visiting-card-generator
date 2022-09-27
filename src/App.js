import './App.css';
import VisitingCard from './components/VisitingCard';
import profiles from './profileData';
import { useState, useEffect } from 'react';



function App() {

  const [fullname, setFullname] = useState('...');

  const getRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    console.log(data);
    setFullname(data.results[0].name.first + ' ' + data.results[0].name.last);
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <h2 style={{ fontWeight: 'bold' }}>Visiting Card Generator</h2>
        { profiles.map(profile => (
          <VisitingCard 
            image={profile.image}
            name={fullname}
            title={profile.title}
            company={profile.company}
            intro={profile.intro}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
