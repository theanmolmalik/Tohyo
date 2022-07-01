import { ApolloProvider } from "@apollo/client";
import React, { useEffect, useState } from "react";
import client from "./apollo";
import "./App.css";
import { Footer, Header } from "./Components";
import { Poll } from "./Poll";
import { getUserId } from "./session";
import { Users } from "./Users";
import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router-dom";
import Info from "./pages/Info";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const defaultState = { loading: true, userId: "" };
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const fetchUserId = async () => {
      const userId = await getUserId();
      setState({ loading: false, userId });
    };

    fetchUserId();
  }, []);

  return (
    <BrowserRouter>
    <ApolloProvider client={client}>
        <div className="App">
            <Header />
            <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/vote" element={<div><Users/><Poll userId={state.userId}/></div>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            </Routes>
            <Footer />
        </div>
    </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;