import {
  RECEIVE_EMPLOYEES,
  REQUEST_EMPLOYEES,
  SHOW_EMPLOYEES,
  SET_EMPLOYEE_MET
} from "./actions";

const employees = (
  state = {
    isFetching: false,
    employees: [],
    totalPages: 0,
    currentPage: 0,
    metEmployees:[]
  },
  action
) => {
  switch (action.type) {
    case REQUEST_EMPLOYEES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_EMPLOYEES:
      return Object.assign({}, state, {
        isFetching: false,
        employees: mappedMetEmployees(state.metEmployees, action.employees),
        totalPages: action.totalPages,
        currentPage: action.currentPage
      });
    case SHOW_EMPLOYEES:
      return Object.assign({}, state, {
        isFetching: false,
        currentPage: action.currentPage
      });
    case SET_EMPLOYEE_MET:
      return Object.assign({}, state, {
        isFetching: false,
        metEmployees: state.metEmployees.concat(action.employee),
        employees: mappedMetEmployees(state.metEmployees.concat(action.employee), state.employees),
      });
    default:
      return state;
  }
};

function mappedMetEmployees(metEmployees, employees) {
  return employees.map(employee => {
    var o = Object.assign({}, employee);
    const isEmployeeMet = metEmployees.find(metEmployee => metEmployee.id === o.id);
    if(isEmployeeMet){
      o.isMet = true;
    } else {
      o.isMet = false;

    }
    return o;
  });
}

export default employees;