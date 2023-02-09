import decode from 'jwt-decode'

const lsKey = 'pokedexToken'

class AuthService {
    getLoggedInUser() {
        return this.getToken() && decode(this.getToken())?.data || false
    }

    loggedIn() {
        const token = this.getToken()
        if (token && !this.isTokenExpired(token)) {
            const decoded = decode(token)
            return decoded
        }
        return false
    }

    isTokenExpired(token) {
        const decoded = decode(token)
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem(lsKey)
            return true
        }
        return false
    }

    getToken() {
        return localStorage.getItem(lsKey)
    }

    login(token) {
        localStorage.setItem(lsKey, token)
        const decoded = decode(token)
        const { _id } = decoded?.data
        window.location.assign(`/trainer/${_id}`)
    }

    logout() {
        localStorage.removeItem(lsKey)
        window.location.assign(`/`)
    }
}

export default new AuthService()