import React, { useState } from 'react';
import app from '../Firebaseconfig';
import { getDatabase, ref, set, push } from "firebase/database";




function Firebase() {
    let [inputvalue1, setInputvalue1] = useState();
    let [inputvalue2, setInputvalue2] = useState();
    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "odc/reactjs"));
        set(newDocRef, {
            fruitname: inputvalue1,
            fruitDefinition: inputvalue2
        }).then(() => {
            alert('data saved succesfuly')

        })
            .catch(error => {
                alert('error', error.message)
            })
    }



    return (
        <div className='w-[400px] '>
            <h1 className='text-center'> Enregistrement</h1>

            <input className='border-2 p-2 m-2 w-[300px]' type='text' value={inputvalue1} onChange={(e) => setInputvalue1(e.target.value)} ></input>
            <br></br>
            <input className='border-2 p-2 m-2 w-[300px]' type='text' value={inputvalue2} onChange={(e) => setInputvalue2(e.target.value)} ></input><br />
            <button className='mx-2 p-2 border-2 rouded-sm' onClick={saveData}> Enregistrer</button>
            <button className='mx-2 p-2 border-2 rouded-sm button1' > Mise à jour</button>
            <button className='mx-2 p-2 border-2 rouded-sm button1' > lecture</button>

        </div>
    );
}

export default Firebase;
