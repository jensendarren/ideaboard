import React, { Component } from 'react'
import axios from 'axios'
import Idea from './Idea'

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
  }

  renderIdeas() {
    let ideas = []
    this.state.ideas.map((idea) => {
      ideas.push(<Idea key={idea.id} idea={idea} />)
    })
    return ideas;
  }
  
  componentDidMount(){
    axios.get('http://localhost/api/v1/ideas.json')
    .then(response => {
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }
  
  addNewIdea = () => {
    axios.post(
      'http://localhost/api/v1/ideas',
      { idea:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div>
        <div>
          <button className="newIdeaButton" onClick={this.addNewIdea}>
            New Idea
          </button>
        </div>
        <div>
          {this.renderIdeas()}
        </div>
      </div>
    );
  }
}
  
export default IdeasContainer;