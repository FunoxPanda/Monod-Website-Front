import { Component } from 'react';
import Navigation from '../components/Navigation';

import '../components/styles/clubs.scss';
import Footer from '../components/Footer';

class ClubPage extends Component {
    render() {
        return (<>

            <div className="Clubs ClubPage">

                <Navigation />
                <section className="hero hero__subpage">
                    <div className="text">
                        <h1 className="slogan">
                            Association sportive
                        </h1>
                    </div>

                </section>

                <div className="container mb-5">

                    <div className="row">

                        <div className="col-md-8">

                            <h2 className="club__title">Présentation</h2>

                            <p>
                                Dolor Lorem cillum irure elit officia magna. Nisi nisi elit labore duis et officia consequat quis culpa. Deserunt est eu consequat velit id dolor aute ipsum adipisicing in aliqua esse consectetur. Sit esse Lorem quis eiusmod cupidatat in eu. Lorem est ipsum mollit adipisicing ad sit dolore occaecat eiusmod laboris eiusmod.<br />
                                Amet eiusmod laborum quis laborum fugiat officia qui excepteur sunt nisi aliqua reprehenderit. Deserunt sit amet eiusmod dolor deserunt. Aliqua est anim sit duis magna culpa duis deserunt veniam proident enim nostrud. In pariatur officia cupidatat deserunt aliquip ipsum esse quis. Est consequat sunt pariatur mollit reprehenderit velit dolor mollit.

                            </p>

                            <h2 className="club__title">Fil d'actualité</h2>

                            <div className="club__news">


                                <div className="club__news__item">
                                    <h3>Victoire UNSS</h3>
                                    <span className="club__news__date">mardi 13 février 2024</span>
                                    <p>
                                        Aujourd'hui, nos élèves ont remporté la compétition de basket-ball UNSS. Félicitations à eux !
                                    </p>

                                    <div className="club__news__item__image">
                                        <img src="https://via.placeholder.com/1920x1080" alt="Placeholder" className="img-fluid" onClick={() => { window.open("https://via.placeholder.com/1920x1080", "_blank") }} />
                                    </div>
                                </div>



                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="club__sidebar">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <h3>Informations</h3>
                                    </div>
                                    <div className="card-body">
                                        <span className="club__info__item">
                                            <b className="club__info__item__label">Nom du club :</b> <span className="club__info__item__value">Association sportive</span>
                                        </span><br />

                                        <span className="club__info__item">
                                            <b className="club__info__item__label">Coût de l'adhésion :</b> <span className="club__info__item__value">20€</span>
                                        </span><br />

                                        <span className="club__info__item">
                                            <b className="club__info__item__label">Lieu :</b> <span className="club__info__item__value">Gymnase</span>
                                        </span><br />

                                        <span className="club__info__item mb-3">
                                            <b className="club__info__item__label">Horaires :</b> <span className="club__info__item__value">Mercredi 14h-16h</span>
                                        </span><br /><br />

                                        <small className="my-3">
                                            <i className="fi fi-tr-ballot me-2" /> Une lettre de motivation est requise pour s'inscrire.<br/>
                                            <i class="fi fi-tr-usd-circle me-2" /> Aucun frais de dossier n'est demandé.
                                        </small>
                                        <br /><br />
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-primary mt-3" type="button">Adhérer au club</button>
                                        </div>

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

export default ClubPage;