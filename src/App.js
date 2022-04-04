import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Skills from './Components/Profile/Skills';
import Welcome from './Components/Welcome';
function App() {
  const alertMyInput = name =>alertMyInput;
  return (
    <div>
    <ProfilePhoto/>
    <FullName/>
    <Skills/>
    <Welcome name ='ray' alertMyInput={alertMyInput} />
    </div>
  );
}

export default App;
