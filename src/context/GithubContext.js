import React, { createContext } from "react";
import { initialValues, GithubReducer } from "./GithubReducer";
import axios from 'axios'


const BASE_URL = process.env.REACT_APP_BASE_URL;
const APP_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubContext = createContext()


export const GithubProvider = ({ children }) => {
    const [user, setUser] = React.useState("");

    function handleSearch(event) {
        const value = event.target.value
        setUser(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (user === "") {
            alert('Please type in a username')
        } else {

            fetchUsers()
            setUser('')
        }
    }

    const [state, dispatch] = React.useReducer(GithubReducer, initialValues)

    function setLoading() {
        dispatch({ type: 'GETLOADING' })
    }

    function clearBtn() {
        dispatch({ type: "CLEAR" })
    }

    const params = new URLSearchParams({
        q: user
    })

    const fetchUsers = async () => {
        try {
            const token = {
                headers: {
                    Authorization: "Bearer " + APP_TOKEN,
                }
            }
            setLoading()
            const response = await axios(`${BASE_URL}/search/users?${params}`, token)
            const { items } = response.data
            dispatch(({ type: 'GET_USERS', payload: items }))
        } catch (error) {
            dispatch(({ type: 'ERROR', payload: error }))
        }

    }


    return <GithubContext.Provider value={{ ...state, user, handleSearch, handleSubmit, fetchUsers, clearBtn }}>
        {children}
    </GithubContext.Provider>
}