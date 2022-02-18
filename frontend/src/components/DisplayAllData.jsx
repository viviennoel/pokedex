import React from 'react';

const DisplayAllData = Component => function DisplayCorrectData({ ...props }) {
    const [pokemonFromType, setPokemonFromType] = React.useState(null);
    // Fetch different data and then render the component with this props dataType
    React.useEffect(()=>{
        fetch(process.env.REACT_APP_API_ENDPOINT + '/api/pokemon/GetByType/' + props.dataFilter, { method: "GET" })
        .then(async (response) => {
            let pokemonList = await response.json()
            await setPokemonFromType(pokemonList)
        })
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    }, [])

    return (
        <Component pokemonList={pokemonFromType ? pokemonFromType : null} />
    )
};

export default DisplayAllData;