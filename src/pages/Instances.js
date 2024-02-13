import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/instances.scss';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

class Instances extends Component {
    render() {
        return (<>

            <div className="Instances">

                <Navigation />
                <section className="hero hero__subpage">

                    <div className="text">
                        <h1 className="slogan">L'engagement au coeur du lycée Gustave Monod</h1>
                    </div>

                </section>

                <div className="container">


                    <h2 className="title">L'Union Lycéenne</h2>

                    <div className="row px-4 mb-5">
                        <div className="col-md-6">
                            <section className="presentation">


                                <div className="content">
                                    <p className="text">

                                        L'Union Lycéenne est une charte qui regroupe les différentes instances lycéennes de notre
                                        étalissement. Elle a pour but de fédérer les élèves autour de projets communs, de les aider
                                        à s'engager dans la vie de l'établissement et de les accompagner dans leurs démarches
                                        créatives.
                                        <br /><br />
                                        L'Union Lycéenne est composée du Conseil de Vie Lycéenne (CVL), du Conseil du Service
                                        National (CSN) et de la Maison des Lycéens (MDL). Ces trois instances sont des lieux de
                                        débats, de propositions et de décisions. Elles sont des espaces de démocratie lycéenne où
                                        les élèves peuvent s'exprimer et agir pour améliorer la vie de l'établissement.

                                    </p>
                                </div>

                            </section>
                        </div>
                        <div className="col-md-6 px-4 text-center">
                            <img src={process.env.PUBLIC_URL + "/assets/images/commemorations.webp"} alt="Lycée Gustave Monod" className="img-fluid welcome-img" /><br />
                            <small className="text-muted">8 mai 2023 &copy; CSN Monod</small>
                        </div>
                    </div>


                    <div className="row px-4 my-5">

                        <div className="col-md-6 mb-4">
                            <h3 className="instance-title">Conseil de Vie Lycéenne</h3>

                            <div className="instance-presentation">
                                Le CVL est une instance de l'établissement qui a pour but de favoriser
                                l'autonomie et la responsabilité des élèves. Il est composé de représentants des élèves
                                élus, de représentants des personnels et de représentants des parents d'élèves.
                            </div>


                            <Link to="https://www.instagram.com/cvlmonod" className="more">Accéder au compte Instagram <div className="underline"></div></Link>



                        </div>
                        <div className="col-md-4"></div>

                    </div>
                </div>

                <div className="ul-background"></div>

                <div className="container">
                    <div className="row px-4 my-5">

                        <div className="col-md-6"></div>
                        <div className="col-md-6 mb-4">
                            <h3 className="instance-title">Conseil du Service National</h3>

                            <div className="instance-presentation">
                                Le CSN est une instance de l'établissement qui a pour but de stimuler l'engagement des élèves.
                                Son principal objectif est d'accompagner les élèves dans leurs démarches de citoyenneté et susciter leur engagement au Service National Universel.
                            </div>


                            <Link to="https://www.instagram.com/monod_csn" className="more">Accéder au compte Instagram <div className="underline"></div></Link>



                        </div>

                    </div>

                    <div className="row px-4 my-5">

                        <div className="col-md-6 mb-4">
                            <h3 className="instance-title">Maison des Lycéens</h3>

                            <div className="instance-presentation">
                                La MDL est une association lycéenne de la loi 1901.
                                Elle est composée d'élèves élus et a pour objectif de proposer des activités de détente, de loisirs et de culture pour tous les lycéens. L'adhésion à la MDL est de 10€ par an.
                            </div>


                            <Link to="https://www.instagram.com/monod_mdl" className="more">Accéder au compte Instagram <div className="underline"></div></Link>



                        </div>
                        <div className="col-md-4"></div>

                    </div>
                </div>

            </div>
            <Footer />

        </>)

    }

}

export default Instances;