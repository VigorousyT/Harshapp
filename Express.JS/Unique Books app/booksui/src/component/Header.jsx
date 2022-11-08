import React from "react";

function Header() {
  return (
    <>
      <div className="nav-bar">
        <nav class="navbar navbar-light bg-light">
          <a href="/" className="navbar-brand">
            <div>
              <h1>BOOKS</h1>
            </div>
          </a>
          <a href="/" className="navbar-brand">
            <div>
              <h1>BOOKS</h1>
            </div>
          </a>
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
