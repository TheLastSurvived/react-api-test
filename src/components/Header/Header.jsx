import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname == "/" ? "active" : ""
              } `}
            >
              Главная
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname == "/about" ? "active" : ""
              } `}
            >
              О нас
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
