import React from 'react';


export default class RandomUser extends React.Component {
  state  = {
    loading: true,
    person: null,
    };

async componentDidMount() {
  const url = "https://randomuser.me/api?results=25";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ person: data.results[0], loading: false });
  console.log(data.results[0]);
}

render() {
  if (this.state.loading) {
    return <div>loading...</div>;
  }

  if (!this.state.person) {
    return <div>didn't get a person</div>;
  }

  return (
    <div>
      <div>{this.state.person.name.title}</div>
      <div>{this.state.person.name.first}</div>
      <div>{this.state.person.name.last}</div>
      <img src={this.state.person.picture.large} />
    </div>
  );
  }
}

// Played around with a few different return ideas. Some I couldnt get synatx errors to go away. 



// render() {
//   return (
//     <div>
//       {this.state.loading || !this.state.person ? (
//       <div>loading...</div>
//       ) : (
//       <div>
//         <div>{this.state.person.name.title}</div>
//         <div>{this.state.person.name.first}</div>
//         <div>{this.state.person.name.last}</div>
//         <img src={this.state.person.picture.large} />
//       </div>
//     </div>
//   );
//     }
  
