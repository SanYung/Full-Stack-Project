import React from 'react';


class AddPhoto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            photoFile: "",
            photoUrl: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: false,
            photoUrl: this.props.currentUser.photo,
        })
    }


    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append("user[photo]", this.state.photoFile);
        }
        $.ajax({
            url: `/api/users/${this.props.currentUser.id}`,
            method: "PATCH",
            data: formData,
            contentType: false,
            processData: false,
        }).then(
            (response) => {
                this.props.updateUser(response)
                this.props.closeModal()
                .then(window.location.reload());
            
            }
        );
    }

    render() {

        const preview = (
            <img src={this.state.photoUrl ? this.state.photoUrl : ""} /> 
        );

        return this.state.loading ? (
            <>Loading</>
        ) : (
                <div className= "photo-form">
                    <form onSubmit={this.handleSubmit}>
                        <h2 id="photo-title"> Add A Profile Photo</h2>
                        <div id="photo-preview">{preview}</div>
                            <div>

                            <label
                                htmlFor="file-upload"
                                className="modal-upload-button"
                            />
                        
                            <input
                                id="photo-input-field"
                                key={this.state.photoUrl}
                                type="file"
                                onChange={(event) => this.handleFile(event)}
                            />
                            </div>
                            <button onSubmit={this.handleSubmit} id="photo-button"> Save Changes</button>

                    </form>
                </div>
            );
    }
}

export default AddPhoto


