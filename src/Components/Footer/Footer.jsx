import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
           <div className="containers">

               <div className="head-title">
                  <h1>1) What is the different of Props and state ? </h1> 
                  <p>Props are used to pass data as component parameter to another component and state is a hook function.</p>
               </div>

               <div className="head-title">
                  <h1>2) How useState is worked ? </h1> 
                  <p>USeState is being worked about as a two destructuring parameter, one is function hook and other one is state hook that update the main parameter.</p>
               </div>

               <div className="head-title">
                  <h1>3) how useEffect worked without data loading ? </h1> 
                  <p>UseEffect worked for api data loaded format that this is not only thing, its worked. UseEffect can load dependents parameter that connect to useState parameters.</p>
               </div>

               <div className="head-title">
                  <h1>4) How does react work ? </h1> 
                  <p>React works different various type of reusable components ui divided many pieces code. React used for SPA for real time data load and coding writing time can be deduce to simply create big web application.</p>
               </div>

           </div>
        </div>
    );
};

export default Footer;

