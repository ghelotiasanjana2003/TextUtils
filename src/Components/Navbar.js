import React from 'react';

function Navbar(props) {
    return (
        <>
  <nav className="navbar navbar-expand-lg navbar-light bg-black">
  <a className="navbar-brand" href="#" style={{color:'red'}}>{props.name}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span> 
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#" style={{color:'white'}}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li classname="nav-item">
        <a classname="nav-link" href="#" style={{color:'white'}}>Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white'}}>
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#" style={{color:'white'}}>Action</a>
          <a className="dropdown-item" href="#" style={{color:'white'}}>Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" style={{color:'white'}}>Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" style={{color:'white'}}>Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0" style={{display:'flex', alignItems:'center', marginLeft:"30rem" }}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0 bg-red" type="submit" style={{color:'white'}}>Search</button>
    </form>
    <div className="form-check form-switch mx-3 text-'white'" style={{display:'flex', alignItems:'center'}}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label  " htmlFor="flexSwitchCheckDefault" >Default switch checkbox input</label>
</div>
  </div>
</nav>
        </>
    );
}

export default Navbar;
