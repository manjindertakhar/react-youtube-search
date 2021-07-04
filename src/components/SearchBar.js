import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    //callback from parent component
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <label>Search Video</label>
          <input
            type='text'
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
