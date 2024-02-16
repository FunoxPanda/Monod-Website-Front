import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/others.scss';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

class Plan extends Component {
    render() {
        return (<>

            <div className="Monod Legal">

                <Navigation />
                <section className="hero hero__subpage">

                    <div className="text">
                        <h1 className="slogan">Vous n'avez pas réussi à trouver votre chemin ?</h1>
                    </div>

                </section>

                <div className="container">
                    <h2 className="title">Consultez le plan de notre site</h2>

                    <div className="row px-4 mb-5">
                        <div className="col-md-6">
                            <section className="presentation">

                                <div className="content">
                                    <p className="text">

                                        <ul>
                                            <li><NavLink className="text-link" to="/">Accueil</NavLink></li>
                                            <li><a className="text-link" href="https://0952196w.esidoc.fr/" target="_blank" rel="noreferrer">Le centre de documentation</a></li>
                                            <li><NavLink className="text-link" to="/mentions/legales">Mentions légales</NavLink></li>
                                            <li><NavLink className="text-link" to="/plan">Plan du site</NavLink></li>
                                        </ul>
                                    </p>

                                    <b className="subtitle my-2">Liens divers</b>
                                    <li><NavLink className="text-link" to="/formations">Formations</NavLink></li>
                                    <li><NavLink className="text-link" to="/clubs/et/activites">Clubs et activités</NavLink></li>
                                    <li><NavLink className="text-link" to="/union/lyceene">Union des instances lycéennes</NavLink></li>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </>)

    }

}

export default Plan;