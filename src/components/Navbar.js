import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../components/firebase/firebase.utils'
import { connect } from 'react-redux';

const Navbar = ({currentUser}) => {
    
    return (
      <nav className="navbar navbar-expand-sm navbar- bg-dark">
        <Link className="navbar-brand" to="/">
          City Centre
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target=".collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Store">
                City Store
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="."
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Cytizen Central
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <Link className="dropdown-item" to="/Trophy">
                  Trophy Room
                </Link>
                <Link className="dropdown-item" to="/Team">
                  Team Room
                </Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <div className="nav-item">                  
                <Link className="option" to="/signin">
                  Sign In
                </Link>
              
            </div>
          </ul>
        </div>
      </nav>
    );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Navbar);
