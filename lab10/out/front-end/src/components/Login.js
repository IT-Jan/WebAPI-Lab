"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://ant.design/components/form
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Login = () => {
    return (<antd_1.Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <antd_1.Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <antd_1.Input />
            </antd_1.Form.Item>

            <antd_1.Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <antd_1.Input.Password />
            </antd_1.Form.Item>

            <antd_1.Form.Item name="remember" valuePropName="checked" label={null}>
            <antd_1.Checkbox>Remember me</antd_1.Checkbox>
            </antd_1.Form.Item>

            <antd_1.Form.Item label={null}>
            <antd_1.Button type="primary" htmlType="submit">
                Submit
            </antd_1.Button>
            </antd_1.Form.Item>
        </antd_1.Form>);
};
exports.default = Login;
