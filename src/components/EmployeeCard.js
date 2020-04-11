import React from "react";
import { connect } from "react-redux";
import { setEmployeeAsMet } from "../redux/actions"

class EmployeeCard extends React.Component {

    render() {
        return (
            <div className="card">
                <img src={this.props.employee.avatar} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title"> {this.props.employee.first_name} {this.props.employee.last_name}</h5>
                    <p className="card-text">{this.props.employee.email}</p>

                </div>
                <div class="card-footer">
                    <small class="text-muted">{this.props.employee.isMet ? <p className="card-text">You have met  {this.props.employee.first_name} </p> : <button className="btn btn-link btn-sm" onClick={e => this.props.setEmployeeAsMet(this.props.employee)}>Met Employee</button>}
                    </small>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { employees, isFetching, totalPages, currentPage, perPage } = state;
    return { employees, isFetching, totalPages, currentPage, perPage };
};

const mapDispatchToProps = {
    setEmployeeAsMet
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeCard);
