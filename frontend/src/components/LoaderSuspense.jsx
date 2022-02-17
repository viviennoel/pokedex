import {Spinner} from 'react-bootstrap';

function LoaderSuspense() {
    return(
        <div className="LoaderSuspense_container d-flex">
            {/* This spinner is centered on the center of the page */}
            <Spinner animation="border" role="status" className="m-auto">
                <span className="visually-hidden">Loading...</span>
            </Spinner>            
        </div>
    )
}

export default LoaderSuspense;