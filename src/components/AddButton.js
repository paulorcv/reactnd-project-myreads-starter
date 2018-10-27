import React from 'react';

const AddButton = () => {
    return(
        <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>        
    );
}

export default AddButton;