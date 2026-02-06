import './App.css'
import CreatePost from './components/CreatePost'
import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'
import PostList from './components/PostList'
import { useState } from 'react'
function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className='app-container'>

        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>

        <div className='content'>
          <Header></Header>
          {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}


          <Footer></Footer>
        </div>
      </div>

    </>
  )
}

export default App
