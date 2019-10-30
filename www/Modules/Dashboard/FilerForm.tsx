import React,{useState} from "react";
import { Form, Input, Select, Icon, Button,DatePicker } from "antd";
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
  
  const [count,setCount] = useState(0);
  
  // for timer
  const  handleChange = (value)  => {
    console.log(`selected ${value}`);
    
  }
  const getValue = (aa)=>{

    
    console.log(aa.trim())
    children.push(aa.trim())
  }
  return (
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
    </Form>
  )
}

export default Form.create({ name: 'filterForm' })(FilterForm);