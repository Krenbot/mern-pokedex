import { Link } from "react-router-dom"
import { MdPerson, MdSearch } from 'react-icons/md'
import Auth from '../utils/auth'

const Header = () => {
    const currentUser = Auth.getLoggedInUser()
    const toPath = Auth.loggedIn() ? `/trainer/${currentUser._id}` : '/login'

    return (
        <header className="app-header">

            <Link to={toPath}>
                <div className="lense">
                    <MdPerson size={45} />
                </div>
            </Link>

            <div className="lights">
                <div />
                <div />
                <div />
            </div>

            <Link to='/'>
                <MdSearch color='white' size={35} />
            </Link>

        </header>
    )
}

export default Header