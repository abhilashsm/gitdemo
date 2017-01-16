import React from 'react';

import axios from 'axios';
class App extends React.Component {
constructor(props){
	super(props);
	this.state={
	posts:'hello',
	dos:[]
	}

};


componentDidMount() {
   axios.get(`http://192.168.1.9:8082`)
    .then(data => this.setState({dos:data})
    );
}
   
   render() {
      return (
         <div>
           
            <h1>{this.state.posts}</h1>
            <h2>{this.state.dos}</h2>
         </div>
      );
   }
}

export default App;
