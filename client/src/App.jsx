import AccountCreationForm from "./components/AccountCreationForm";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import ChatbotPage from "./components/ChatbotPage";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Performance from "./components/Performance";
import Flashcards from "./components/Flashcards";
import BarGraph from "./components/BarGraph";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="pt-12">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar isLoggedIn={false} />
                  <Home />
                </>
              }
            />

            <Route
              path="/signup"
              element={
                <>
                  <Navbar isLoggedIn={false} />
                  <AccountCreationForm />
                </>
              }
            />
            <Route
              path="/studybot"
              element={
                <>
                  <Navbar isLoggedIn={true} />
                  <ChatbotPage />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Navbar isLoggedIn={false} />
                  <LoginForm />
                </>
              }
            />
            <Route
              path="/performance"
              element={
                <>
                  <Navbar isLoggedIn={true} />
                  <Performance />
                </>
              }
            />
            <Route
              path="/flashcards"
              element={
                <>
                  <Navbar isLoggedIn={true} />
                  <Flashcards />
                </>
              }
            />
            <Route
              path="/quizzes"
              element={
                <>
                  <Navbar isLoggedIn={true} />
                  <BarGraph />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
