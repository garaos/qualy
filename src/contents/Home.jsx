import { Link } from 'react-router-dom'
import Video from '../video/loop01.mp4'

const Home = () => {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={Video} autoPlay loop muted />
            <div className="content">
                <Link to='/Producto'>
                    <button className='btn btn-secondary btn-lg mt-5 mb-5 fw-bold rounded-pill'>Conoce Mas</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;

