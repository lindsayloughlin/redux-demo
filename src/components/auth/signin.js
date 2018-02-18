import React, {Component} from 'react'
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../../actions/index'

const renderInput = field => (
    <div>
        <input {...field.input} type={field.type}/>
        {
            field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>
        }
    </div>);

class Signin extends Component {

    handleFormSubmit({email, password}) {
        console.log(email, password);
        console.log(this.props);
        this.props.signinUser({email, password});
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="aler alert-danger">
                    <strong>
                        Ooops!
                    </strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {

        const {handleSubmit} = this.props;
        //const { handleSubmit, fields: { email, password }} = this.props;
        // console.log(this.props);

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                <div className="field">
                    <label>Email:</label>
                    <Field
                        name="email"                            // Specify field name
                        component={renderInput}        // Specify render component above
                        type="email"                            // Specify "type" prop passed to renderInput
                    />
                </div>
                <div className="field">
                    <label>Password:</label>
                    <Field
                        name="password"                        // Specify field name
                        component={renderInput}        // Specify render component above
                        type="password"                        // Specify "type" prop passed to renderInput
                    />
                    {/* <input {...password} placeholder="password" type="password" /> */}
                </div>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>)
    }
}

function mapStateToProps(state) {

    if (!state.authReducer) {
        return {}
    }
    //console.log(`mapStateToProps ${state}`);
    return { errorMessage: state.authReducer.error }
}

export default reduxForm({
    form: 'signin'    // no fields array given
})(
    connect(mapStateToProps, actions)(Signin)
);

// Sigin = reduxForm({
//     form: 'signin',
//     fields: ['email', 'password']
// }, null, actions)(Signin)
// export default Signin;