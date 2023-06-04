import React from 'react';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
const AlertButton = ({message , children}) => {

      return(
            <button onClick={() => {alert(message)} }> 
            {children}
            </button>
      )
}
const App = () => {
 return (
  <>
      <FirstComponent/>
      <SecondComponent/>
      <AlertButton message = "playing">
            Play cricket!
      </AlertButton>
      <AlertButton message = "walking">
            Start Walking!
      </AlertButton>
  </>
 );
};
export default App;
