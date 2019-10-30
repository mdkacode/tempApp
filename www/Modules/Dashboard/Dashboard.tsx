// global import START
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import withApolloClient from "../../lib/with-apollo-client";
import { List, Row, Col, Button, Form, Input, Select, Divider, Icon } from "antd";
import moment from "moment";
import * as  _ from "loadsh";
const { Option } = Select;

// global import END

// Local Import START

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import FilterForm from '../Dashboard/FilerForm';
import dashboardQuery from "./Dashboard.query";
import { DashboardQuery } from "../../__generated__/DashboardQuery"
import "./styles.css";

import Axios from 'axios';
// Local Import END
interface DashboardProps {
  isValid: boolean,
  form: object
}

interface DashboardState {
  isShow?: boolean,
  isHeader?: boolean,
  isPagination?: boolean,
  Header?: string,
  initLoading?: boolean,
  loading?: boolean,
  columns?: object,
  tableData?: object,
  pageNumber?: number,
  filters?: object,
  totalCount?:number,
  filterTableData:any,
  loadmore:boolean,
  totalCountCheck:number
}
// dashboard_age: 0
// dashboard_name: "Expects error 2779"
// dashboard_salary: "1234"
// id: 80255
let filterFormRef;
let data = true;
class Dashboard extends Component<DashboardProps, DashboardState>{

  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      columns: [],
      isHeader: false,
      initLoading: false,
      loading: false,
      pageNumber: 1,
      totalCount:0,
      filters: {},
      tableData: [],
      filterTableData:[],
      loadmore:true
    }
  }
  

  filterItem(e, data) {
    var Filterdata = e.filter((res) => {
      return res.videoId.includes(data.target.value) ||
        res.status.includes(data.target.value.toUpperCase());
    })
  
    this.setState({
      tableData: Filterdata
    })
  }
  setData =(data) =>{
   
    if(this.state.tableData.length === 0 ) 
    {
      window.localStorage.setItem("totallength",data.count);
      this.setState({tableData: data.rows,totalCount:data.count});
  }
  }
  resetFilter = () => {
 
    this.setState({
      pageNumber: 1,
      filters: {},
      tableData:this.state.filterTableData
    })
  }

  onSubmit = (data) => {
    
    this.setState({
      filterTableData : this.state.tableData,
      tableData : []
    })
   
    this.setState({
      pageNumber : Math.floor(Math.random() * 9) + 1 ,
      filters:data
    })

   
  }


  filterForm = () => {
    return (
      <React.Fragment>
        <div className="filter-block">
          {/* <Divider>Filters</Divider> */}
          <FilterForm onSubmit={this.onSubmit} onReset={this.resetFilter} totalCount={this.state.totalCount} />
        </div>

      </React.Fragment>
    )
  }

  listItemRenderer = (item) => (
    
    <List.Item className="item-list">

      <div className="full_width">
        <Row
          gutter={32}
          className="rows"
        >
          <Col span={8} >
            <b>Video Id: </b><span><a href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank"> {item.videoId} </a> </span>
          </Col>
          <Col span={8}>
            <b>Download Size:</b><span> {(item.downloadSize / 1000000).toFixed(3)} MB </span>
          </Col>
          <Col span={8}>
            <b>Status: </b><span> {item.status} </span>
          </Col>
        </Row>
        <Row
          gutter={32}
          className="rows"
        >
          <Col span={8}>
            <b>Start Time:</b><span> {moment(item.startedOn).format("DD:MM:YYYY hh:MMA")} </span>
          </Col>
          <Col span={8}>
            <b>End Time:</b><span> {moment(item.upDatedOn).format("DD:MM:YYYY hh:MMA")} </span>
          </Col>
          <Col span={8}>
            <b>Total Time Taken:</b><span> {item.downloadTime / 1000} s </span>
          </Col>
        </Row>
        <Row
          gutter={32}
          className="rows"
        >
          <Col span={8}>
            <b>SourceId:</b><span> {item.sourceId || 'No Source Id Found'} </span>
          </Col>
          <Col span={8}>
            <b>Download Type:</b><span> {item.downloadType || 'Download Type not Found'} </span>
          </Col>

        </Row>
        <Row>

        </Row>
      </div>
    </List.Item>

  )

  loadMore = (fetchMore) => {
    console.log('hello')
    return (
      !this.state.initLoading && !this.state.loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          {this.state.loadmore && <Button onClick={() => this._onFocus(fetchMore)}>load more</Button>}
        </div>
      ) : null
    )
  }

  _onFocus = async (fetchMore) => {
    console.log('hello')
    this.setState({
      loading: true,
      // list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
   await this.setState({
      pageNumber : this.state.pageNumber + 1
    })
    await fetchMore({
      variables: {
        pageNumber: this.state.pageNumber
      },
     updateQuery: (prev, { fetchMoreResult }) => {
       
        if (!fetchMoreResult) return prev;
      
        this.setState({
          tableData:this.state.tableData.concat(fetchMoreResult.mastermenu.rows)
        })
      }
    });
    this.setState({
      loading: false
    })
  };


  render() {
    return (
      this.props.isValid &&
      <div className="content-area-data">
        {this.filterForm()}
      <Query<DashboardQuery>
        query={dashboardQuery}
        variables={{ pageNumber: this.state.pageNumber, filters: this.state.filters }}
      >
        {({ loading, error, data: { mastermenu }, fetchMore }) => {
         
          if (error) return <div>{JSON.stringify(error)}</div>;
          
          try {if (!loading && mastermenu.rows.length>0) this.setData(mastermenu);} catch (error) { console.log(error)}
          return (
            <div className="content-area-data">
             
              <div className="content-list">
                {/* <ContentContainer containerName={"Dashboard"}> */}
                {/* <input type="text" placeholder="Search" onChange={this.filterItem.bind(this, mastermenu)} /> */}

                <List
                    className="loadmore_list"
                    style={{ height: "100vh", overflow: "auto" }}
                    itemLayout="horizontal"
                    dataSource={this.state.tableData}
                    renderItem={this.listItemRenderer}
                    loadMore={this.loadMore(fetchMore)}
                    loading={this.state.loading}
                  />
                
                {/* </ContentContainer> */}
              </div>
            </div>
          )
          // })
        }}
      </Query>
      </div>
    )
  }



}
export default withApolloClient(Dashboard)