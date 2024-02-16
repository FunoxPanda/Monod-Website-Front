import { Component } from "react";
import { Link, NavLink } from "react-router-dom";


class Navigation extends Component {
    componentDidMount() {

        window.scrollTo(0, 0);

        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (!navbar) return;
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
            if (!navbar) return;
            if (window.scrollY > 150) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-lg bg-transparent fixed-top py-3" id="navbar">
                        <div className="container">
                            <NavLink className="navbar-brand" to="/">
                                <img src={process.env.PUBLIC_URL + "/assets/images/logo.webp"} alt="Logo Gustave Monod"
                                    className="d-inline-block align-text-top monod-logo" title="Logo du lycée Gustave Monod" />
                            </NavLink>

                            <button className="navbar-toggler"
                                // offcanva
                                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"

                            >
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
                                        <NavLink className="nav-link" to="/actualites">Actualités</NavLink>
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


                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                            <img src={process.env.PUBLIC_URL + "/assets/images/logotext.webp"} alt="Logo Gustave Monod" style={{ // useRems
                                height: "3rem"
                            }} title="Logo du lycée Gustave Monod" />
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <hr />
                        <NavLink className="text-link" to="/">Accueil</NavLink><br />
                        <NavLink className="text-link" to="/formations">Formations</NavLink><br />
                        <NavLink className="text-link" to="/actualites">Actualités</NavLink><br /><br />


                        <b class="alttabname">Vie Lycéenne</b><br />
                        <NavLink className="text-link" to="/clubs/et/activites">Clubs et activités</NavLink><br />
                        <a className="text-link" href="https://0952196w.esidoc.fr/" target="_blank" rel="noreferrer">Le centre de documentation</a><br />
                        <NavLink className="text-link" to="/union/lyceene">Union des instances lycéennes</NavLink><br /><br /><br />

                        <a className="btn-pronote" href="https://0952196w.index-education.net/pronote/?login=true">Ouvrir Pronote</a>

                    </div>
                </div>

            </>
        );
    }
}

export default Navigation;