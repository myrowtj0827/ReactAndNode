import React from 'react';

class ForgotPassword extends React.Component {
  render() {   
      return (
        <div class="mt-4 d-flex flex-column align-center">
            <div className="center-container"><h1 className="auth-sub-header1">
        Forgot your password ?
       </h1>
        <form>
        <fieldset className="input-group mt-4">
           <fieldset className="form-group">                    
             <input
               className="form-control custom-input"
               type="email"
               placeholder="Enter your email"
               value={this.props.email}
               onChange={ (e) => this.props.onUpdateField('email', e.target.value)} 
               required /> </fieldset>
           </fieldset>
           
           <fieldset className="form-group mt-4 mb-4">
                    <button
                      className="btn submit-btn"
                      type="submit"
                      disabled={this.props.inProgress}>
                      Send
                    </button>
                
                    
                </fieldset>
           </form></div></div>
      );
    
  }
}

export default ForgotPassword;
