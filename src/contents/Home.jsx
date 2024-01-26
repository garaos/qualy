import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Video from '../video/loop01.mp4'

const Home = () => {
    return (
        <div className='main'>
            <video src={Video} autoPlay loop muted />
            <div className="content">
                <Link to='/Producto'>
                    <Button variant="outline-light" className='mt-5 mb-5 fw-bold rounded-pill'>Conoce Más</Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;

