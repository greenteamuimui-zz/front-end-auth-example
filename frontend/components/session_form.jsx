import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, {user: this.state});
    this.props.processForm(user);
  }

  updateState(property) {
    return (e) => {
      this.setState({[property]:e.currentTarget.value});
    };
  }

  renderErrors() {
    return (
      <p>
        {this.props.errors}
      </p>
    );
  }

  render () {
    const formType = this.props.formType;
      return (
        <div>
          <header>Please {formType}!</header>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            <h2>Username</h2>
            <input type="text" value={this.state.username}
            onChange={this.updateState('username')} />
            <h2>Password</h2>
            <input type="password" value={this.state.password}
            onChange={this.updateState('password')} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
  }
}

export default withRouter(SessionForm);
