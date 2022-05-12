import './App.css';
import Profile from './Profile/Profile'

function App() {
  const name='Haythem'
  const bio='Theatre'
  const profession='Developper Web'
  const handelName=(nom) => {
  alert(`${nom}`)
}

  return (
    <div className="App">
<Profile name={name} bio={bio} profession={profession} handelName={handelName}/>
<br />
<img src='logo192.png' alt='profile' />
    </div>
  );
}

export default App;
