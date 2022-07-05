//funcion para ejecutar una funcion cuando un dato cambia
import { useEffect, useState, CSSProperties } from 'react';
import Character from './Character';

function Navpage(props) {
	return (
		<div className="flex justify-between items-center mx-10">
			<button
				className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 
		focus:ring-blue-400 focus:ring-opacity-75"
				onClick={() => props.setpage(props.page - 1)}
			>
				back
			</button>
			<p>pagina: {props.page}</p>
			<button
				className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 
		focus:ring-blue-400 focus:ring-opacity-75"
				onClick={() => props.setpage(props.page + 1)}
			>
				page: {props.page + 1}
			</button>
		</div>
	);
}

function CharactersList() {
	//con useState vamos a crear una variable donde guardaremos el result
	const [ characters, setCharacters ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ page, setpage ] = useState(1);

	//un useEffect permite ejecutar logica al inicia de nuestra aplicacion
	useEffect(
		() => {
			//cargo se ejecuta al cargar la aplicacion
			//console.log('cargoo')
			//las palabras asyn y await simpre trabajan en conjunto
			//por esto se ha metido el codigo dentro de una funcion
			async function dataFetch() {
				/*para hacer la peticion usaremos 'fetch'
es una API propia del navegador 
*/
				/*con await le indicamos que es una consulta asincrona
posterior a eso guardaremos el fetch en una constante
*/
				const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
				/* despues de la peticion se necesita convertir en algo legible
por eso vamos a convertir a json a response, de igual manera le indicamos que es
asincrona  y la guardanmos en una constante
*/
				const data = await response.json();
				//guardarmos el arreglo en characters
				setLoading(false);
				setCharacters(data.results);
			}
			dataFetch();
		},
		[ page ]
	);

	return (
		<div>
			<Navpage page={page} setpage={setpage} />
			<div className="container flex justify-cent mx-auto  ">
				{loading ? (
					<div className="animate-ping bg-green-500 w-10 h-10 rounded-full" />
				) : (
					<div className="flex flex-wrap justify-center md:justify-between">
						{' '}
						{characters.map((character) => {
							return <Character key={character.id} character={character} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default CharactersList;
