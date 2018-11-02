import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const AddButton = () => {
    return(
        <div className="open-search">
            <Link to={process.env.PUBLIC_URL + '/search'}>
            <Button variant="fab" color="primary" aria-label="Add">
                <AddIcon />
            </Button>          
            </Link>             
        </div>     

    );
}

export default AddButton;