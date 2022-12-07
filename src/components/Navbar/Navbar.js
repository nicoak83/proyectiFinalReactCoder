import './Navbar.css'
import Button from '../Button/Button'
import CardWidget from '../CardWidget/CardWidget'
const Nabvar = (props) => {
    return (
        <nav className='navbar'>
            <h1 style={{color:props.color}}>NVK Tienda Online</h1>
            <Button text = 'Productos' colorText = 'red'/>
            <Button text = 'Nosotros'colorText = 'green'/>
            <Button text = 'Contactos'colorText = 'blue'/>
            <CardWidget/>
        </nav>    
    )
}
export default Nabvar