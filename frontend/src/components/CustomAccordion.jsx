import { Accordion } from 'react-bootstrap'
import LoaderSuspense from './LoaderSuspense'

const CustomAccordion = (props) => {
    if(props.pokemonList){
		return(  
            <Accordion defaultActiveKey="0" variant="dark">
                {props.pokemonList.map((pokemon, index)=>
                    <Accordion.Item eventKey={index} key={pokemon.name}>
                        <Accordion.Header>{pokemon.name}</Accordion.Header>
                        <Accordion.Body>
                            <img
                            className="d-block w-100"
                            src={pokemon.sprite}
                            alt="First slide"
                        />
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        )
    } else {
            return(
                <LoaderSuspense></LoaderSuspense>
            )
        }
};

export default CustomAccordion;
