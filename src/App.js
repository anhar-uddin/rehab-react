import React from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "./redux/actions";
import { showEmployees } from "./redux/actions";
import EmployeeCard from "./components/EmployeeCard.js";
import Header from "./components/Header.js";

class App extends React.Component {

  componentDidMount() {
    this.props.fetchEmployees(parseInt(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      setTimeout(() => {
        this.props.fetchEmployees(parseInt(this.props.match.params.id));
      })
    }
  }

  handlePageChange(pageNumber) {
    this.props.history.push('/employees/' + pageNumber)
  }

  createPaginationNav() {

    return new Array(this.props.totalPages).fill(0).map((zero, index) =>
      <li className={`page-item ${this.props.currentPage === index + 1 ? "active" : ""}`} key={index + 1} onClick={() => this.handlePageChange(index + 1)}>
        <a className="page-link">{index + 1}</a>
      </li>
    )
  }

  render() {
    const { employees, isFetching, metEmployees } = this.props;
    return (
      <div className="">
        <Header />
        {isFetching ? (
          <span>Loading...</span>
        ) : (
            <div className="container">
              <div className="row mt-5">
                {
                  employees.map(employee => (

                    <div className="col-4 mt-3">
                      <EmployeeCard employee={employee} />
                    </div>

                  ))
                }
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      {this.createPaginationNav()}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { employees, isFetching, totalPages, currentPage, perPage, metEmployees } = state;
  return { employees, isFetching, totalPages, currentPage, perPage, metEmployees };
};

const mapDispatchToProps = {
  fetchEmployees,
  showEmployees
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
