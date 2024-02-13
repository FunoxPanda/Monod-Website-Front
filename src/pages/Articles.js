import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/articles.scss';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

class Articles extends Component {
    render() {
        return (<>

            <div className="Articles ">

                <Navigation />
                <section className="hero hero__subpage">
                    <div className="text">
                        <h1 className="slogan">
                            Ce qu'il se passe entre les murs du lycée.
                        </h1>
                    </div>

                </section>

                <div className="container mb-5">

                    <div className="row">

                        <h2 className="title">Suivez et partagez les actualités du lycée.</h2>
                        <input type="text" className="form-newsletter mt-5" placeholder="Rechercher un article..." />

                        <div className="filters">
                            <span className="tag">Tous</span>
                            <span className="tag">CPGE</span>
                            <span className="tag">Vie lycéenne</span>
                            <span className="tag">Orientation</span>
                            <span className="tag">Voyages/Sorties</span>
                            <span className="tag">Clubs et activités</span>
                            <span className="tag">Inscriptions</span>
                            <span className="tag">Instances</span>
                            
                            <span className="tag"><i class="fi fi-tr-objects-column"></i></span>
                        </div>



                    </div>

                    <div className="row">

                    <div className="col-md-4 mb-2">
                            <NavLink to="/article/lorem-ipsum-dolor-sit-amet-13022024" className="text-decoration-none text-dark">
                                <div className="card card__news">
                                    <img src="https://via.placeholder.com/1920x1080" className="card-img-top" alt="Actualité 3" title="Elèves du lycée lors de la commémoration du 8 mai" loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Commémorations du 8 mai</h5>
                                        <p className="card-text">
                                            Les élèves engagés dans les instances du lycée ont participé aux commémorations du 8
                                            mai d'Enghien-les-Bains et ont pu échanger avec les élus locaux.
                                        </p>

                                        <div className="text-end">
                                            <i className="fi fi-tr-arrow-small-right" ></i>
                                        </div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-4 mb-2">
                            <NavLink to="/article/lorem-ipsum-dolor-sit-amet-13022024" className="text-decoration-none text-dark">
                                <div className="card card__news">
                                    <img src="https://via.placeholder.com/1920x1080" className="card-img-top" alt="Actualité 3" title="Elèves du lycée lors de la commémoration du 8 mai" loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Commémorations du 8 mai</h5>
                                        <p className="card-text">
                                            Les élèves engagés dans les instances du lycée ont participé aux commémorations du 8
                                            mai d'Enghien-les-Bains et ont pu échanger avec les élus locaux.
                                        </p>

                                        <div className="text-end">
                                            <i className="fi fi-tr-arrow-small-right" ></i>
                                        </div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-4 mb-2">
                            <NavLink to="/article/lorem-ipsum-dolor-sit-amet-13022024" className="text-decoration-none text-dark">
                                <div className="card card__news">
                                    <img src="https://via.placeholder.com/1920x1080" className="card-img-top" alt="Actualité 3" title="Elèves du lycée lors de la commémoration du 8 mai" loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Commémorations du 8 mai</h5>
                                        <p className="card-text">
                                            Les élèves engagés dans les instances du lycée ont participé aux commémorations du 8
                                            mai d'Enghien-les-Bains et ont pu échanger avec les élus locaux.
                                        </p>

                                        <div className="text-end">
                                            <i className="fi fi-tr-arrow-small-right" ></i>
                                        </div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-4 mb-2">
                            <NavLink to="/article/lorem-ipsum-dolor-sit-amet-13022024" className="text-decoration-none text-dark">
                                <div className="card card__news">
                                    <img src="https://via.placeholder.com/1920x1080" className="card-img-top" alt="Actualité 3" title="Elèves du lycée lors de la commémoration du 8 mai" loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Commémorations du 8 mai</h5>
                                        <p className="card-text">
                                            Les élèves engagés dans les instances du lycée ont participé aux commémorations du 8
                                            mai d'Enghien-les-Bains et ont pu échanger avec les élus locaux.
                                        </p>

                                        <div className="text-end">
                                            <i className="fi fi-tr-arrow-small-right" ></i>
                                        </div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-4 mb-2">
                            <NavLink to="/article/lorem-ipsum-dolor-sit-amet-13022024" className="text-decoration-none text-dark">
                                <div className="card card__news">
                                    <img src="https://via.placeholder.com/1920x1080" className="card-img-top" alt="Actualité 3" title="Elèves du lycée lors de la commémoration du 8 mai" loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Commémorations du 8 mai</h5>
                                        <p className="card-text">
                                            Les élèves engagés dans les instances du lycée ont participé aux commémorations du 8
                                            mai d'Enghien-les-Bains et ont pu échanger avec les élus locaux.
                                        </p>

                                        <div className="text-end">
                                            <i className="fi fi-tr-arrow-small-right" ></i>
                                        </div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-4 mb-2">
                            <NavLink to="/article/lorem-ipsum-dolor-sit-amet-13022024" className="text-decoration-none text-dark">
                                <div className="card card__news">
                                    <img src="https://via.placeholder.com/1920x1080" className="card-img-top" alt="Actualité 3" title="Elèves du lycée lors de la commémoration du 8 mai" loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Commémorations du 8 mai</h5>
                                        <p className="card-text">
                                            Les élèves engagés dans les instances du lycée ont participé aux commémorations du 8
                                            mai d'Enghien-les-Bains et ont pu échanger avec les élus locaux.
                                        </p>

                                        <div className="text-end">
                                            <i className="fi fi-tr-arrow-small-right" ></i>
                                        </div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </>)

    }

}

export default Articles;