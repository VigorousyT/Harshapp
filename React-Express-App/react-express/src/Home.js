import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to='/Firstvisit' className='nav-link active'>Home</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
              <Link to='/allproducts' className='nav-link active'>Products</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
              <Link to='' className='nav-link active'></Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
              <Link to='/quiz' className='nav-link active'>Fun Quiz</Link>
            </li>&nbsp;&nbsp;
            <li class="nav-item">
              <Link to='/Addproduct' className='nav-link active'>Please Add Products Here</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
          </ul>
        </div>
      </nav>
    </div>
  )
}
