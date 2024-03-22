import React from "react"
import { Link } from "react-router-dom"
import companyLogo from '../img/logo.png';

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-5 pt-5 pb-5 border-top fcolor">
            <div className="col-md-4 d-flex align-items-center px-5">
                <a className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 px-5" href="/"><img className="px-5" href="https://qualyvie.com" src={companyLogo} alt="Qualy Vie" /></a>
            </div>

            <ul className="justify-content-center border-bottom pb-3 mb-3 d-flex nav">
                <li className="pb-3">
                    <Link
                        to="/"
                        className="fs-5 text-decoration-none text-black px-3">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Producto"
                        className="fs-5 text-decoration-none text-black px-3">
                        Colageno
                    </Link>
                </li>
                <li>
                    <a
                        className="fs-5 text-decoration-none text-black px-3"
                        href="mailto: contacto@qualyvie.com">
                        Contacto
                    </a>
                </li>
            </ul>

            <div>

            </div>



        </footer>


    );
};

export default Footer