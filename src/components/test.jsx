import React from "react";

export const Test = () =>{
    const name = "Hello, I'm sandeep sangvekar... updating content again and again";
  const rating = "4.7";
  const summary = "I'm working as a software developer in Augtrans Transformations with 3 years of experience in Angular.";
  const returnGenre = () =>{
    return 'genre text'
  }
  let age = 19;

  // 2nd way using codition
  let canWatch = "Not Available";
  if(age>=18) canWatch = "Watch now";
  const canWatchFunction = () =>{
     if(age>=18) return 'Watch now';
     return 'Not available'
  };
    return (
        <>
            <div>
                <div className="proPic">
                <img src="/src/assets/boy.png" alt="" />
                </div>
                {/* passing variable */}
                <h1>{name}</h1> 
                {/* passing expression */}
                <p><b>{2 + 3.2}</b></p>
                {/* passing variable */}
                <p>{summary}</p>
                {/* calling function */}
                <p>Genre: {returnGenre()}</p>
                <p>Age: <b>{age >= 18 ? 'Adult' : 'Minor'}</b></p>
                <p>Vote: <b>{age >= 18 && 'You can Vote!'}</b></p>
                {/* 2nd way using ternery operator */}
                <button>{age >= 18 ?  'Watch now' : 'Not Available' }</button> <br />
                {/* using condition operator */}
                <button>{canWatch}</button>
                {/* using function */}
                <button>{canWatchFunction()}</button>
            </div>
        </>
    )
}