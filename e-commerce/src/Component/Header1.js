import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Joke
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <input type="text" className="Inp" />
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
