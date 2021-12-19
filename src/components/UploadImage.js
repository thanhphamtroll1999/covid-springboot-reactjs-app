import React from 'react';

class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar : this.props.avatar
        };

        this.onImageChange = this.onImageChange.bind(this);
      }
    
      onImageChange = async  (event) => {
        console.log(event.target.files[0])
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const base64 = await this.convertBase64(file)
            this.setState({
                avatar: base64
            });
        }
    };

    convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }

    render() {
        return (
            <div>
            <div>
                <div>
                <img src={this.state.avatar} alt="Avatar" width="120px" height="120"></img>
                <br></br>
                <br></br>
                <input type="file" id="upload" onChange={this.onImageChange} />             
                </div>
            </div>
            </div>
        );
    }

}
export default UploadImage;
