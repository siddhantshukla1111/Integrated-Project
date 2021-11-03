import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Landing extends Component {

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }


    render() {
        return (

            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4"style={{color:"darkgreen"}}>Kanban: Personal Project Management Tool</h1>
                                <p className="lead"style={{backgroundColor:"azure",color:"black",fontWeight:"bold"}}>
                                    <hr/>
                                    Signup to Create your account or Login with existing account
                                    <hr />
                            </p>
                                
                                <Link className="btn btn-lg btn-primary mr-2" to="/register"style={{backgroundColor:"darkgreen",width: "200px",
  height: "100px"}}>
                                   <br/>Sign Up
                                    </Link> <br />
                                    <br/>
                                <Link className="btn btn-lg btn-secondary mr-2" to="/login"style={{backgroundColor:"blue",width: "200px",
  height: "100px"}}>
                                   <br/> Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps)(Landing);