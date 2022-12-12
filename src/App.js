import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux";

import HomePage from "./pages/homepage";
import ContactPage from "./pages/contact";
import Destination from "./pages/destination";
import MailPage from "./pages/mailpage";
import Inbox from "./pages/inbox";
import Sent from "./pages/sent";
import Primary from "./pages/primary";
import RegisterPage from "./pages/register";
import UserPage from "./pages/users";
import CreateAccount from "./pages/create-account";
import UpdateProfiles from "./pages/update-profile";
import ParentPage from "./pages/parents";
import configureStore from "./redux/store/redux-store";


import "./styles/magi.css"

const reduxStore = configureStore();

function App() {
  return (
    <div>
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="contact" element={<ContactPage></ContactPage>}></Route>
            <Route path="destination-dot" element={<Destination></Destination>}></Route>
            <Route path="mailpage" element={<MailPage></MailPage>}>
              <Route path="inbox" element={<Inbox></Inbox>}></Route>
              <Route path="sent" element={<Sent></Sent>}></Route>
              <Route path="primary" element={<Primary></Primary>}></Route>
              <Route path="account" element={<CreateAccount></CreateAccount>}></Route>
              <Route path="updatep" element={<UpdateProfiles></UpdateProfiles>}></Route>
            </Route>
            <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="user" element={<UserPage></UserPage>}></Route>
            <Route path="parent" element={<ParentPage></ParentPage>}></Route>
          </Routes>
        </BrowserRouter>

      </Provider>

    </div>
  );
}

export default App;
