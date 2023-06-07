import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-components';
import { Navigate, Route, Routes} from 'react-router';
import ShopPage from './pages/shopPage/shopPage';
import SignInAndSingUpPage from './pages/sign-in-and- sign-up/sign-in-and- sign-up';
import CheckOutPage from './pages/checkOutPage/checkOutPage.component';
import Header from './components/header/header';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { getDoc} from "firebase/firestore";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
  
  unSubscribeFromAuth = null;
  
  componentDidMount(){
    this.unSubscribeFromAuth = onAuthStateChanged(auth, async (userAuth)=>{
      if(userAuth){
        const refDoc = await createUserProfileDocument(userAuth);
        const snapDoc = await getDoc(refDoc);
        this.props.setCurrentUser({
          id: snapDoc.id,
          ...snapDoc.data()
        })
        
      }else{
        this.props.setCurrentUser(userAuth);
      }
    })
    
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  
  
  render(){
    return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/hats" element={<HatsPage/>}/>
        <Route path="/jackets" element={<JacketsPage/>}/>
        <Route path="/shoes" element={<ShoesPage/>}/>
        <Route path="/womens" element={<WomensPage/>}/>
        <Route path="/mens" element={<MensPage/>}/> */}
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/signin" element={ this.props.currentUser ? <Navigate to="/" replace/> :  <SignInAndSingUpPage/>}/>
        <Route path='/checkout' element={<CheckOutPage/>} />
      </Routes>
    </div>
  )
  }
  }

  const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
  })

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))

  })

export default connect(mapStateToProps, mapDispatchToProps)(App);
