import React, { Component } from 'react';
// import './App.css';


class App extends Component {
  constructor(props) {
  super(props)
  
  this.state  = {
    isLoading: true,
    users: [],
    error: null,
    }
  }
// fetching data from api url
fetchUsers() {
  // fetch(`https://jsonplaceholder.typicode.com/users`)
  fetch(`https://randomuser.me/api?results=25`) //?results=25
    .then(res => res.json())
    .then(data =>
      this.setState({
        results: data.users,
        isLoading: false,
    
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
}

componentDidMount() {
  this.fetchUsers();
}
// console.log(users);
render() {
  
  const { isLoading, users, error } = this.state;
  return (
    <React.Fragment>
      <h1>Random User</h1>
      {error ? <p>{error.message}</p> : null}
      {!isLoading ? (
        users.map(user => {
          const { users, name, thumbnail,  } = user;
          return (
            <div key={users.id}>
              <p>Name: {name}</p>
              <p>thumbnail: {thumbnail}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </React.Fragment>
  );
}
}


export default App;
