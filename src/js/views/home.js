import React , { useEffect, useState , useContext}  from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Nave } from "../component/nave";
import { Context } from "../store/appContext";


export const Home = () =>{
	const { store, actions } = useContext(Context);

	const [startships,setStarships] = useState([])

	
	
	return (
		<div className="text-center mt-5">
			<h1>Home!</h1>
	
				
				<h1>Naves desde FLUX</h1>
				<div className="row flex-row flex-nowrap overflow-auto ">
					{  store.naves.map( (item)=> <Nave  key={item.uid} uid={item.url}  title={item.name} />) }
				</div>
	
			
		</div>
	);
	
} 