import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/clubs.scss';
import Footer from '../components/Footer';

class Clubs extends Component {
    render() {
        return (<>

            <div className="Clubs">

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
                                <img src={process.env.PUBLIC_URL + "/assets/images/clubs/theatre.jpg"} className="card-img-top" alt="Club de théâtre" />
                                <div className="card-body">
                                    <h5 className="card-title">Club de théâtre</h5>
                                    <p className="card-text">Le club de théâtre est un club qui permet aux élèves de s'exprimer et de
                                        développer leur créativité.</p>
                                    <button className="btn btn-link text-dark more">Découvrir le club <div className="underline"></div></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card__club card__club__recommendation">
                                <img src={process.env.PUBLIC_URL + "/assets/images/clubs/as.jpg"} className="card-img-top" alt="Association sportive" />
                                <div className="card-body">
                                    <h5 className="card-title text-red"><i className="fas fa-star text-red me-2"></i> Association sportive</h5>
                                    <p className="card-text">
                                        L'association sportive propose des activités sportives pour les élèves du lycée, moyennant 35€ l'année.
                                    </p>
                                    <button className="btn btn-link text-dark more">Découvrir le club <div className="underline"></div></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card__club">
                                <img src={process.env.PUBLIC_URL + "/assets/images/clubs/musique.jpg"} className="card-img-top" alt="Club musique" />
                                <div className="card-body">
                                    <h5 className="card-title">Club musique</h5>
                                    <p className="card-text">
                                        Le club musique est un club qui permet aux élèves de s'exprimer et de développer leur
                                        créativité.
                                    </p>
                                    <button className="btn btn-link text-dark more">Découvrir le club <div className="underline"></div></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card__club">
                                <img src={process.env.PUBLIC_URL + "/assets/images/clubs/débat.jpg"} className="card-img-top" alt="Club débat" />
                                <div className="card-body">
                                    <h5 className="card-title">Club débat</h5>
                                    <p className="card-text">
                                        Le club débat est un club qui permet aux élèves de s'exprimer, de débattre et de développer leur esprit critique.
                                    </p>
                                    <button className="btn btn-link text-dark more">Découvrir le club <div className="underline"></div></button>
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