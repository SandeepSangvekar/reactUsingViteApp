import React from "react";

export const Conditional = () =>{
    let age = 18;
    let name = 'Rahul Gaikwad'
    let rating = '4.7'
    let summary = 'Im working as Chartered Accountant. '
    let btnStatus = '';
    let returnGenre = () =>{
        return 'Genre Text'
    }
    let age2 = 16;

    // 1st way to change button status
    let elem = document.getElementById('btn');
    if(age2 >= 18){
        btnStatus = 'Watch now';
        // elem.style.backgroundColor = 'green';
        // elem.style.color = 'white';
    }else{
        btnStatus = 'You are not Adult!';
        // elem.style.backgroundColor = 'red';
        // elem.style.color = 'white';
        
    }
    // 2nd way using prop
    let canWatch = 'Not Available!';
    if(age2 >= 18) canWatch = 'Watch Now'

    // using function
    const canWatchFunction = () =>{
        if(age2 >= 18) return 'Watch now';
        return 'Cant not watch!';
    }
    return (
        <>
            <h2>Hello world</h2>
            <p>{age >= 18 ? 'Adult' : 'Minor'}</p>
            <p>{age >= 18 && 'You can vote!'}</p>

            <div>
                <div>
                    <img src="/src/assets/boy.png" alt="" />
                </div>
                <h2>Name: {name}</h2>
                <h3>Rating: {rating}</h3>
                <p>Summary: {summary}</p>
                <p>Genre: {returnGenre()}</p>
                <button id="btn" disabled>{btnStatus}</button>
                {/* 2nd way to using ternary operator */}
                <button>{age2 >= 18 ? 'Watch Now': 'You cant not watch!'}</button>
                {/* using property */}
                <button>{canWatch}</button>
                {/* using function parameter */}
                <button>{canWatchFunction()}</button>
            </div>
        </>
    )
}