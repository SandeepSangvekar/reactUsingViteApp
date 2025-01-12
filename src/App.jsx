import React from "react";
import { Conditional } from "./components/conditional";
import Footer, { Header } from "./components/shared/shared";
// import { Test } from "./components/test";
import "./App.css";
import NetFlixSeries from "./components/NetflixSeries";
// import Profile from "./components/profile/Profile";
export const App = () =>{
  return (
    // <div>
    //   <div>
    //     <div className="proPic">
    //       <img src="/src/assets/boy.png" alt="" />
    //     </div>
    //       <h1>Hello, I'm sandeep sangvekar... updating content again and again</h1>
    //       <p>I'm working as a software developer in Augtrans Transformations with 3 years of experience in Angular.</p>
    //   </div>
    //   <Card/>
    //   <Card/>
    //   <Card/>
    // </div>

    //  2nd way
    // [<Card  key="1"/>, <Card key="2"/>]

    <>
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}
      {/* <Test /> */}
      <Header />
      {/* <Conditional /> */}
      <NetFlixSeries />
      {/* <Profile /> */}
      <Footer />
    </>

  );
};

// export const Card =() =>{
//   const name = "Hello, I'm sandeep sangvekar... updating content again and again";
//   const rating = "4.7";
//   const summary = "I'm working as a software developer in Augtrans Transformations with 3 years of experience in Angular.";
//   const returnGenre = () =>{
//     return 'genre text'
//   }
//   let age = 19;
  // 1st way but it repeated code
  // if(age <=18){
  //   return (
  //     <div>
  //         <div className="proPic">
  //           <img src="/src/assets/boy.png" alt="" />
  //         </div>
  //           {/* passing variable */}
  //           <h1>{name}</h1> 
  //           {/* passing expression */}
  //           <p><b>{2 + 3.2}</b></p>
  //           {/* passing variable */}
  //           <p>{summary}</p>
  //           {/* calling function */}
  //           <p>Genre: {returnGenre()}</p>
  //           <p>Age: <b>{age >= 18 ? 'Adult' : 'Minor'}</b></p>
  //           <p>Vote: <b>{age >= 18 && 'You can Vote!'}</b></p>
  //           <button disabled>Not Available</button>
  //       </div>
  //   ); 
  // }

  // 2nd way using codition
//   let canWatch = "Not Available";
//   if(age>=18) canWatch = "Watch now";
//   const canWatchFunction = () =>{
//      if(age>=18) return 'Watch now';
//      return 'Not available'
//   };
  
//   return (
//     <div>
//         <div className="proPic">
//           <img src="/src/assets/boy.png" alt="" />
//         </div>
//           {/* passing variable */}
//           <h1>{name}</h1> 
//           {/* passing expression */}
//           <p><b>{2 + 3.2}</b></p>
//           {/* passing variable */}
//           <p>{summary}</p>
//           {/* calling function */}
//           <p>Genre: {returnGenre()}</p>
//           <p>Age: <b>{age >= 18 ? 'Adult' : 'Minor'}</b></p>
//           <p>Vote: <b>{age >= 18 && 'You can Vote!'}</b></p>
//           {/* 2nd way using ternery operator */}
//           <button>{age >= 18 ?  'Watch now' : 'Not Available' }</button> <br />
//           {/* using condition operator */}
//           <button>{canWatch}</button>
//           {/* using function */}
//           <button>{canWatchFunction()}</button>
//       </div>
//   );
// }