import { Component } from "react";
import { Link, NavLink } from "react-router-dom";


class Footer extends Component {

    render() {
        return (<>
            <footer>

                <div className="container">

                    <div className="text-center">

                        <img src={process.env.PUBLIC_URL + "/assets/images/logotext.png"} alt="Logo Gustave Monod" className="footer-logo mb-3" />
                    </div>

                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <h5 className="footer-title">Liens utiles</h5>
                            <ul>
                                <li><Link to="https://0952196w.index-education.net/pronote/?login=true">Accès Pronote</Link></li>
                                <li><NavLink to="/mentions/legales">Mentions légales</NavLink></li>
                                <li><NavLink to="/plan">Plan du site</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-3">

                            <h5 className="footer-title">Contact</h5>
                            <p>Adresse : 71 Avenue de Ceinture, 95880 Enghien-les-Bains</p>
                            <p>Téléphone : (+33) 01 39 89 32 41</p>
                            <p>Email : <a href="mailto:0952196w@ac-versailles.fr" className="text-link">0952196w@ac-versailles.fr</a></p>


                        </div>
                    </div>
                </div>


            </footer>
            <div className="subfooter">
                <p>
                    2024 &copy; Tous droits réservés<br />
                    Lycée Polyvalent Gustave Monod
                </p>
            </div>
        </>
        );
    }
}

export default Footer;