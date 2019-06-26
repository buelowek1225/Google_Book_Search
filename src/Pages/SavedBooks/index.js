// may need to remove components to navigate to import files
import React from 'react';
import '../../App.css';
import SavedBook from '../../components/SavedBook'

export default class SavedBooks extends React.Component {

  render () {
    return (
      <div>
        <SavedBook />
      </div>
    );
  }
}

