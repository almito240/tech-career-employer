import React from 'react';
//Admin page
import AdminPage from './pages/admin-page/AdminPage'
//Home page
import Home from './pages/home-page/Home'
//HR page
import HrRegisterForm from './pages/hr-page/Hr-Register'
import CompanyRegister from './pages/hr-page/Company-register'
import Student from './pages/student-page/Student'
import SpecificStudent from './components/specificStudent/SpecificStudent'
import StuSteps from './components/steps/StuSteps'
import StudentPersonal from './pages/personal-page/Student-Personal'

import {
  Switch,
  Route
} from "react-router-dom";


function AdminRouter() {


  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signUp/hr">
        <HrRegisterForm />
      </Route>
      <Route path="/signUp/company">
        <CompanyRegister />
      </Route>
      <Route path="/student">
        <Student />
      </Route>
      <Route path="/studentPage/:id">
        <SpecificStudent />
      </Route>
      <Route path="/studentReg">
       <StuSteps/>
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
      <Route path="/privatestudent">
        <StudentPersonal />
      </Route>
    </Switch>
  )

}

export default AdminRouter;


