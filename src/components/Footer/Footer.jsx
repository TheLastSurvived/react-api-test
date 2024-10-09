import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link text-muted">
              Главная
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-muted">
              О нас
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © 2024 Alex Nazarenko, Inc
        </p>
      </footer>
    </div>
  );
}
