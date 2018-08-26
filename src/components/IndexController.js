import React, {Component} from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import BrowseByCategory from './BrowseByCategory'



class IndexController extends Component {
    render() {
        return (
            <main>
                <NavBar />
                {/* <UploadListing /> */}
                <BrowseByCategory />
                <Link to="/accounts/settings">Settings</Link>
            </main>
        )
    }
}

export default IndexController