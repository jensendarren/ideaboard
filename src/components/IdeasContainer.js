import React, { Component } from 'react'
import axios from 'axios'
import Idea from './Idea'

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    console.log("Dadouland FTW")
    this.state = {
      ideas: []
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost/api/v1/ideas.json')
    .then(response => {
      console.log("Our ideas: ", response.data)
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }  
  
  render() {
    return (
      <div>
        {this.state.ideas.map((idea) => {
          return (<Idea idea={idea} key={idea.id} />)
        })}
      </div>
    );
  }
}
  
export default IdeasContainer;