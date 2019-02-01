import React from 'react';
 
class SearchBar extends React.Component {
  // controlled component - React is what is driving all data in app, not HTML (DOM)
  // React is source of truth - store info inside state of React component 
  // We overwrite value that was entered into input after re-rendering it
  state = { term: '' }
  
  // arrow fn always on callback event handlers
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term); // call fn that was passed in via onSubmit prop
  }
  
  render() {
    return (
    <div className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input 
            type="text" 
            value={this.state.term} 
            onChange={(e) => this.setState({ term: e.target.value })} 
          />
        </div>
      </form>
    </div>
    );
  }
}

export default SearchBar; 