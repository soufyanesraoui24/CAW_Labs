import React from 'react';
import ClickMeComponent from './exo1/ClickMeComponent'; 
import NotClickedComponent from './exo1/NotClickedComponent';
import ButtonsClick from './exo1/ButtonsClick';
import CounterComponent from './exo1/Counter';
import DisplayTab from './exo2/DisplayTab';
import DisplayTabV2 from './exo2/DisplayTabV2';
import DisplayTabV3 from './exo2/DisplayTabV3';
import DisplayTabV4 from './exo2/DisplayTabV4';
import Authentification from './exo3/Authentification';
import DynamicDivs from './exo4/DynamicDivs';

const App = () => {
  
  const tab = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "orange", "grape"];
  return (
    <div>
      {/*///////////////////// exo1 ////////////////////*/}
      <h2>solution of Q1 exo1</h2>
      <ClickMeComponent />
      <h2>solution of Q2 exo1</h2>
      <NotClickedComponent />
      <h2>solution of Q3 exo1</h2>
      <ButtonsClick />
      <h2>solution of Q4 exo1</h2>
      <CounterComponent />
      {/* //////////////////////////////////////// */}
      {/* /////////////////exo2///////////////// */}
      
      <h2>solution of Q1 exo2</h2>
      <DisplayTab tab={tab} />

      <h2>solution of Q2 exo2</h2>
      
      <DisplayTabV2 tab={tab} />
      <h2>solution of Q3 exo2</h2>
      <DisplayTabV3 tab={tab} />
      <h2>solution of Q4 Q5 exo2</h2>
      <DisplayTabV4 tab={tab} />
      <DisplayTabV4 tab={tab2} />
      
      {/* //////////////////////////////////////// */}
      {/* /////////////////exo3///////////////// */}
      <h2>solution of Q1 exo3</h2>
      <Authentification />
      
      {/* //////////////////////////////////////// */}
      {/* /////////////////exo4///////////////// */}
      
      <h2>solution of Q1 exo3</h2>
       <DynamicDivs />
      {/* //////////////////////////////////////// */}

    </div>
  );
};

export default App;
