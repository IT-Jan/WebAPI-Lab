"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
require("./App.css");
require("antd/dist/reset.css");
const antd_1 = require("antd");
const Hello_1 = __importDefault(require("./components/Hello"));
const Goodbye_1 = __importDefault(require("./components/Goodbye"));
let counter = 0;
const onClick = (event) => {
    console.log(counter++);
};
const onChange = (date, dateString) => {
    console.log(date, dateString);
};
function App() {
    const [count, setCount] = (0, react_1.useState)(0);
    return (<>
      <div>
        <Hello_1.default name="Web API Development"/>
        {/* <Hello/> */}

        <antd_1.Row type="flex" justify="space-around">
            <antd_1.Col span={6}>
                {/* Image CSS https://ant.design/components/image */}
                <antd_1.Card title="Blog 1" style={{ width: 300 }}>
                    <antd_1.Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 1st blog</p>
                </antd_1.Card>
            </antd_1.Col>
            <antd_1.Col span={6}>
                <antd_1.Card title="Blog 2" style={{ width: 300 }}>
                    <antd_1.Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 2nd blog</p>
                </antd_1.Card>
            </antd_1.Col>
            <antd_1.Col span={6}>        
                <antd_1.Card title="Blog 3" style={{ width: 300 }}>
                    <antd_1.Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 3rd blog</p>
                </antd_1.Card>
            </antd_1.Col>
        </antd_1.Row>
        <antd_1.Row type="flex" justify="space-around">
            <antd_1.Col span={6}> 
                <antd_1.Card title="Blog 4" style={{ width: 300 }}>
                    <antd_1.Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 4th blog</p>
                </antd_1.Card>
            </antd_1.Col>
            <antd_1.Col span={6}> 
                <antd_1.Card title="Blog 5" style={{ width: 300 }}>
                    <antd_1.Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 5th blog</p>
                </antd_1.Card>
            </antd_1.Col>
            <antd_1.Col span={6}> 
                <antd_1.Card title="Blog 6" style={{ width: 300 }}>
                    <antd_1.Image width={200} src='https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <p>This is 6th blog</p>
                </antd_1.Card>
            </antd_1.Col>
        </antd_1.Row>
        <br />

        <antd_1.Button type="primary" onClick={onClick}> Button </antd_1.Button>
        <antd_1.Button type="primary" danger> Button </antd_1.Button>

        <antd_1.DatePicker onChange={onChange}/>
        
        <Goodbye_1.default name="Everyone"/>

      </div>

    </>);
}
exports.default = App;
