import { db } from "../Firebaseconfig";
import { collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from 'firebase/firestore';
import { useState, useEffect } from "react";

const crud = () => {
    const [nom, setNom] = useState("");
    const[fetchData,setfetchData]=useState([]);
    const [id,setid]=useState();

    //creation de la reference
    const dbref = collection(db, 'CRUB')
    //ajout de la donnee
    const add = async () => {
        const addData = await addDoc(dbref, { Nom: nom })
        if (addData) {
            alert("envoyer avec succés")
            window.location.reload()
        } else {
            alert("erreur")
        }
    }
    //recuperation des donnees
    const fetch=async()=>{
        const snapshot=await getDocs(dbref)
        const fetchdata=snapshot.docs.map((doc=>({id:doc.id, ...doc.data() })))
        setfetchData(fetchdata)
        console.log(fetchdata)

    }
    useEffect(()=>{
        fetch()
    },[]);
    //passer les donnees au formulaire
    const passData=async(id)=>{
        const matchId=fetchData.find((data)=>{
            return data.id==id
        })
        setNom(matchId.Nom)
        setid(matchId.id)
    };
    //mise à jour
    const update=async()=>{
        const updateref=doc(dbref,id)
        try{
            await updateDoc(updateref,{Nom:nom})
            alert("modification effectuée")
            window.location.reload()
        }catch(error){
            alert(error,"modification non effectuée")
        }
        }
        // Suppression des donnée

    const sup = async ()=> {
        const delref = doc(dbref, id)
        try {
            await deleteDoc(delref)
            window.location.reload()
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <h2>ajout et modification</h2>
            <div style={{border:"1px,solid",padding:"10px"}}>
                <input type="text" placeholder="nom" autoComplete="off" value={nom} onChange={(e) => setNom(e.target.value)}></input>
                <button onClick={add}>Ajouter</button>
                <button onClick={update}>Modifier</button>
                
            </div>
            <div style={{background:"teal"}}>
            {
                fetchData.map((data)=>{
                    return(
                        <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}} key={data.id}>
                            <h4>Nom:{data.Nom} </h4>
                            <button onClick={()=>passData(data.id)}>Modifier</button>
                            <button onClick={sup}>supprimer</button>

                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default crud;   