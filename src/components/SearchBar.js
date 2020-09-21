import React from 'react'
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends React.Component {

    state = {
        searchTerm: ''
    }

    onChangeHandler=(event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit=(event) => {
        event.preventDefault();
        const {onFormSubmit} = this.props;
        const {searchTerm} = this.state;
        onFormSubmit(searchTerm);
    }


    render() {
        return (
            <Paper elevation={6} style={{ padding:'25px' }} >
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..."  onChange={this.onChangeHandler} />
                </form>
            </Paper>
        )
    }
}
export default SearchBar;
