import { URL } from './Index';
import { isNumber } from 'util';

export const fetchEmployee = async page =>{
  const response = await fetch(
    `${URL}employees/page/${page}`
  );
  const employee = response.json();
  return employee;
}

export const fetchBranch = async ()=>{
  const response = await fetch(
    `${URL}branch`
  );
  const branch = response.json();
  return branch;
}

export const fetchDepartment = async ()=>{
  const response = await fetch(
    `${URL}department`
  );
  const department = response.json();
  return department;
}

export const fetchPosition = async ()=>{
  const response = await fetch(
    `${URL}position`
  );
  const position = response.json();
  return position;
}

export const fetchGroupPosition = async ()=>{
  const response = await fetch(
    `${URL}group_position`
  );
  const group_position = response.json();
  return group_position;
}

export const fetchFindEmployee = async value =>{
  let response = '';
  if(parseInt(value)){
    response = await fetch(
      `${URL}employee?phone=${value}`
    );
  }
  else{
    response = await fetch(
      `${URL}employee?name=${value}`
    );
  }
  const find = response.json();
  return find;
}

export const fetchLogin = async (username,password)=>{
  const settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  };

  const response = await fetch(
    `${URL}login`, settings
  )
  const login = response.json();
  return login;
}