import clsx from 'clsx'
import { Link } from "react-router-dom"
// style
import './button.scss'

const Button = ({ name, children, grayTransparent, circle, transparent, link, location }) => {
    return link ? (
        <Link
            className={clsx('btn', {
                "btn--gray-transparent": grayTransparent,
                "btn--transparent": transparent,
                "btn--circle": circle
            })}
            to={link}
            state={location ? location : null}
        >
            {children}
            {name}
        </Link>
    ) : (
        <button className={clsx('btn', {
            "btn--gray-transparent": grayTransparent,
            "btn--transparent": transparent,
            "btn--circle": circle
        })}>
            {children}
            {name}
        </button>
    )
}

export default Button