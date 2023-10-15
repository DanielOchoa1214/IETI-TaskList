import { Link } from "react-router-dom"

export function Header() {
    return (
        <>
            <h1>Todo App</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tasks">Tasks</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                </ul>
            </nav>
            <hr />
        </>
    );
}