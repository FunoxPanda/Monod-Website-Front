import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/others.scss';
import Footer from '../components/Footer';

class Clubs extends Component {
    render() {
        return (<>

            <div className="Legal">

                <Navigation />
                <section className="hero hero__subpage">

                    <div className="text">
                        <h1 className="slogan">Mentions légales</h1>
                    </div>

                </section>

                <div className="container">
                    <h2 className="title">Découvrez qui gère notre site</h2>

                    <div className="row px-4 mb-5">
                        <div className="col-md-6">
                            <section className="presentation">


                                <div className="content">
                                    <p className="text">

                                        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                                        l'économie numérique, il est précisé aux utilisateurs du site <b>www.lyc-polyvalent-monod-enghien.fr</b> l'identité des différents intervenants dans le
                                        cadre de sa réalisation et de son suivi :<br /><br />

                                        Propriétaire: <b>Lycée Polyvalent Gustave Monod – 71 Avenue de Ceinture, 95880
                                            Enghien-les-Bains</b><br />
                                        Directeur de la publication : <b>Pascal LEFÈVRE</b><br />
                                        Responsable d'édition : <b>Pascal LEFÈVRE</b><br />
                                        Hébergeur : <b>DSI du rectorat de Versailles</b><br />
                                        Adresse de l'hébergeur : <b>3 boulevard de Lesseps, Versailles</b><br />
                                        Webmestre : <b>Douglas SOUCHU</b><br /><br />


                                    </p>

                                    <b className="subtitle my-2">Droits d'auteur</b>

                                    <p className="text">
                                        Ce site relève de la législation française et internationale sur le droit d'auteur et la
                                        propriété intellectuelle.<br /><br />

                                        Tous les droits de reproduction sont réservés.
                                    </p>

                                    <b className="subtitle my-2">Liens hypertextes</b>
                                    <p className="text">
                                        Ce site contient des liens hypertextes permettant l'accès à des sites qui ne sont pas édités
                                        par
                                        le responsable de ce site.<br /><br />

                                        En conséquence le directeur de publication ne saurait être tenu pour responsable du contenu
                                        des
                                        sites auxquels l'internaute aurait ainsi accès.<br /><br />

                                        Il est formellement interdit de collecter et d'utiliser les informations disponibles sur le
                                        site
                                        à des fins commerciales.<br /><br />

                                        Cette interdiction s'étend notamment, sans que cette liste ne soit limitative, à tout
                                        élément
                                        rédactionnel figurant sur le site, à la présentation des écrans, aux logiciels nécessaires à
                                        l'exploitation, aux logos, images, photos, graphiques, de quelque nature qu'ils soient.
                                    </p>
                                    <b className="subtitle my-2">Liens hypertextes vers ce site</b>
                                    <p className="text">
                                        À l'exception de sites diffusant des informations et/ou contenus ayant un caractère illégal
                                        et/ou à caractère politique, religieux, pornographique, xénophobe, vous pouvez créer un lien
                                        hypertexte vers notre Site sur votre site.<br /><br />

                                        La mise en place de lien hypertexte n'autorise en aucune façon la reproduction d'éléments du
                                        site ou la présentation sur des sites tiers d'éléments du Site sous forme de Frame ou
                                        système
                                        apparenté.<br /><br />

                                        Enfin, la mise en place de lien hypertexte n'autorise en aucune façon de proposer l'envoi
                                        d'un
                                        message pré-rédigé à une adresse mail liée au Site ou la mise en place d'un système
                                        permettant
                                        l'envoi massif de messages quelle qu'en soit la nature.
                                    </p>

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

export default Clubs;