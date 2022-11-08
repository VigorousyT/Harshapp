import React from "react";

function Header() {
  return (
    <>
      <div className="nav-bar">
        <nav class="navbar navbar-light bg-light navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/Booklist" className="nav-link">
                <div>
                  <h1>BOOKS</h1>
                </div>
              </a>
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
