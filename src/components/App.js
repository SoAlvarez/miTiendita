import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import ItemList from "./ItemListContainer";
import React from 'react';
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
    return (
      <BrowserRouter>
      <Header />
      <ItemList />
      <Main />
      <Footer />
      </BrowserRouter>
    );
    }

    export default App;