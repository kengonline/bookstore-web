import React, { Component } from 'react';
import { Row, Col } from 'antd';
import moment from 'moment'

// Services
import { addRouter } from 'src/services/router.service'

// Components
import Layout from 'src/components/layout/Layout';
import FeedCard from "src/components/card/FeedCard";

// Mock data
import Feeds from 'src/mock-data/feeds.json'

class FeedsPage extends Component {
    static configRoute() {
        return {
            path: '/feeds'
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            feeds: []
        }
    }

    async componentDidMount() {
        const feeds = await Feeds
        this.setState({ loading: false, feeds })
    }

    renderFeedCards = (feeds = []) => {
        return feeds.map(item => (
            <Col xs={24} md={8} key={item.id}>
                <FeedCard
                    id={item.id}
                    publisherId={item.publisherId}
                    createdBy={item.createdBy}
                    createdDate={moment(item.createdDate)}
                    content={item.content}
                    url={item.url}
                >
                    {item.content}
                </FeedCard>
            </Col>
        ))
    }

    render() {
        const { feeds } = this.state;
        return (
            <Layout {...this.props}>
                <Row gutter={16}>
                    {this.renderFeedCards(feeds)}
                </Row>
            </Layout>
        );
    }
}

export default addRouter(FeedsPage);