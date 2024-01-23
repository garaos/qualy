import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='fondohome'>
                <div className='col-12 col-md-9 col-lg-7 col-xl-6 pt-5 px-5'>
                    <div classNme='container-fluid py-5 mt-5 px-3'>
                        <h1 className='fw-bold text-white'>Colageno</h1>
                        <p className='text-white shadou pt-2'>
                        hola
                        </p>
                    </div>
                    <div className='botoncitojt'>
                        <Link to='/Producto'>
                            <button className='btn btn-warning btn-lg mt-5 mb-5 fw-bold rounded-pill'>holi</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
}

export default Home;