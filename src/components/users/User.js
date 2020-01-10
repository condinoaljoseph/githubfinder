import React, { Component, Fragment } from 'react';
import Spinner from '../layouts/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company
    } = this.props.user;

    if (this.props.loading) return <Spinner />;

    return (
      <Fragment>
        <div className='d-flex flex-row align-items-center mb-3'>
          <Link to='/' className='btn btn-dark mr-2'>
            Back to Search
          </Link>
          Hireable:
          {hireable ? (
            <i className='fa fa-check text-sucess'></i>
          ) : (
            <i className='fa fa-times-circle text-danger'></i>
          )}
        </div>

        <div className='card p-3 mb-3'>
          <div className='row'>
            <div className='col-md-4 text-center'>
              <img
                src={avatar_url}
                className='rounded-circle'
                alt={login}
                style={{ width: '150px' }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div className='col-md-8'>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                className='btn btn-success mb-1'
                target='_blank'
              >
                Visit Github Profile
              </a>
              <ul className='list-group'>
                <li className='list-group-item'>
                  {login && (
                    <Fragment>
                      <strong>Username:</strong> {login}
                    </Fragment>
                  )}
                </li>
                <li className='list-group-item'>
                  {company && (
                    <Fragment>
                      <strong>Company:</strong> {company}
                    </Fragment>
                  )}
                </li>
                <li className='list-group-item'>
                  {blog && (
                    <Fragment>
                      <strong>Website:</strong> {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='card p-3'>
          <div className='mx-auto'>
            <span className='badge badge-primary mx-2'>
              Followers: {followers}
            </span>
            <span className='badge badge-success mx-2'>
              Following: {following}
            </span>
            <span className='badge badge-danger mx-2'>
              Public Repos: {public_repos}
            </span>
            <span className='badge badge-dark mx-2'>
              Public Gists: {public_gists}
            </span>
          </div>
        </div>

        <Repos repos={this.props.repos} />
      </Fragment>
    );
  }
}

export default User;
