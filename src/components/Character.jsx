import React from 'react'

function Character({character}) {
  return (
<div className='m-5 flex-col text-center'>
    <h2>{character.name}</h2>
    <img className='rounded-full w-60 h-60' src={character.image} alt={character.name} />
  <h3>{character.origin.name}</h3>
</div>
  )
}

export default Character