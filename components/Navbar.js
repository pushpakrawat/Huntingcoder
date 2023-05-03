import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link href='/'><li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Home</a>
                            </li></Link>
                            <Link href='/about'><li className="nav-item">
                                <a className="nav-link active" aria-current="page" >About</a>
                            </li></Link>
                            <Link href='/blog'><li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Blogs</a>
                            </li></Link>
                            <Link href='/contact'><li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Contact us</a>
                            </li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar