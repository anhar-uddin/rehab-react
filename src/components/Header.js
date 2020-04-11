import React from "react";
import { connect } from "react-redux";
import { setEmployeeAsMet } from "../redux/actions"
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEB-QpuDIseSQ/company-logo_200_200/0?e=2159024400&v=beta&t=lvXGd_hd2lyxHW69VeVFdikW7-C3NRkIUBudmOKXmbo" width="100" height="100" className="d-inline-block align-top" alt=""/>
                </a>
                <NavLink
                    to='/met-employees'
                >
                    <button className="btn btn-primary btn-sm">See Employees Met</button>
                </NavLink>
            </nav>

        )
    }
}


export default Header;
