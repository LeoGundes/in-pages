import './styles.css'
import Logo from '../../components/Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default Header