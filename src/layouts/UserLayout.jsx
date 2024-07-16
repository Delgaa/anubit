import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function UserLayout(props) {
  return (
    <>
    <Header/>
    <div className='min-h-screen'>
        {
          props.children
        }
    </div>
    <Footer/>
    </>
  )
}

export default UserLayout