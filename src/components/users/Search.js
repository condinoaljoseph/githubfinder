import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propType = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmitHandler = e => {
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'danger');
    } else {
      this.props.searchUsers(this.state.text);
    }
    e.preventDefault();
  };

  onChangeHandler = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div className='mb-3'>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            className='form-control mb-2'
            onChange={this.onChangeHandler}
          />
          <input
            type='submit'
            value='Submit'
            className='btn btn-primary btn-block'
          />
        </form>
        {showClear > 0 && (
          <button className='btn btn-light btn-block mt-2' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
