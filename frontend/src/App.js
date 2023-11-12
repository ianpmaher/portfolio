import "./App.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <Projects />
        </div>
    );
}

export default App;
