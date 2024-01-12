export const login = (usrtoken,usrname) => {
    return {
      type: 'LOGIN',
      token:usrtoken,
      name:usrname
    };
  };
  
export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
