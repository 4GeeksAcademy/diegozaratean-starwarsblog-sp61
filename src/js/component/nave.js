import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";


import { Link } from "react-router-dom";

export const Nave = (props) => {
	const { store, actions } = useContext(Context);
   
	return (
		<div className="card mx-3" style={{width: "18rem"}}>
				<img src={rigoImage} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">{props.title} </h5>
					

					<Link className="btn btn-primary" to={"/nave/" + props.uid }>
						<span>ver nave</span>
					</Link>
					<button onClick={()=>actions.changeMessage(props.title)}>Cambiar mensaje</button>
				</div>
			</div>
	);
};
