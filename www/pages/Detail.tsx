
// Global Import START
import { Layout } from 'antd'
import * as React from "react";
import 'antd/dist/antd.css'
// Global Import END

// Local Import START
import  RenderLineChart from '../components/Chart/chart';
import Dashboard from "../Modules/Dashboard/Dashboard";
import Axios from 'axios';
// Local Import END


export default class app extends React.Component<{}, {}> {

    
  
  render() {
    return (
      <Layout className="Content-area" >
      <RenderLineChart />
      </Layout>
    );
  }
}


{/* <UserTable userData={mastermenu}/> */ }