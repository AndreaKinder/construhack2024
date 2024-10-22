import jsonUsersExemple from '../data/usersExemple.json';

const users = {...jsonUsersExemple}

export const login = ( username, password ) => {
    if (users[username] === password) {
        return true;
    } else {
        return false;
    }
}