import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/clubs.scss';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

class Clubs extends Component {
    render() {
        return (<>

            <div className="Monod Clubs">

                <Navigation />
                <section className="hero hero__subpage">
                    <div className="text">
                        <h1 className="slogan">
                            Les activités et clubs proposés aux lycéens.
                        </h1>
                    </div>

                </section>

                <div className="container mb-5">


                    <h2 className="title">Découvrez ce qui fait la vie du lycée</h2>
                    <input type="text" className="form-newsletter my-5" placeholder="Rechercher un club ou une activité..." />

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card__club">
                                <img src={process.env.PUBLIC_URL + "/assets/images/clubs/theatre.webp"} className="card-img-top" alt="Club de théâtre" />
                                <div className="card-body">
                                    <h5 className="card-title">Club de théâtre</h5>
                                    <p className="card-text">Le club de théâtre est un club qui permet aux élèves de s'exprimer et de
                                        développer leur créativité.</p>
                                    <NavLink className="btn btn-link text-dark more" to="/club/EXAMPLE">Découvrir le club <div className="underline"></div></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card__club card__club__recommendation">
                                <img src={process.env.PUBLIC_URL + "/assets/images/clubs/as.webp"} className="card-img-top" alt="Association sportive" />
                                <div className="card-body">
                                    <h5 className="card-title text-red"><i class="fi fi-tr-star-sharp-half-stroke me-2" title="Recommandé"></i>Association sportive</h5>
                                    <p className="card-text">
                                        L'association sportive propose des activités sportives pour les élèves du lycée, moyennant 35€ l'année.
                                    </p>
                                    <NavLink className="btn btn-link text-dark more" to="/club/EXAMPLE">Découvrir le club <div className="underline"></div></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card__club">
                                <img src={process.env.PUBLIC_URL + "/assets/images/clubs/musique.webp"} className="card-img-top" alt="Club musique" />
                                <div className="card-body">
                                    <h5 className="card-title">Club musique</h5>
                                    <p className="card-text">
                                        Le club musique est un club qui permet aux élèves de s'exprimer et de développer leur
                                        créativité.
                                    </p>
                                    <NavLink className="btn btn-link text-dark more" to="/club/EXAMPLE">Découvrir le club <div className="underline"></div></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card__club">
                                <img src={process.env.PUBLIC_URL + "/assets/images/clubs/débat.webp"} className="card-img-top" alt="Club débat" />
                                <div className="card-body">
                                    <h5 className="card-title">Club débat</h5>
                                    <p className="card-text">
                                        Le club débat est un club qui permet aux élèves de s'exprimer, de débattre et de développer leur esprit critique.
                                    </p>
                                    <NavLink className="btn btn-link text-dark more" to="/club/EXAMPLE">Découvrir le club <div className="underline"></div></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>)

    }

}

export default Clubs;