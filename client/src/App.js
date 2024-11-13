import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Graph from "./components/Graph";
import Form from "./components/Form";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import ExpenseTrack from "./components/ExpenseTrack";
import GameHome from "./components/GameHome";
import ChooseModule from "./components/ChooseModule";
import LeaderBoard from "./components/LeaderBoard";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import StoryLine from "./components/StoryLine";

function App() {
  return (

    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/expenseTrack" element={<ExpenseTrack/>} />
        <Route path="/storyLine" element={<StoryLine/>} />
        <Route path="/leaderBoard" element={<LeaderBoard/>} />
        <Route path="/chooseModule" element={<ChooseModule/>} />
        <Route path="/gameHome" element={<GameHome/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/" element={<Home/>} />

      </Routes>
    </div>
  </Router>
    // <>
    // <Navbar></Navbar>
    // <div className="App">
    //   <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        
    //       <Home></Home>
        
    //   </div>
    // </div>
   
    // </>
  );
}

export default App;
