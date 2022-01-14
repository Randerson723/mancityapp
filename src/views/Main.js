import React from 'react'
import { Route, Routes } from 'react-router'
import  Navbar  from '../components/Navbar'
import { Home } from './Home'
import  ShopPage  from './ShopPage'
import { Trophy } from './Trophy'
import { Team } from './Team'
import  SignInandSignUpPage  from "../views/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "../components/firebase/firebase.utils";
import {signOut} from './Signout';
import { connect } from 'react-redux';
import { setCurrentUser } from '../components/redux/user/user.actions'


class Main extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(  userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Store" element={<ShopPage />} />
            <Route exact path="/Trophy" element={<Trophy />} />
            <Route exact path="/Team" element={<Team />} />
            <Route exact path="/signin" element={<SignInandSignUpPage />} />
            <Route exact path="/signout" element={<signOut />} />
          </Routes>
        </main>
        <footer></footer>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Main);
