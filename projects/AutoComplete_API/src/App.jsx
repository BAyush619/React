import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  // const [searchparam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setData(data.users.map(user => user.firstName));
      })
  }, [name])
  console.log(data);

  const filteredData = data.filter(item => item.toLowerCase().includes(name.toLowerCase()));

  return (
    <div className='container'>
      <input type="text" placeholder='Enter Name.....' value={name} onChange={(e) => {
        setName(e.target.value)
        setShowDropdown(true)
      }} />
      <div className='dropdown'>
        {showDropdown && name && (
          <div className="dropdown">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setName(item);
                    setShowDropdown(false);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {item}
                </p>
              ))
            ) : (
              <p>No user found</p>
            )}
          </div>
        )}
      </div>
    </div>


  )
}

export default App
