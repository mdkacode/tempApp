import React,{useState} from "react";
import { Form, Input, Select, Icon, Button,DatePicker,Row,Col, InputNumber,Spin } from "antd";
import DetailChart from '../../components/Chart/chart';
import BarLineChart from '../../components/Chart/barchart';
import axios from 'axios';
const { Option } = Select;

/**
 * 
 */

const FilterForm = (props) => {

  const { getFieldDecorator } = props.form
  const handleFilterSubmit = (e) => {
    e.preventDefault()
    const fieldsValues = props.form.getFieldsValue()
    console.log(fieldsValues);
    props.onSubmit(fieldsValues);
  }
  const children = [];
  
  const [stat,setStat] = useState('none');
  const [isStat,setisStat] = useState(false);
  const [pieData, setpieData] = useState([]);
  const [barData, setbarData] = useState([]);
  // for timer
  const  handleChange = (value)  => {
    console.log(`selected ${value}`);
    
  }
  
  const BASE_URL = 'http://localhost:3000/youtube_donwloader/api/v1/downloadService';
  const onPieChange = async (e) =>{

    let data  = await axios.get(`${BASE_URL}/videoStatus?limit=${e||7}`);
    console.log(data.data);
    setpieData(data.data)
    
  }
  const onBarChange = async (e) =>{
    let bardata  = await axios.get(`${BASE_URL}/day?limit=${e||7}`);
    setbarData(bardata.data)  
  }
  const ShowStat = async () => {
    if (stat  == 'none') setStat('');
   else setStat('none');
    setisStat(true);
    let data  = await axios.get(`${BASE_URL}/videoStatus?limit=${7}`);
  
  setpieData(data.data)
  let bardata = await axios.get(`${BASE_URL}/day?limit=7`);
    setbarData(bardata.data)
    setisStat(false);
   
  }
  const getValue = (aa)=>{

    
    console.log(aa.trim())
    children.push(aa.trim())
  }
  return (
    <div>
    <Form layout="inline" onSubmit={handleFilterSubmit}>
      <Form.Item  >
        {getFieldDecorator('videoId')
          (
            <Select  mode="tags" style={{ width: 150 }} onSelect={getValue} placeholder="Ids.." onChange={handleChange} tokenSeparators={[',']} />
              
          )
        }
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('downloadType')
          (
            <Select style={{ width: 120 }} allowClear placeholder="Download Type">
              <Option value="PRIORITY">Priority</Option>
              <Option value="STANDARD">Normal</Option>
              <Option value="ERROR">Error</Option>
            </Select>
          )
        }
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('status')
          (
            <Select style={{ width: 120 }} allowClear placeholder="Status">
              <Option value="NEW">New</Option>
              <Option value="IN_PROGRESS">In Progress</Option>
              <Option value="FTP_DONE">FTP Done</Option>
              <Option value="DOWNLOAD_DONE">Download Done</Option>
              <Option value="ERROR">Error</Option>
            </Select>
          )
        }
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('createdStartTime')
          (<DatePicker showTime placeholder="Select Start Time"  />)
        }
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('createdEndTime')
          (<DatePicker showTime placeholder="Select End Time"  />)
        }
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          <Icon type="search" />
        </Button>
      </Form.Item>
     
      <Form.Item >
        <Button type="danger" onClick={() => {
          props.form.resetFields()
          props.onReset()
        }}>
          Reset
        </Button>
      </Form.Item>

      <Form.Item className="total-count">
        <p>Total Count:{props.totalCount}</p>
      </Form.Item>

      <Form.Item className="total-count">
      <Button type="dashed" block onClick={ShowStat}>
         Stats
        </Button>
      </Form.Item>
      
    </Form>
  
  <div className="chart-count" style={{display:stat}}> 
  {isStat ? <Spin />: 
  <Row gutter={16}>
  <Col className="gutter-row" span={6}>
  <DetailChart data={pieData}/> 
  <InputNumber min={1} max={10} defaultValue={7} onChange={onPieChange} />
      </Col>
      <Col className="gutter-row" span={6}>
      <BarLineChart data={barData}/>
      <InputNumber min={1} max={1000} defaultValue={7} onChange={onBarChange} />
      </Col>
  </Row>
  }
   
   
  </div>
        
     
    </div>
  )
}

export default Form.create({ name: 'filterForm' })(FilterForm);