import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table, Row } from "antd";
import Searchbar from "src/components/table/TablePagination/Searchbar";

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    dataSource: PropTypes.arrayOf(PropTypes.object),
    tableOptions: PropTypes.object
}

const defaultProps = {
    dataSource: [],
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
    renderTitle = () => {
        return (
            <Row>
                <Searchbar onSearch={(text) => console.log(`search: ${text}`)} />
            </Row>
        )
    }

    render() {
        const { tableOptions, columns, dataSource } = this.props;
        return (
            <StyledTablePagination className="table-pagination">
                <Table
                    {...tableOptions}
                    columns={columns}
                    dataSource={dataSource}
                    title={this.renderTitle}
                />
            </StyledTablePagination>
        );
    }
}

TablePagination.propTypes = propTypes;
TablePagination.defaultProps = defaultProps;

export default TablePagination;