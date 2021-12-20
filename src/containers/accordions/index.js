//styles
import './accordions.scss';
//components
import Accordion from '../../components/accordion';
//data
import faqsData from '../../fixtures/faqs.json';

const Arccordions = () => {
    return (
        <section className="accordions">
            <div className="accordions__container container--mobile-fluid">
                <h1 className="accordions__title">Frequently Asked Questions</h1>
                <div className="accordions__list">
                    {
                        faqsData.map((faq) => <Accordion key={faq.id} faq={faq} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Arccordions
