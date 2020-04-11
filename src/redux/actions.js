export const REQUEST_EMPLOYEES = "REQUEST_EMPLOYEES";

function requestEmployees() {
  return {
    type: REQUEST_EMPLOYEES
  };
}

export const RECEIVE_EMPLOYEES = "RECEIVE_EMPLOYEES";

function receiveEmployees(json, currentPage) {
  return {
    type: RECEIVE_EMPLOYEES,
    employees: json.data,
    totalPages: json.total_pages,
    currentPage: currentPage,
    perPage: 6
  };
}

export const SHOW_EMPLOYEES = "SHOW_EMPLOYEES";

export function showEmployees(employees, currentPage) {
  return {
    type: SHOW_EMPLOYEES,
    employees: employees,
    currentPage: currentPage,
  };
}

export const SET_EMPLOYEE_MET = "SET_EMPLOYEE_MET";

export function setEmployeeAsMet(employee) {
  employee.isMet = true;
  return {
    type: SET_EMPLOYEE_MET,
    employee: employee
  };
}


export function fetchEmployees(pageNumber) {
  return function (dispatch) {
    dispatch(requestEmployees());
    return fetch("https://reqres.in/api/users?per_page=6&delay=2&page=" + pageNumber)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(receiveEmployees(json, pageNumber)));
  };
}