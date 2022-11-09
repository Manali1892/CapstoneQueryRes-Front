import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
//import { DefaultLayout } from "./layout/DafaultLayout";  
import { Dashboard } from "./page/dashboard/Dashboard.page";
import { PasswordOtpForm } from "./page/password-reset/PasswordOtpForm.page";
import { UserVerification } from "./page/user-verification/UserVerification.page";
import { Entry } from "./page/entry/Entry.page";
import { Registration } from "./page/registration/Registration.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { TicketLists } from "./page/ticket-listing/TicketLists.page";
import { Ticket } from "./page/ticket/Ticket.page";

function App() {

	return (
       <div className="App">
	   <Router>
		<Routes>
		<Route exact path="/" element={<Entry />} />
		<Route exact path="/password-reset" element={<PasswordOtpForm />} />
		<Route exact path="/registration" element={<Registration />} />
		<Route exact path="/verification/:_id/:email" element={<UserVerification/>} />
		<Route element={<PrivateRoute />}>
		<Route path="/dashboard" element={<Dashboard />}/>
		<Route path="/add-ticket" element={<AddTicket />} />
		<Route path="/tickets" element={<TicketLists />} />
		<Route path="/ticket/:tId" element={<Ticket />} />
		
		</Route>
		</Routes>
		</Router>
    </div>
	);
	}

export default App;
