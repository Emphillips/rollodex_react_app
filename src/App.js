import React, { Component } from 'react';
// import './App.css';


class App extends Component {
  constructor(props) {
  super(props)
  
  this.state  = {
    posts: [],
    }
  }
// fetching data from api url

async componentDidMount() {
  const response = await fetch(`https://randomuser.me/api?results=25`);
  const json = await response.json();
  console.log(json)
  this.setState({ posts: json.results });
}

render() {
    return (
      // console.log(this.state.posts.results)
      <div>
      {this.state.posts.map((post) => {    
          return <div key={post.results}>
            <h2>{post.results.name}</h2>
              <p>{post.results.title}</p>
            </div>
         })}
      </div>
        )
      }
    }

export default App;
