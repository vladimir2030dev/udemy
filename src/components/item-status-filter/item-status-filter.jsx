import React, {Component} from 'react';

export default class ListFilter extends Component {
    render() {
        return (
            <div className="ml-5 btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger"> All </button>
                <button type="button" className="btn btn-warning">Active</button>
                <button type="button" className="btn btn-success">Del</button>
            </div>
        );
    };
};
