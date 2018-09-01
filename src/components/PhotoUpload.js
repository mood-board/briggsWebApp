import React from 'react'


export default class PhotoUpload extends React.Component {
    render() {
        return (
            <div>
                <form action="http://localhost:4000/api/uploads/" method="POST" encType="multipart/form-data">
                    <label for="file">Filenames:</label>
                    <input type="file" name="uploads" id="uploads" multiple />
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
