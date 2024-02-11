import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/home.scss';
import Footer from '../components/Footer';
import { Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';


class Home extends Component {
    render() {
        return (<>
            <div className="Home">
                <Navigation />
                <section className="hero">

                    <div className="text">
                        <h1 className="slogan">Là où la passion et l'engagement des<br />lycéens franciliens commence.</h1>
                    </div>
                    <div className="since">
                        <div className="straigth-line"></div>
                        <span className="swann">
                            <img src={process.env.PUBLIC_URL + "/assets/images/swann.png"} alt="2024" />
                        </span>
                        <div className="straigth-line"></div>
                    </div>

                    <div className="cta">
                        <button className="btn-home">PARTICIPEZ AUX JPO 2024 <i className="fa-solid fa-link"></i></button>
                    </div>

                    <div className="scroll d-none d-md-flex">
                        <label>SCROLL</label>
                        <div className="line"></div>
                    </div>

                </section>
                <div className="container">
                    <h2 className="title">Bienvenue au lycée Gustave Monod</h2>

                    <div className="row px-4 mb-5">
                        <div className="col-md-6 mb-2">
                            <section className="presentation">


                                <div className="content">
                                    <p className="text">

                                        Nous sommes un lycée polyvalent d'enseignement public, situé à Enghien-les-Bains,
                                        dans le Val d'Oise. Accueillant depuis 1946 près de 2000 élèves chaque année, nous sommes
                                        fiers de notre histoire et de notre engagement pour la réussite de nos lycéens.

                                        <br /><br />

                                        Gustave Monod est un lycée qui se veut ouvert sur le monde, et qui encourage la curiosité et
                                        le développement personnel de ses élèves.
                                        Nous proposons un large choix de formations, allant de la seconde générale et technologique,
                                        jusqu'aux classes préparatoires aux grandes écoles et aux BTS (Brevet de Technicien
                                        Supérieur).

                                    </p>

                                    <b className="subtitle">Intégrer Gustave Monod</b>

                                    <p className="text">
                                        Les admissions sont ouvertes à tous les élèves du bassin d'Enghien-les-Bains. Déposez votre candidature pour intégrer les sections spéficiques (ABIBAC, Européenne, etc.).
                                        Les admissions pour le supérieur se déroulent, elles, via la procédure Parcoursup.
                                    </p>
                                    <NavLink to="/formations" className="more ms-4">En savoir plus <div className="underline"></div></NavLink>

                                </div>

                            </section>
                        </div>
                        <div className="col-md-6 px-4 text-center">
                            <img src={process.env.PUBLIC_URL + "/assets/images/lycée_2.jpg"} alt="Lycée Gustave Monod" className="img-fluid welcome-img" onClick={
                                () => window.open(process.env.PUBLIC_URL + "/assets/images/lycée_2.jpg", "_blank")
                            } /><br />
                            <small className="text-muted">Château Léon &copy; David Davrain</small>
                        </div>
                    </div>
                    <div className="container-fluid">

                    <div className="sponsors">

                        <Link to="https://sncf.fr/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_SNCF_2011.svg/1024px-Logo_SNCF_2011.svg.png" alt="Sponsor 1" className="sponsor-img" /></Link>
                        <Link to="https://ac-versailles.fr/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Acad%C3%A9mie_de_Versailles.svg/640px-Acad%C3%A9mie_de_Versailles.svg.png" alt="Sponsor 2" className="sponsor-img" /></Link>
                        <Link to="https://www.greta-95.fr/5-accueil"><img src="https://mlab-mlidf.org/wp-content/uploads/job-manager-uploads/company_logo/2021/11/logo_greta_du_val_doise.png" alt="Sponsor 3" className="sponsor-img" /></Link>

                    </div>
                    </div>

                    <div className="row px-4 mb-5">
                        <section className="news">
                            <h2 className="title my-5">Actualités</h2>

                            <div className="row">

                                <div className="col-md-4 mb-2">
                                    <div className="card card__news">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/lycée.jpg"} className="card-img-top" alt="Actualité 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Inauguration du site Jardin</h5>
                                            <p className="card-text">
                                                Le lycée Gustave Monod a inauguré son nouveau site Jardin, un espace de détente et
                                                de
                                                travail pour les élèves, en présence de Valérie Pécresse.
                                            </p>

                                            <div className="text-end">
                                                <i className="fa-solid fa-arrow-right" onClick={() => { toast('Cette fonctionnalité n\'est pas encore disponible', { icon: '🔍' }) }} ></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="card card__news">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/actu/course.jpg"} className="card-img-top" alt="Actualité 2" />
                                        <div className="card-body">
                                            <h5 className="card-title">Course solidaire du lycée</h5>
                                            <p className="card-text">
                                                S'est déroulée le 25 mai dernier la course solidaire du lycée, organisée par les
                                                élèves du CSN. Plus de 1400€ ont été récoltés pour l'association Du Côté des Femmes.
                                            </p>

                                            <div className="text-end">
                                                <i className="fa-solid fa-arrow-right" onClick={() => { toast('Cette fonctionnalité n\'est pas encore disponible', { icon: '🔍' }) }} ></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="card card__news">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/actu/commemorations.jpg"} className="card-img-top" alt="Actualité 3" />
                                        <div className="card-body">
                                            <h5 className="card-title">Commémorations du 8 mai</h5>
                                            <p className="card-text">
                                                Les élèves engagés dans les instances du lycée ont participé aux commémorations du 8
                                                mai d'Enghien-les-Bains et ont pu échanger avec les élus locaux.
                                            </p>

                                            <div className="text-end">
                                                <i className="fa-solid fa-arrow-right" onClick={() => { toast('Cette fonctionnalité n\'est pas encore disponible', { icon: '🔍' }) }} ></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <NavLink to="/actualites" className="more ms-4">Voir toutes nos actualités <div className="underline"></div></NavLink>


                        </section>
                    </div>


                </div>

                <div className="monod-background"></div>

                <div className="container">
                    <div className="row px-4 mb-5">
                        <section className="proviseur-mot">
                            <h2 className="title my-5">Le mot du proviseur</h2>

                            <div className="row">

                                <div className="col-md-6 mb-2">

                                    <p className="text">
                                        L'ensemble des équipes vous souhaite la bienvenue sur le site du lycée Polyvalent Gustave
                                        Monod.<br /><br />

                                        Vous pourrez y retrouver l'ensemble des informations sur les filières générales,
                                        technologiques et professionnelles, sur la vie du lycée et sur les nombreux projets proposés
                                        aux élèves.<br /><br />

                                        Ce lycée, qui accueille 2100 élèves et apprentis, offre également la possibilité
                                        de poursuivre ses études en MC, en BTS et en CPGE.

                                        Ce site a la volonté de mettre en avant
                                        notre dynamisme, notre engagement, notre volonté d'innovations au service de la réussite de
                                        tous les élèves et étudiants.<br /><br />

                                        Nous sommes impatients de vous retrouver dans notre lycée qui
                                        présente 2 sites, un site 'Lac' et un site 'Jardin' entièrement rénové.Vous pouvez également
                                        suivre l'actualité du lycée via le <a href="https://twitter.com/search?q=%23monodelb"
                                            className="text-link">#MonodElB</a>.<br /><br />
                                        Bonne visite
                                    </p>

                                </div>

                                <div className="col-md-6 mb-2">

                                    <div className="proviseur">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/proviseur.jpg"} className="img-proviseur" alt="Proviseur" />
                                        <span className="name">M. Pascal Lefèvre</span>
                                        <span className="fonction">Proviseur depuis 2023</span>
                                    </div>
                                </div>





                            </div>
                        </section>

                        <div className="row px-4 mb-5">
                            <section className="contact mb-5">
                                <h2 className="title my-5">Newsletter</h2>

                                <div className="row">
                                    <div className="col-md-6">

                                        <p className="text">
                                            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités du lycée Gustave
                                            Monod
                                            directement dans votre boîte mail.
                                        </p>

                                        <input type="email" className="form-newsletter" placeholder="Adresse éléctronique" />

                                        <button className="btn-newsletter">S'abonner à la MonodInfo'</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
        );
    }
}

export default Home;