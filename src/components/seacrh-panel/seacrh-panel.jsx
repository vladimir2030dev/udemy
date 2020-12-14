import React, {Component} from 'react';
import ListFilter from "../item-status-filter/item-status-filter";

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        const searchStyle = {
            fontSize: '18px',
            fontWeight: '400',
            color: 'grey'
        };
        const searchText = 'Введите заметку';

        return (
            <div className='row mb-3'>
                <input
                    type="text"
                    style={searchStyle}
                    placeholder={searchText}
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />
                <ListFilter/>
            </div>
        );
    };
};
