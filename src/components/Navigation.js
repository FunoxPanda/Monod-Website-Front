import { Component } from "react";
import { Link, NavLink } from "react-router-dom";


class Navigation extends Component {

    componentDidMount() {

        window.scrollTo(0, 0);

        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 150) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 150) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    render() {
        return (

            <header>
                <nav className="navbar navbar-expand-lg bg-transparent fixed-top py-3" id="navbar">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="Logo Gustave Monod"
                                className="d-inline-block align-text-top monod-logo" />
                        </NavLink> <button className="navbar-toggler" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Accueil</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/formations">Formations</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Vie Lycéenne
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="https://0952196w.esidoc.fr/" target="_blank" rel="noreferrer">Le centre de documentation</a></li>
                                        <li><NavLink className="dropdown-item" to="/clubs/et/activites">Clubs et activités</NavLink></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><NavLink className="dropdown-item" to="/union/lyceene">Union des instances lycéennes</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/404">Partenaires</NavLink>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <Link className="btn-pronote" to="https://0952196w.index-education.net/pronote/?login=true">Ouvrir
                                    Pronote</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navigation;