import React from 'react';
import seriesData from '../api/seriesData.json';
import './shared/shared.css';
import { SeriesCard } from './SeriesCard';
const NetFlixSeries = () =>{
    return (
        <>
        <div className="container">
            <ul className='ul-grp grid grid-three-cols'>
                {seriesData.map((curElem)=>{
                    return (
                        <SeriesCard key={curElem.id} data={curElem} />

                    )
                })}
                
            </ul>
        </div>
        </>
    );
}

export default NetFlixSeries;