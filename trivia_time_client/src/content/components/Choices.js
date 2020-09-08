import React from 'react';


export default function Choices(props) {
    
   

     console.log(props.choices)
    let choice = props.choices.map((choice, i) => (
            <div key={`choiceListItem-${i}`} className="choices">
                <h2>{choice}</h2>
            </div>
            )
        )
    

    return (
        <div>
            <div>
                {choice}
            </div>
        </div>
    )
}