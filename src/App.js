import React, { Component } from "react";
import Header from "./components/Header";
import Top from "./components/Top";
import CustomInput from "./components/Custominput";
// import Main from "./components/Main";
// import Form from "./components/Form";
import { Footer } from "./components/Footer";
// import List from "./components/List";


class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik" />
        <Top />
        <CustomInput/>
        {/* <Main /> */
        // <Form/>
        /* <List/> */}
        <Footer name="Makanan Nusantara" tahun="1998" />
      </div>
    );
  }
}

export default App;
