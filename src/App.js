import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import News from './views/News';
import Home from './views/Home';

import Nav from './components/Nav'

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
const firebaseApp = firebase.initializeApp(firebaseConfig);

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
        max-width: 100%;
        height: 100%;
        // border: red solid 1px;
        overflow-x: hidden;
    }
    h1 {
        margin: 0
    }
    img {
        max-width: 100%;
    }
    *:focus {outline:none}
    a {
        all: unset;
    }
    a:link {
        all: unset;
    }
    a:focus {
        all: unset;
    }
    a:active {
        all: unset;
    }
    a:visited {
        all: unset;
    }
    a:hover {
        all: unset;
    }
`;

class App extends Component {
  render() {
    const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Nav/>  
                {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
                <div>
                    <Route path="/" exact component={Home} user/>
                    <Route path="/news/" component={News} />
                </div>
                <GlobalStyle />
            </Router>
        </ThemeProvider>

    );
  }
}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(App);