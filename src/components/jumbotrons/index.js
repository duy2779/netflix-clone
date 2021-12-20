//styles
import './styles/jumbotrons.scss'
//data
import jumboData from '../../fixtures/jumbo.json'
//components
import Jumbotron from './Jumbotron'

const Jumbotrons = () => {
    return (
        <section className="jumbotrons">
            {jumboData.map((item) => <Jumbotron key={item.id} jumbo={item} />)}
        </section>
    )
}

export default Jumbotrons
