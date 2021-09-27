const default_authenticaded = {
    isAuthenticaded: ((localStorage.getItem('auth'))? true : null)
}
const default_dataHeroes = {
    loading: false,
    success: false,
    error: false,
    data: null
}

export const auth_reducer = (state = default_authenticaded, action) => {
    switch(action.type){
        case "user-authentication":
            return {
                isAuthenticaded: action.payload
            }
        default:
            return state

    }
}

export const dataHeroes_reducer = (state = default_dataHeroes, action) => {
    switch(action.type) {
        case 'request_sent':
            return {
                data: null,
                loading: action.payload,
                success: false,
                error: false,
            }
        case 'request_success':
            return {
                loading: false,
                success: action.payload,
                error: false,
                data: action.data 
            }
        case 'request_error':
            return {
                data: null,
                loading: false,
                success: false,
                error: action.payload,
            }
        default:
            return state
    }
}