import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'antd/dist/reset.css'
import { Row, Col, Card, Image, Button, DatePicker, DatePickerProps } from 'antd'

import Hello from './components/Hello';
import Goodbye from './components/Goodbye';

let counter = 0;

const onClick = (event: any) => {
    console.log(counter++);
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hello name="Web API Development"/>
        {/* <Hello/> */}

        <Row type="flex" justify="space-around">
            <Col span={6}>
                {/* Image CSS https://ant.design/components/image */}
                <Card title="Blog 1" style={{ width: 300 }}>
                    <Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 1st blog</p>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Blog 2" style={{ width: 300 }}>
                    <Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 2nd blog</p>
                </Card>
            </Col>
            <Col span={6}>        
                <Card title="Blog 3" style={{ width: 300 }}>
                    <Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 3rd blog</p>
                </Card>
            </Col>
        </Row>
        <Row type="flex" justify="space-around">
            <Col span={6}> 
                <Card title="Blog 4" style={{ width: 300 }}>
                    <Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 4th blog</p>
                </Card>
            </Col>
            <Col span={6}> 
                <Card title="Blog 5" style={{ width: 300 }}>
                    <Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 5th blog</p>
                </Card>
            </Col>
            <Col span={6}> 
                <Card title="Blog 6" style={{ width: 300 }}>
                    <Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 6th blog</p>
                </Card>
            </Col>
        </Row>
        <br/>

        <Button type="primary" onClick={onClick}> Button </Button>
        <Button type="primary" danger> Button </Button>

        <DatePicker onChange={onChange} />
        
        <Goodbye name="Everyone"/>

      </div>

    </>
  )
}

export default App
