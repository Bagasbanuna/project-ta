import {useNavigate} from 'react-router-dom'
import { MyRouter } from '../my_router'

function Navbar() {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="collapse navbar-collapse m-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Pengumuman</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Struktur Organisasi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Kritik dan Saran</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


function NewNavbar() {

   MyRouter.Init(useNavigate)

    return (
        <div>
            <div className="container ">
                <header className="blog-header py-3 ">
                    <div className="row flex-nowrap justify-content-between align-items-center " >
                        <div className="col-4 pt-1">
                            <a className="link-secondary" href="#medsos">Subscribe</a>
                        </div>
                        <div className="col-4 text-center">
                            <h3 className="pb-4 mb-4 fst-italic border-bottom" href="#home">IMMUKI</h3>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                            </a>
                            <a className="btn btn-sm btn-outline-secondary" onClick={()=>{MyRouter.Login().Go()}}>Login</a>
                        </div>
                    </div>
                </header>

                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <a className="p-2 link-secondary" href="#home">HOME</a>
                        <a className="p-2 link-secondary" href='#pengumuman' >Pengumuman</a>
                        <a className="p-2 link-secondary" href="#struktur_os">Struktur Organisasi</a>
                        <a className="p-2 link-secondary" href="#berita">Berita</a>
                        {/* <a className="p-2 link-secondary" href="#">Culture</a>
                        <a className="p-2 link-secondary" href="#">Business</a>
                        <a className="p-2 link-secondary" href="#">Politics</a>
                        <a className="p-2 link-secondary" href="#">Opinion</a>
                        <a className="p-2 link-secondary" href="#">Science</a>
                        <a className="p-2 link-secondary" href="#">Health</a>
                        <a className="p-2 link-secondary" href="#">Style</a>
                        <a className="p-2 link-secondary" href="#">Travel</a> */}
                    </nav>
                </div>
            </div>
        </div>
    )

}

export { Navbar , NewNavbar}