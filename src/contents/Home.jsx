import { Link } from 'react-router-dom'
import Video from '../video/loop01.mp4'

const Home = () => {
    return (
<header id="header">
    <div className="intro">
        <video className="videointro" autoPlay loop muted>
            <source src={Video} type='video/mp4' /></video>

        <div className="overlay">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                    <div className='botoncitojt '>
                    <Link to='/Producto'>
                        <button className='btn btn-secondary btn-lg mt-5 mb-5 fw-bold rounded-pill'>Conoce Mas</button>
                    </Link>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

        // <div className='video-div1' id='video-text'>
        //     <div className="intro">
        //         <video className="videointro" autoPlay loop muted>
        //             <source src={Video} type='video/mp4' /></video>
        //     </div>


        //     <div className='pt-5 px-5'>
        //         <div className='botoncitojt '>
        //             <Link to='/Producto'>
        //                 <button className='btn btn-secondary btn-lg mt-5 mb-5 fw-bold rounded-pill'>Conoce Mas</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Home;

