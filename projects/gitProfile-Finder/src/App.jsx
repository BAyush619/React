import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState({});

  function handleSearch() {
    fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      })
  }
  console.log(data);
  return (
    <>
      <div className='gitWrapper'>
        <h1>GitHub Profile Finder</h1>
        <span style={{ marginBottom: "30px" }}>
          <input type="text" placeholder='search for git profile here....' value={search} onChange={(event) => setSearch(event.target.value)} />
          <button className='searchbtn' onClick={() => handleSearch()}>Search</button>
        </span>
        <div className='profileContainer'>
          <div className='personalInfo'>

            <div className='imgContainer'>
              <img src={data.avatar_url} alt='Image' />
            </div>
            <div className='myInfo'>
              <div className='name'>
                Login: {data.login ? data.login : "null"}
                <br />
                Name: {data.name ? data.name : "null"}
              </div>
              <div className='email'>
                email: {data.email ? data.email : "null"}
              </div>
            </div>
          </div>
          <div className='followings'>
            Followings: {data.followings ? data.followings : "-"}
          </div>
          <div>
            Followers: {data.followers ? data.followers : "-"}
          </div>
          <div>
            Public Repo: {data.public_repos ? data.public_repos : "-"}
          </div>
          <div className='createdAt'>
            Created At: {data.created_at ? data.created_at : "-"}
          </div>
          <div className='updatedAt'>
            Updated At: {data.updated_at ? data.updated_at : "-"}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
