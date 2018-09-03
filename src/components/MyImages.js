import React from 'react'
import UserProfile from '../modules/userProfile';

class MyImages extends React.Component {
    constructor() {
        super()
        this.state = {
            myImages: []
        }
    }

    componentWillMount() {
        var userID = JSON.parse(localStorage.getItem('userData')).user_id;
        
    }
    render() {
        return(
            <div className="container mx-auto">
                <h1>My Images</h1>
            </div>
        )
    }
}


export default MyImages