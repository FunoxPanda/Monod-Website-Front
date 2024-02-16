import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/formations.scss';
import Footer from '../components/Footer';

class Formations extends Component {
    render() {
        return (<>

            <div className="Monod Formations">

                <Navigation />
                <section className="hero hero__subpage">

                    <div className="text">
                        <h1 className="slogan">L'épanouissement des élèves dans nos sections.</h1>
                    </div>

                </section>


                <div className="container">


                    <h2 className="title">Découvrez les sections du lycée</h2>
                    <input type="text" className="form-newsletter my-5" placeholder="Rechercher une section..." />

                        <h3 className="subsection">Sections réservées aux lycéens</h3>
                        <div className="row mb-5">
                            <div className="col-md-4 mb-4">

                                <div className="card card__section">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/sections/abibac.webp"} className="card-img-top" alt="Section Abibac" />
                                        <div className="card-body">
                                            <h5 className="card-title">Abibac</h5>

                                            <p className="card-text">
                                                La section Abibac est une section binationale franco-allemande, qui permet l'obtention du
                                                baccalauréat français et de l'Abitur. Monod est le premier lycée à avoir ouvert cette
                                                section.
                                            </p>



                                            <div className="text-end">
                                                <i class="fi fi-tr-arrow-small-right"></i>
                                            </div>
                                        </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card card__section">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/sections/euro.webp"} className="card-img-top" alt="Section Européenne" />
                                        <div className="card-body">
                                            <h5 className="card-title">Européenne Anglais/Allemand</h5>

                                            <p className="card-text">
                                                La section européenne permet d'obtenir une mention européenne au baccalauréat. Les élèves
                                                renforcent la langue choisie lors de cours d'histoire-géographie ou en mathématiques.

                                            </p>



                                            <div className="text-end">
                                                <i class="fi fi-tr-arrow-small-right"></i>
                                            </div>
                                        </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card card__section">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/sections/upe2a.webp"} className="card-img-top" alt="UPE2A" />
                                        <div className="card-body">
                                            <h5 className="card-title">UPE2A</h5>

                                            <p className="card-text">
                                                L'Unité Pédagogique pour Elèves Allophones Arrivants est une section qui permet aux élèves
                                                allophones de suivre des cours de français et de s'intégrer dans le système scolaire français.

                                            </p>



                                            <div className="text-end">
                                                <i class="fi fi-tr-arrow-small-right"></i>
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>

                        <h3 className="subsection">Sections réservées aux étudiants</h3>

                        <div className="row mb-5">
                            <div className="col-md-4 mb-4">
                                <div className="card card__section">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/sections/mpsi.webp"} className="card-img-top" alt="MPSI" />
                                        <div className="card-body">
                                            <h5 className="card-title">MPSI</h5>

                                            <p className="card-text">
                                                La classe préparatoire MPSI est une section qui prépare les élèves aux concours des grandes
                                                écoles d'ingénieurs. Les élèves suivent des cours de mathématiques, physique et sciences de
                                                l'ingénieur.
                                            </p>



                                            <div className="text-end">
                                                <i class="fi fi-tr-arrow-small-right"></i>
                                            </div>
                                        </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card card__section">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/sections/pcsi.webp"} className="card-img-top" alt="PCSI" />
                                        <div className="card-body">
                                            <h5 className="card-title">PCSI</h5>

                                            <p className="card-text">
                                                La classe préparatoire PCSI est une section qui prépare les élèves aux concours des grandes
                                                écoles d'ingénieurs. Les élèves suivent des cours intensifs de physique, chimie et sciences de
                                                l'ingénieur.
                                            </p>



                                            <div className="text-end">
                                                <i class="fi fi-tr-arrow-small-right"></i>
                                            </div>
                                        </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card card__section">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/sections/kagne.webp"} className="card-img-top" alt="Khâgne" />
                                        <div className="card-body">
                                            <h5 className="card-title">Hypokhâgne</h5>

                                            <p className="card-text">
                                                La classe préparatoire Hypokhâgne est une section qui prépare les élèves aux concours des
                                                grandes écoles de lettres. Les élèves suivent des cours de lettres, philosophie et langues
                                                anciennes.
                                            </p>



                                            <div className="text-end">
                                                <i class="fi fi-tr-arrow-small-right"></i>
                                            </div>
                                        </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card card__section">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/sections/arbitrage.webp"} className="card-img-top" alt="Section arbitrage" />
                                        <div className="card-body">
                                            <h5 className="card-title">Classe arbitrage</h5>

                                            <p className="card-text">
                                                La classe arbitrage est une section sportive qui permet aux élèves de se former à
                                                l'arbitrage dans le cadre de leurs études supérieurs. Les élèves peuvent obtenir un diplôme
                                                d'arbitrage.

                                            </p>



                                            <div className="text-end">
                                                <i class="fi fi-tr-arrow-small-right"></i>
                                            </div>
                                        </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card card__section">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/sections/bts.webp"} className="card-img-top" alt="BTS" />
                                        <div className="card-body">
                                            <h5 className="card-title">Brevets de Technicien Supérieur</h5>

                                            <p className="card-text">
                                                Nous proposons des BTS en alternance ou en initial. Les élèves peuvent
                                                obtenir un BTS CRSA, Electrotechnique ou Conseil et Commercialisation de Solutions Techniques.

                                            </p>



                                            <div className="text-end">
                                                <i class="fi fi-tr-arrow-small-right"></i>
                                            </div>
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

export default Formations;