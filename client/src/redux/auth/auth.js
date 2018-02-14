import axios from "axios";

export function signup(credentials) {
    return dispatch => {
        axios.post("/auth/signup", credentials)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = JSON.stringify(token);
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

export function login(credentials) {  
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const {token, user} = response.data;
                localStorage.token = JSON.stringify(token);
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export function logout() {  
    delete localStorage.token;
    delete localStorage.user;
    return {
        type: "LOGOUT"
    }
}

const intitialState = {
    username: "",
    isAdmin: false,
    isAuthenticated: false
}

export default function reducer(state = intitialState, action){
    switch(action.type){
        case "AUTHENTICATE":
            return{
                ...state,
                ...action.user,
                isAuthenticated: true
            };
        case "LOGOUT":
            return intitialState;

        default:
            return state;
    }
}