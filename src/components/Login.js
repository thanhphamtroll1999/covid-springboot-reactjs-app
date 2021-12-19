// import React from 'react';


// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             username: "",
//             password: ""
//         }
//     }

//     onChangeUsername(e) {
//         this.setState({
//           username: e.target.value
//         });
//     }
    
//     onChangePassword(e) {
//         this.setState({
//             password: e.target.value
//         });
//     }

//     render() {
//         return (
//             <form className="form-login">
//                 <div className="col-md-12">
//                     <div className="card card-container">
//                     <img
//                         src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//                         alt="profile-img"
//                         className="profile-img-card"
//                     />
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <label>Username</label>
//                     <input type="text" placeholder="username" onChange={this.onChangeUsername}/>
//                     <label>Password</label> 
//                     <input type="password" onChange ={this.onChangePassword}/>           
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         )  
//       }
// }

// export default Login;