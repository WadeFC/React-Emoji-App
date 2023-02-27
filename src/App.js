import './App.css';
import { useEffect, useState} from 'react';

function App() {


  let [data, setData ] = useState([])
  let [search, setSearch] = useState('')
   useEffect(()=>{
    fetch('https://emoji-api.com/emojis?access_key=67b572d799ad1d60b0ed298bdb91172bf94b8f96')
    .then(res=> res.json())
    .then(res =>setData(res))
   }, [])

   let handleSearch = (e) =>{
    setSearch(e.target.value)
   }

    let handleSubmit = () => {
        if (search !== ''){
          fetch(`https://emoji-api.com/emojis?search=${search}&access_key=67b572d799ad1d60b0ed298bdb91172bf94b8f96`)
          .then(res=> res.json())
          .then(res =>setData(res))
        }
    }
  return (
    <div className="App">
      <div className='menu'>
        <div className='menu_text'>
          <h1>Emoji Search </h1>
          <p>A Simple Emoji Search With React</p>

          <div>
            <input type="text" placeholder='Search' value={search} onChange={(e)=> handleSearch(e)} />
            <button className='search' onClick={()=> handleSubmit()}>Search</button>
          </div>
        </div>
      </div>

      <div className='container'>
      {
        data.map((e, i) =>
        <div className='card' key={e.slug}>
          <p className='emo'>{e.character} </p>
          <p className='name'>{e.unicodeName}</p>
        </div>   
        
        )
      }

      </div>
    </div>
  );
}

export default App;
