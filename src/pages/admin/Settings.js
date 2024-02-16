import { Component } from 'react';

import '../../components/styles/admin/dashboard.scss';
import { AdminNavigation } from '../../components/AdminNavigation';
import { Link } from 'react-router-dom';

class AdminSettings extends Component {
    render() {
        return (<>

            <div className="Admin Settings">

                <AdminNavigation />

                <div className="container mt-5">

                    <div className="alert alert-danger">
                        <i className="fa-solid fa-exclamation-triangle"></i> <b>Information</b> : Vous pouvez contacter le développeur pour obtenir de l'aide sur l'administration du site et la correction de bugs en <Link to="mailto:e.rodriguesdeoliveir@gmail.com" className="text-link fw-bold">cliquant ici</Link>.
                    </div>
                    <div className="row">
                        <div className="col-xs-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Utilisateurs accrédités</h5>


                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Identifiant</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>nicolas.ruffin</td>
                                                    <td>
                                                        <span className="badge__group bg-superviseur">Superviseur</span>
                                                    </td>
                                                    <td>
                                                        <i class="fi fi-tr-key-skeleton-left-right me-2" title="Copier le mot de passe" />
                                                        <i class="fi fi-tr-rectangle-xmark" title="Révôquer l'identifiant" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>ewen.rdo</td>
                                                    <td>
                                                        <span className="badge__group bg-publieur">Publieur</span>
                                                    </td>
                                                    <td>
                                                        <i class="fi fi-tr-key-skeleton-left-right me-2" title="Copier le mot de passe" />
                                                        <i class="fi fi-tr-rectangle-xmark" title="Révôquer l'identifiant" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input type="text" className="form-control" placeholder="Nouvel identifiant" /></td>
                                                    <td>
                                                        <select className="form-select">
                                                            <option selected disabled>Choisir un type</option>
                                                            <option disabled>--------------------</option>
                                                            <option value="1">Superviseur</option>
                                                            <option value="2">Publieur</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <i class="fi fi-tr-square-plus" title="Ajouter un nouvel identifiant" />
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="text-muted mt-3">
                                        Il existe différents types d'utilisateurs :
                                        <ul>
                                            <li>Superviseur : a accès à toutes les fonctionnalités de l'administration</li>
                                            <li>Publieur : a accès à la gestion des actualités <b>(Un superviseur devra valider les publications avant qu'elles ne soient publiques)</b></li>
                                        </ul>
                                    </p>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>

            </div>

        </>)

    }

}

export default AdminSettings;