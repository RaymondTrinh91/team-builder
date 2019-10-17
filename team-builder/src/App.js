import React, {useState} from 'react';
import './App.css';
import Data from "./TeamData";
import TeamForm from "./components/TeamForm";
import TeamList from "./components/TeamList";

function App() {
  const [teamData, setTeamData] = useState(Data)
  
  const addNewMember = newPerson => {
    setTeamData([...teamData, newPerson])
  }

  return (
    <div className="App">
      <h1>Your Team</h1>
      <TeamForm addNewMember={addNewMember}/>
      <TeamList teamData={teamData}/>
    </div>
  );
}

export default App;
