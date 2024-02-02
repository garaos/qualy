import React from "react"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer className="pt-5 pb-5 text-center text-md-start fcolor">



            <div className="container p-4 pb-3 pb-lg-1">





                <ul className="justify-content-center border-bottom pb-3 mb-3 d-flex nav">
                    <li>
                    <div className="d-flex">
                <i className=" fs-5 fa-solid fa-dna
                "></i>
                <p className="fs-5 text-black px-3">Qualy Vie</p>
            </div>
                    </li>
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
            </div>
        </footer>

    );
};

export default Footer