import {Routes, Route, Link} from "react-router-dom";
import AllPosts from "./components/AllPosts";
import Home from "./components/Home";
import LogOut from "./components/LogOut";
import "./App.css";

export default function App() {

	return (
		<>
        <header>
            <Link to="/Home"> HOME </Link>
            <Link to="/AllPosts"> POSTS </Link>
            <Link to="/LogOut"> LOG OUT </Link>
        </header>

        <div>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/AllPosts" element={<AllPosts />} />
                <Route path="/LogOut" element={<LogOut />} />
            </Routes>
        </div>
		</>
	);
};
