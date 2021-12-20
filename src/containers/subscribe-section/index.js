//components
import Arccordions from '../accordions';
import SubscribeForm from '../../components/subscribe-form';
//styles
import './SubscribeSection.scss';

const SubscribeSection = () => {
    return (
        <div className="subscribe_section">
            <Arccordions />
            <div className="container" style={{ marginTop: '3rem' }}>
                <SubscribeForm />
            </div>
        </div>
    )
}

export default SubscribeSection
