import { useState } from "react";
import app from "../Firebaseconfig";
import { getDatabase, ref, get } from "firebase/database";

function Read() {
    let [fruitArray, setFruitArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "odc/reactjs");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            setFruitArray(Object.values(snapshot.val()));
        } else {
            alert("error");
        }
    }
    return (
        <div style={{ margin: "auto", position: "relative", border: "1px solid ", borderRadius: "20px", top: "200px" }} className='w-[500px]'>

            <div className="flex justify-between mb-4">
                <h1 className='text-center'>les data de firebase</h1>
                <button className='mx-2 p-2 border-2 rouded-sm' onClick={fetchData} >afficher les données</button>
            </div>

            <ul className="">
                {fruitArray.map((item, index) =>
                (
                    <li key={index} className="flex justify-between items-center my-2">
                        <p>{item.fruitname}:{item.fruitDefinition}</p>
                        <button style={{ backgroundColor: 'red', borderRadius: "15px", color: "white", cursor: "pointer" }} className="mx-2 p-2 border-2 rouded-sm button1" onClick={() => handleDelete}>Supprimer</button>
                    </li>
                )
                )}
            </ul>

            <div className="flex justify-between">
                <button style={{ borderRadius: "15px" }} className='mx-2 p-2 border-2 rouded-sm button1'>Mise A jour</button>
                <button style={{ borderRadius: "15px" }} className='mx-2 p-2 border-2 rouded-sm button1'>Lecture</button>
            </div>
        </div>
    )

} export default Read