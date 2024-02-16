import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/articles.scss';
import Footer from '../components/Footer';

class ArticlePage extends Component {
    render() {
        return (<>

            <div className="Monod Articles ArticlePage">

                <Navigation />
                <section className="hero hero__subpage">
                    <div className="text">
                        <h1 className="slogan">
                            Inscription et saisie des voeux Parcoursup - terminales générales
                        </h1>
                    </div>

                </section>

                <div className="container mb-5">

                    <div className="row">

                        <h2 className="article__title">
                            <span className="title">Inscription et saisie des voeux Parcoursup - terminales générales</span>
                            <span className="actions">
                                <i class="fi fi-tr-link-alt"></i>
                                <i class="fi fi-tr-share-alt-square"></i>
                            </span>
                        </h2>
                        <span className="article__date">Publié le mardi 13 février 2024 par <b className="text-red">Jean Dupont</b> (dernière modification le mardi 13 février 2024)</span>

                        <div className="line-separator" />

                        <div className="article__content">

                            Chers élèves de terminales générales,<br/>
                            Chers parents,<br/>

                            La procédure Parcoursup d'inscription dans l'enseignement supérieur a débuté le mercredi 17 janvier par l'ouverture du site dédié pour la saisie des voeux dans l'enseignement supérieur : https://www.parcoursup.gouv.fr/<br/><br/>

                            Pour cela, <b>depuis le 17 janvier et jusqu'au 14 mars</b>, chaque élève de terminale doit :<br/><br/>

                            - s'inscrire sur Parcoursup pour créer son dossier de candidat. Pour s'inscrire, chaque élève doit avoir une adresse e-mail personnelle valide et doit connaitre son numéro "INE". Ce numéro INE est indiqué sur les bulletins trimestriels / semestriels de l'élève et sur le relevé de notes des épreuves anticipées de première.<br/><br/>

                            - formule ses vœux de poursuite d'étude. Chaque élève peut formuler jusqu’à 10 vœux (avec possibilité de sous-vœux selon les formations). Il est possible de formuler également 10 vœux supplémentaires pour des formations en apprentissage.<br/><br/>

                            Pour le 14 mars, dernier délai, chaque élève doit avoir formuler l'ensemble de ses voeux. Aucun ajout ne pourra être fait passé cette date.<br/><br/>

                            Une réunion d'information sur la procédure Parcoursup à destination des familles de terminales générales se déroulera dans l'amphithéâtre Lucie Aubrac :<br/><br/>

                            - pour les terminales 1 à 5, le <b>vendredi 02 février à 18h</b><br/><br/>

                            - pour les terminales 6 à 10, le <b>lundi 05 février à 18h</b><br/><br/>

                            Afin de bénéficier de l'aide dans la saisie des voeux, les élèves peuvent solliciter leurs professeurs référents et peuvent demander un entretien avec les psychologues de l'Education Nationale du lycée (prise de rendez-vous au CDI).<br/><br/>

                            Nous restons à votre disposition pour toute question,<br/><br/>

                            Cordialement.<br/><br/>

                            La Direction


                        </div>



                    </div>

                </div>
            </div>
            <Footer />

        </>)

    }

}

export default ArticlePage;