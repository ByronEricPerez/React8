import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';


const Navbar = () => {
    return (
        <div className="navbar">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#"><span class="text-primary fs-5 fw-bold text-start">BILGEWATER</span></a>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item active"><a href="#">Inicio</a></li>
                            <li className="nav-item active"><a href="#">Contacto</a></li>
                            <li className="nav-item active"><a href="#">Nosotros</a></li>
                            <li className="nav-item active"><a href="#">Nosotros</a></li>
                            
                        </ul>
                        
                        
                </div>

                
                
            </nav>
        
            <div className="fs-2 me-5">
                <CartWidget />
            </div>
        </div>
    );
}

export default Navbar;