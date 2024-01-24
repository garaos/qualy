import { Link } from 'react-router-dom'
import Video from '../video/loop01.mp4'

const Home = () => {
    return (
        <div className='fondohome '>
            <div className='pt-5 px-5'>
                <div classNme='container-fluid py-5 mt-5 px-3 '>
                    <h1 className='fw-bold text-white'>Colageno</h1>
                    <p className='text-white shadou pt-2'>
                        hola
                    </p>
                </div>
                <div className='botoncitojt '>
                    <Link to='/Producto'>
                        <button className='btn btn-secondary btn-lg mt-5 mb-5 fw-bold rounded-pill'>Conoce Mas</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;