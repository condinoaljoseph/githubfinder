import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    if (text === '') {
      alertContext.setAlert('Please enter something', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
    e.preventDefault();
  };

  const onChangeHandler = e => {
    setText(e.target.value);
  };

  return (
    <div className='mb-3'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          className='form-control mb-2'
          value={text}
          onChange={onChangeHandler}
        />
        <input
          type='submit'
          value='Submit'
          className='btn btn-primary btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block mt-2'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
