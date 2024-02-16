import React from 'react';
import { NavLink } from 'react-router-dom';

class AdminNavigation extends React.Component {

    render() {

        return (
            < nav className="navbar navbar-expand-lg bg-white" >
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={process.env.PUBLIC_URL + "/assets/images/rf.png"} alt="logo" className="brand-img" />
                        <div className="school-detail">
                            <span className="name">Lycée Gustave Monod</span><br />
                            <span className="city">Enghien-les-Bains</span>
                        </div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/tableau/de/bord">Tableau de bord</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/parametres">Paramètres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/actualites">Actualités<span className="badge__news" title="Publication en attente de validation">9</span></NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <NavLink className="btn btn-link text-decoration-none text-primary fs-875" to="/">Retour au site</NavLink>
                        </div>
                    </div>
                </div>
            </nav >
        )

    }

}

export { AdminNavigation };