import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivateAccount from "../views/Auth/ActivateAccount";

import PrivateRoutes from "./PrivateRoutes";
import Pay from "../views/PayClient";
import SignIn from "../views/Auth/SignIn";
import SignUp from "../views/Auth/SignUp";
import Home from "../views/Home";
import Search from "../views/Search";
import About from "../views/About";
import Scan from "../views/Scan";
import Help from "../views/Help";
import Profile from "../views/Profile";
import Edit from "../views/Profile/Edit";
import Transactions from "../views/Transactions";
import PayLink from "../views/PayLink";
import QRCode from "../views/QRCode";
import ForgotPassword from "../views/Auth/ForgotPassword/ForgotPassword";
import ChangePassword from "../views/Auth/ChangePassword/ChangePassword";
import Accounts from "../views/Accounts/Accounts";
import LinkAccount from "../views/Accounts/LinkAccount/LinkAccount";
import Invoice from "../views/Invoice";
import PayView from "../views/PayView";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoutes component={Home} />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/activate" element={<ActivateAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/search" element={<PrivateRoutes component={Search} />} />
        
        {/** Account */}
        <Route path="/accounts" element={<PrivateRoutes component={Accounts} />} />
        <Route path="/accounts/link-account" element={<PrivateRoutes component={LinkAccount} />} />
        
        <Route path="/pay" element={<PrivateRoutes component={Pay} />} />
        <Route path="/help" element={<PrivateRoutes component={Help} />} />
        {/* Prifile */}
        <Route path="/profile" element={<PrivateRoutes component={Profile} />} />
        <Route path="/profile/edit" element={<PrivateRoutes component={Edit} />} />
        <Route path="/get-qr-code" element={<QRCode />} />
        <Route path="/get-payment-link" element={<PayLink />} />
        <Route
          path="/transactions"
          element={<PrivateRoutes component={Transactions} />}
        />
        <Route path="/view_invoice" element={<Invoice />} />
        <Route path="/invoice/pay-now" element={<PayView />} />
      </Routes>
    </Router>
  );
}
