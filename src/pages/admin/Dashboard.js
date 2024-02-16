import { Component } from 'react';

import '../../components/styles/admin/dashboard.scss';
import { AdminNavigation } from '../../components/AdminNavigation';

class AdminDashboard extends Component {
    render() {
        return (<>

            <div className="Admin Dashboard">

                <AdminNavigation />

                <div className="container mt-5">

                    <div className="row">
                        <div className="col-xs-12 mb-3">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Propriétés affichées</h5>

                                    <div className="monod-form mb-2">
                                        <label>Slogan du lycée</label>
                                        <input type="text" className="form-control" defaultValue="Là où la passion et l'engagement des lycéens franciliens commence." />
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-md-6 mb-3">

                                            <div className="monod-form mb-2">
                                                <label>Lien cliquable du hero</label>
                                                <input type="text" className="form-control" defaultValue="https://lyc-polyvalent-monod-enghien.fr/jpo2024" />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-6 mb-3">

                                            <div className="monod-form mb-2">
                                                <label>Texte du lien cliquable</label>
                                                <input type="text" className="form-control" defaultValue="Participez aux JPO 2024" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-md-6 mb-3">

                                            <div className="monod-form mb-2">
                                                <label>Nom du proviseur</label>
                                                <input type="text" className="form-control" defaultValue="Pascal Lefèvre" />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-6 mb-3">

                                            <div className="monod-form mb-2">
                                                <label>Lien vers la photo du proviseur</label>
                                                <input type="text" className="form-control" defaultValue="http://localhost:3000/lpo-monod/assets/images/proviseur.webp" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary btn-sm">Enregistrer les modifications</button>
                                    </div>



                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 mb-3">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Formations</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-md-6 mb-3">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Clubs et activités</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>)

    }

}

export default AdminDashboard;