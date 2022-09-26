import './App.css';
import VisitingCard from './components/VisitingCard';
import profiles from './profileData';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h2 style={{ fontWeight: 'bold' }}>Visiting Card Generator</h2>
        { profiles.map(profile => (
          <VisitingCard 
            image={profile.image}
            name={profile.name}
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
