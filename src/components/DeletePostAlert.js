import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function DeletePostAlert(props) {
    return (
        <Alert style={props.style} variant="success">
            <Alert.Heading>Are you sure you want to delete {props.title}?</Alert.Heading>
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={props.handleDeleteConfirm}>
                    Confirm Delete
                </Button>
            </div>
        </Alert>

    );
}

export default DeletePostAlert;