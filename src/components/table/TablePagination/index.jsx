import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash'
import { Table, Row, Col } from "antd";

// Components
import Searchbar from "src/components/table/TablePagination/Searchbar";

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    dataSource: PropTypes.arrayOf(PropTypes.object),
    pagination: PropTypes.object,
    tableOptions: PropTypes.object
}

const defaultProps = {
    dataSource: [],
    pagination: { current: 1, pageSize: 10 },
    tableOptions: {}
}

const StyledTablePagination = styled.div`
    &.table-pagination {
        background-color: white;

        .ant-table-title {
            margin: 0 16px;

            .ant-row {
                display: flex;
                justify-content: flex-end;

                .search-column {
                    text-align: right;
                }
            }
        }

        .ant-pagination.ant-table-pagination {
            margin: 16px;
        }
    }
`

class TablePagination extends Component {
    constructor(props) {
        super(props);

        const { pagination, dataSource } = props;

        this.state = {
            searchText: undefined,
            pagination: {
                ...pagination,
                current: pagination.current || 1,
                total: pagination.total === undefined ? dataSource.length : pagination.total
            },
            filters: undefined,
            sorter: undefined
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { pageSize, current } = prevState.pagination;
        const { total } = nextProps.pagination;
        const lastPage = Math.ceil(total / pageSize);

        if (current > lastPage) {
            return {
                pagination: { ...prevState.pagination, current: 1 }
            }
        }

        return {}
    }

    onSearchTextChanged = (searchText) => {
        this.setState({ searchText }, this.handleOnChange);
    }

    onTableChanged = (pagination, filters, sorter) => {
        this.setState({ pagination, filters, sorter }, this.handleOnChange);
    }

    handleOnChange = () => {
        const { searchText } = this.state;

        this.props.onChange({
            ...this.state,
            searchText: _.isEmpty(searchText) ? undefined : searchText
        });
    }

    renderTitle = () => {
        return (
            <Row>
                <Col className="searchbar" xs={24} sm={12} xl={8}>
                    <Searchbar onSearch={this.onSearchTextChanged} />
                </Col>
            </Row>
        )
    }

    render() {
        const { tableOptions, columns, dataSource } = this.props;
        const { pagination } = this.state;

        return (
            <StyledTablePagination className="table-pagination">
                <Table
                    {...tableOptions}
                    columns={columns}
                    dataSource={dataSource}
                    pagination={pagination}
                    title={this.renderTitle}
                    onChange={this.onTableChanged}
                />
            </StyledTablePagination>
        );
    }
}

TablePagination.propTypes = propTypes;
TablePagination.defaultProps = defaultProps;

export default TablePagination;