import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./page/ticket-listing/ticketsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./page/dashboard/userSlice";
import newTicketReducer from "./components/add-ticket-form/addTicketSlicer";
import registrationReducer from "./components/registration-form/userRegistrationSlice";
import passwordReducer from "./components/password-reset/passwordSlice";

const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		login: loginReducer,
		user: userReducer,
		openTicket: newTicketReducer,
		registration: registrationReducer,
		password: passwordReducer,
	}
});

export default store;