import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from "antd";
import _ from 'lodash'


const propTypes = {
    defaultValue: PropTypes.string,
    onSearch: PropTypes.func,
    debounceTime: PropTypes.number
}

const defaultProps = {
    onSearch: () => { },
    debounceTime: 500
}

class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: props.defaultValue
        }
    }

    onChange = (e) => {
        this.onQueue = true;
        this.setState({ searchText: e.target.value }, this.handleOnChange);
    }

    onSearch = (searchText) => {
        this.onQueue = false;
        this.props.onSearch(searchText);
    }

    handleOnChange = _.debounce(() => {
        if (this.onQueue) {
            this.onSearch(this.state.searchText)
        }
    }, this.props.debounceTime)

    render() {
        const { searchText } = this.state;

        return (
            <Input.Search value={searchText} onChange={this.onChange} onSearch={() => this.onSearch(searchText)} />
        );
    }
};

Searchbar.propTypes = propTypes;
Searchbar.defaultProps = defaultProps;

export default Searchbar;