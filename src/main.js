import React from 'react';

function main(props) {
    
    return (
        <div className="numbercarholder">
            <div>
                <h3 className='number'>{props.number}</h3>
                <h3 className='n2'>{props.date}</h3>
                <h2 className='carholder'>{props.name}</h2>
            </div>
            <div>
                <img className="master-card" src="https://www.logolynx.com/images/logolynx/e0/e01dbbb3068c7f5135b90b0ce91445f9.png"/>
            </div>
        </div>
    )
}
export default main;