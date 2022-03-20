import clsx from 'clsx';
//styles
import './styles/hero.scss';
//components

const Hero = ({ children, fullHeight = false, borderBottom, image }) => {
    return (
        <div className={clsx("hero", { "hero--border-bottom": borderBottom })}>
            <div className={clsx("hero__container", {
                "hero__container--full-height": fullHeight,
            })}>
                {
                    children
                }
                {
                    image && <img src={image} alt="" className="hero__bg" />
                }
            </div>

        </div>
    )
}

export default Hero

