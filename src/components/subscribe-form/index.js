//styles
import './SubscribeForm.scss';

const SubscribeForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="subscribe__container">
            <h3 className="subscribe__title">Ready to watch? Enter your email to create or restart your membership.</h3>
            <form className="subscribe__form" onSubmit={handleSubmit}>
                <div className="subscribe__field">
                    <input id="email" type="text" className="subscribe__input" placeholder=" " />
                    <label htmlFor="email" className="subscribe__label">Email address</label>
                </div>
                <button className="subscribe__btn">Get Started <img src="/images/icons/chevron-right.png" alt="chevron-right" /></button>
            </form>
        </div>
    )
}

export default SubscribeForm
