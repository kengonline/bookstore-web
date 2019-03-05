import React, { Component } from 'react';
import { Row } from 'antd';

// Services
import { addRouter } from 'src/services/router.service'

// Components
import Layout from 'src/components/layout/Layout';

class ErrorPage extends Component {
    static configRoute() {
        return {
            path: '/error'
        };
    }

    onClickClose = () => {
        window.close()
    }

    render() {
        return (
            <Layout {...this.props}>
                <Row style={{ textAlign: "center" }}>
                    Something went wrong.
                </Row>
                <Row style={{ textAlign: "center" }}>
                    Please contact administrator.
                </Row>
            </Layout>
        );
    }
}

export default addRouter(ErrorPage);