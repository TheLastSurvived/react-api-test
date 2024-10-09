import { Link } from "react-router-dom";

export default function Card({ post }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="card-text">{post.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link
                to={`/post/${post.id}`}
                className="btn btn-sm btn-outline-secondary"
              >
                Просмотр
              </Link>
            </div>
            <small className="text-body-secondary">{post.id}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
