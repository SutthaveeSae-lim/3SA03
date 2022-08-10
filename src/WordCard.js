import React from 'react';
import CharacterCard from './CharacterCard';

export default function WordCard(props){
    
    const activationHandler = c => 
        console.log('${c} has benn activated')
    return (
        <div>
            {
                Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i} activationHalder={activationHandler}/>
            )
            }
        </div>
    )
}