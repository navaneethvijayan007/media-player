import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

const Home = () => {
  const [deleteResponseFromView ,setdeleteResponseFromView] = useState("")
  const [deleteResponseFromCategory ,setdeleteResponseFromCategory ] = useState("")
  const [addResponseFromHome,setaddResponseFromHome] = useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container mb-5 d-flex justify-content-between">
        <Add setaddResponseFromHome = {setaddResponseFromHome} />
        <Link to={'/history'}> Watch History</Link>
      </div>
      <div className="container-fluid row my-5">
        <div className="col-lg-6">
          <h3>All videos</h3>
          <View setdeleteResponseFromView={setdeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addResponseFromHome={addResponseFromHome}/> 
        </div>
        <div className="col-lg-6">
          <Category deleteResponseFromView={deleteResponseFromView} setdeleteResponseFromCategory={setdeleteResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home