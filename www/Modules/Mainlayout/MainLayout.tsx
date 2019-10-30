import React, { Component } from 'react';

import LoginForm from "../Login/Login";
import { Layout, Skeleton } from 'antd';
import Cookies from "universal-cookie";
import RenderHeader from '../../components/Header/Header';

const cookies = new Cookies();

const { Content } = Layout;
type LayoutState = {
    title: String
    isSidebar: Boolean,
    token: Boolean,
    initialLoad: Boolean,
    isLogin: boolean

}

interface LayoutProps {
    isLogin: boolean,
    isLogged: boolean
}


class MainLayout extends Component<LayoutProps, LayoutState> {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            token: false,
            isSidebar: false,
            initialLoad: false,
            isLogin: false
        };
    }



    async componentWillMount() {
        console.log('props');
    }
    componentWillUpdate(prevProps, nextProps) {
        console.log('object Data');
        console.log(this.props);
    }

    render() {
        return (
            this.state.initialLoad ? <Skeleton avatar active paragraph={{ rows: 20 }} /> :
                <Layout>
                    <Content>
                        {!this.props.isLogged && <LoginForm getLogin={this.props.isLogin} />}
                        {this.props.isLogged && <RenderHeader />}
                        {/* {this.props.isLogged && <Sidebar />} */}
                    </Content>
                    {/* {this.props.isLogged && <RenderFooter />} */}
                </Layout>

        )
    }
}
export default MainLayout