import React, {Component} from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import BrowseByCategory from './BrowseByCategory'
import UploadListings from './UploadListings'



class IndexController extends Component {
    render() {
        return (
            <main>
                <NavBar />
                <UploadListings />
                {/* <BrowseByCategory /> */}
            </main>
        )
    }
}

export default IndexController