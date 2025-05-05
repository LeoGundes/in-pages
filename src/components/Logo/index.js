import './styles.css'
import logo from '../../images/in-pages.svg'

function Logo() {
        return (
            <div className='logo'>
                <img src={logo} alt='logo' style={{width: '200px', height: 'auto'}}></img>
           </div>
        )


}

export default Logo