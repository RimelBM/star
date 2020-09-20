import React,{useEffect} from 'react'
import {BrowserRouter , Switch , Route } from "react-router-dom"
import Home from "../pages/home/Home"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Profile from "../pages/home/Profile"
import { logout } from '../actions/authAction'
import { connect } from 'react-redux';

import  {loadUser} from '../actions/authAction'

const Router =({logout,isAuthenticated,pseudo,loadUser})=> {

   
    useEffect(() => {
        
        loadUser() ;
    }, [])

    const name = `/${pseudo}`
    console.log(name)
    return (
        <div>
             <BrowserRouter>
               <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path={name} component={Profile} />

               </Switch>
            </BrowserRouter>
        </div>
    )
}


const mapStateToProps = (state) => (
    {
      isAuthenticated: state.auth.isAuthenticated ,

      pseudo:state.auth.pseudo
      
  
    }
  )

export default connect( mapStateToProps , {logout,loadUser}) ( Router)
