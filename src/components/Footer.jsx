import React from "react"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer className="pt-4 text-center text-md-start">
            <div className="container p-4 pb-3 pb-lg-1">
                <div className="row">

                    <div className="col-md-6 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 fw-bold"><i className="fa-solid fa-dna"></i> Qualy Vie
                        </h6>
                        <div>
                            <div><Link to="/Producto" className="fs-5 text-decoration-none text-black " > Colageno</Link></div>
                            <div><Link to="/Contacto" className="fs-5 text-decoration-none text-black" > Contacto</Link></div>
                        </div>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 fw-bold">Contacto</h6>
                        <p><i className="fa-solid fa-house"></i>Geronimo de Alderete 1311</p>
                        <p><i className="fa-solid fa-paper-plane"></i> <Link className="text-decoration-none" href="mailto:Chunkylover53@aol.com">contacto@qualyvie.com</Link></p>
                        <p><i className="fa-solid fa-mobile-screen-button"></i> XXXXXXX</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 fw-bold">Síguenos</h6>
                        <Link to="/"><i className="fa-brands fa-instagram m-1 colorig"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer