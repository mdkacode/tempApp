/**
 * @description It will Export Logo Only Start 
 */
import React from 'react'
import { Row, Col } from 'antd'

const Logo = () => {
    return (<Row type="flex" justify="space-around" align="middle">
        <Col span={8}>
            <div className="logo" >
                <img src="/static/logo.png" width="30" height="30" />
            </div>
        </Col>
        <Col span={14}><span className="logo-text">YT_Downloader</span></Col>
    </Row>)
}
export default Logo

/**
 * @description It will Export Logo Only Start 
 */