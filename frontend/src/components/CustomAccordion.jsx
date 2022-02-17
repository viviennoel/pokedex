import { Accordion } from 'react-bootstrap'

const CustomAccordion = (props) => {
	return (
		<Accordion defaultActiveKey="0">
            {props.data.map((item, index)=>
                <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        <img
						className="d-block w-100"
						src={item.image}
						alt="First slide"
					/>
                    </Accordion.Body>
                </Accordion.Item>
            )}
		</Accordion>
	);
};

export default CustomAccordion;
