import CharactersList from './components/CharactersList';


function App() {
	/* 
 debemos recorrer el arreglo de los resultados
 para esto usaremos map, indicamos que por cada elemento me va a retornar
algo
 */
	return (
		<div className='bg-slate-900 text-white'>
			<h1 className='text-center text-5xl'>Rick and Morty</h1>
			<CharactersList />
		</div>
	);
}

export default App;
