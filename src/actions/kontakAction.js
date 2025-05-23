import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const getListKontak = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: "GET_LIST_KONTAK",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
 
    //get API
    axios({
       method: 'GET',
       url: 'http://localhost:3000/kontaks',
       timeout: 12000 
    }).then((response)=> {
        console.log('res', response);
        dispatch({
            type: "GET_LIST_KONTAK",
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
    }).catch((error)=> {
        dispatch({
            type: "GET_LIST_KONTAK",
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
    });
  };
};

export const addKontak = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: "ADD_KONTAK",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
 
    //get API
    axios({
       method: 'POST',
       url: 'http://localhost:3000/kontaks',
       timeout: 12000,
       data: data, 
    }).then((response)=> {
        console.log('res', response);
        dispatch({
            type: "ADD_KONTAK",
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
    }).catch((error)=> {
        dispatch({
            type: "ADD_KONTAK",
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
    });
  };
};

