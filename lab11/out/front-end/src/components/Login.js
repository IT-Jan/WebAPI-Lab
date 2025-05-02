"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://ant.design/components/form
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const axios_1 = __importDefault(require("axios"));
const js_base64_1 = require("js-base64");
const http_common_1 = require("../common/http-common");
const onFinish = (values) => {
    const username = values.username;
    const password = values.password;
    const access_token = js_base64_1.Base64.encode(`${username}:${password}`);
    const url = http_common_1.api.uri + 'users';
    axios_1.default.get(url, {
        headers: {
            'Authorization': `Basic ${access_token}`
        }
    }).then((res) => {
        console.log(res.data);
    });
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
