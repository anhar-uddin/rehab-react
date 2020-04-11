import React from "react";
import Header from "./components/Header";

import {
    connect
} from "react-redux";

import EmployeeCard from "./components/EmployeeCard.js";

class MetEmployees extends React.Component {

    render() {
        const { metEmployees } = this.props;
        return (
            <div>
                <Header />
                <div className="container">
                    {metEmployees.length ? (
                        <div className="row mt-5">
                            {
                                metEmployees.map(employee => (

                                    <div className="col-4 mt-3">
                                        <EmployeeCard employee={employee} />
                                    </div>

                                ))
                            }
                        </div>
                    ) : (
                            <div className="row mt-5">
                                <div className="col-12">
                                    <div class="jumbotron jumbotron-fluid">
                                        <div class="container">
                                            <h1 className="display-4">Hello</h1>
                                            <p className="lead">You haven't any employees yet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    const { metEmployees } = state;
    return { metEmployees };
};

export default connect(
    mapStateToProps
)(MetEmployees);