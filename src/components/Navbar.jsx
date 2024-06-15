import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="bg-slate-700">
        <ul className="flex gap-5 items-center justify-center py-10">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/random-song'>Random Song</Link>
            </li>
            <li>
                <Link to='/search'>Search</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar