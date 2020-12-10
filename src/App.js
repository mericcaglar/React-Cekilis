import React,{useState} from 'react';
import './App.css';
var chance = require('chance').Chance();
function App() {
  const [input,setInput] = useState('');
  const [person,setPerson] = useState([]);
  const [firstResult,setFirstResult] = useState([]);
  const [secondResult,setSecondResult] = useState([]);
  const [thirdResult, setThirdResult] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const clickHandle = () => {
    if(input === ''){
      alert('Bir isim gir')
    }else if(person.find(person => person.name === input)){ 
      alert('Böyle bir isim zaten mevcut');
      setInput('');
    }else{
      const newPerson = {
        name: input
      }
      setPerson([...person,newPerson]);
      setInput('');
    }

  }

  const removePerson = (personKey) => {
    setPerson(person.filter((person,key) => key !== personKey));
  }

  const result = () => {
      const shufflePerson = chance.shuffle(person);
      setFirstResult(chance.shuffle(shufflePerson.slice(0,person.length/2)))
      setSecondResult(chance.shuffle(shufflePerson.slice(person.length/2,person.length)));
      setThirdResult(chance.shuffle(shufflePerson.slice(0,person.length/2)));
  }

  return (
    <div>
      <header>
      <h2>Yılbaşı Çekilişi</h2>
      </header>
      <main>
      <div className="mainForm">
          <div className="form">
          <input type="text" placeholder="İsim gir" value={input} onChange={handleInput} />
          <button onClick={clickHandle}>Ekle</button>
          </div>
          <button onClick={()=> result()}>Çekilişi Çek!</button>
      </div>
      <div>
  <h3>Çekilişe Katılacak Kişiler - {person.length}</h3>
        <hr/>
        <ul>
          {person.map((person,key)=>
            (
            <li key={key}>{person.name} <span onClick={()=> removePerson(key)}>X</span></li>
            )
          )}
        </ul>
       
      </div>
      <div>
        <h3>Sonuçlar</h3>
        <hr/>
          <div className="firstResult">
          <ul>
            {firstResult.map((firstResult,key) => (
              <li key={key}>{firstResult.name}-></li>
            ))}
          </ul>
          <ul>
            {secondResult.map((secondResult,key) => (
              <li key={key}>{secondResult.name}</li>
            ))}
          </ul>
          </div>
          <div className="secondResult">
          <ul>
            {secondResult.map((secondResult,key) => (
              <li key={key}>{secondResult.name}-></li>
            ))}
          </ul>
          <ul>
            {thirdResult.map((thirdResult,key) => (
              <li key={key}>{thirdResult.name}</li>
            ))}
          </ul>
          </div>
      </div>
      </main>
    </div>
  );
} 

export default App;
