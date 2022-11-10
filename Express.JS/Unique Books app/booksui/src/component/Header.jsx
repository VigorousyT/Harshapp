import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="nav-bar">
        <nav class="navbar navbar-light bg-light navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/booklist" className="nav-link">
                <div>
                  <h3>BOOKS</h3>
                </div>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/addbooks" className="nav-link">
                <div>
                  <h3>ADD BOOKS</h3>
                </div>
              </Link>
            </li>
          </ul>
          <form class="form-inline">
            <div class="input-group">
              <input
                id="search-input"
                type="search"
                class="form-control"
                placeholder="Search Book..."
              />
              <button id="search-button" type="button" class="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </nav>
      </div>
    </>
  );
}

export default Header;
