import React, { Component } from 'react';
import { Divider, Table } from "antd";

// Services
import { addRouter } from "src/services/router.service";

// Components
import PublisherCriteria from "src/components/publisher/PublisherCriteria";
import CustomLayout from "src/components/layout/Layout";
import CriteriaBox from "src/components/layout/CriteriaBox";

class ManagementPublisherPage extends Component {
    static configRoute() {
        return {
            path: '/management/publisher'
        };
    }

    constructor(props) {
        super(props);

        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="javascript:;">{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;">Invite {record.name}</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">Delete</a>
                    </span>
                ),
            }
        ];

        this.state = {
            publisher: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                }, {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                }, {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                }
            ]
        }
    }


    render() {
        const { publisher } = this.state;

        return (
            <CustomLayout {...this.props}>
                <CriteriaBox>
                    <PublisherCriteria defaultValue={this.criteria} onChange={this.onCriteriaChange} />
                </CriteriaBox>

                <Table columns={this.columns} dataSource={publisher} />
            </CustomLayout>
        );
    }
}

export default addRouter(ManagementPublisherPage);