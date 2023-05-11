import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-components';
import { Route, Routes} from 'react-router';
import ShopPage from './pages/shopPage/shopPage';
import SignInAndSingUpPage from './pages/sign-in-and- sign-up/sign-in-and- sign-up';
import Header from './components/header/header';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { getDoc} from "firebase/firestore";

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }
  
  unSubscribeFromAuth = null;
  
  componentDidMount(){
    this.unSubscribeFromAuth = onAuthStateChanged(auth, async (userAuth)=>{
      if(userAuth){
        const refDoc = await createUserProfileDocument(userAuth);
        const snapDoc = await getDoc(refDoc);
        this.setState (() => {
          return {currentUser: {
            id: snapDoc.id,
            ...snapDoc.data()
          }}
        }, () => {console.log(this.state)})
        
      }else{
        this.setState({currentUser:userAuth});
      }
    })
    
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  
  
  render(){
    return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/hats" element={<HatsPage/>}/>
        <Route path="/jackets" element={<JacketsPage/>}/>
        <Route path="/shoes" element={<ShoesPage/>}/>
        <Route path="/womens" element={<WomensPage/>}/>
        <Route path="/mens" element={<MensPage/>}/> */}
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/signin" element={<SignInAndSingUpPage/>}/>
      </Routes>
    </div>
  )
  }
  }

export default App;
