import React, { Component } from 'react';
import { Divider } from "antd";

// Services
import { addRouter } from "src/services/router.service";

// Components
import PublisherCriteria from "src/components/publisher/PublisherCriteria";
import CustomLayout from "src/components/layout/Layout";
import CriteriaBox from "src/components/layout/CriteriaBox";
import TablePagination from "src/components/table/TablePagination";

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
                key: 'name'
            },
            {
                title: 'Website',
                dataIndex: 'url',
                key: 'url',
                render: text => <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="#">Invite {record.name}</a>
                        <Divider type="vertical" />
                        <a href="#">Delete</a>
                    </span>
                ),
            }
        ];

        this.state = {
            publisher: [
                {
                    name: 'Animag',
                    url: 'http://www.animagshop.com'
                },
                {
                    name: 'Luckpim',
                    url: 'http://www.luckpim.com'
                },
                {
                    name: 'Dexpress',
                    url: 'http://shop.dexclub.com'
                },
                {
                    name: 'Zenshu',
                    url: 'http://www.zenshu.com'
                },
                {
                    name: 'Phoenix Next',
                    url: 'http://www.phoenixnext.com'
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

                <TablePagination
                    tableOptions={{ rowKey: "name" }}
                    columns={this.columns}
                    dataSource={publisher}
                    pagination={{ pageSize: 10, total: 20 }}
                    onChange={criteria => console.log(criteria)}
                />
            </CustomLayout>
        );
    }
}

export default addRouter(ManagementPublisherPage);