import { useState } from 'react';
//styles
import './styles/accordion.scss';

const Accordion = ({ faq }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={`accordion ${toggle ? 'active' : ''}`}>
            <h3 className="accordion__title" onClick={() => setToggle(!toggle)}>
                {faq.header}
            </h3>
            <div className="accordion__content">
                {
                    toggle && <p>{faq.body}</p>
                }
            </div>
        </div>
    )
}

export default Accordion
