import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card p-3 mt-2'>
      <h5>
        <a href={repo.html_url} target='_blank'>
          {repo.name}
        </a>
      </h5>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
