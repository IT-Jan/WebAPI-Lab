"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const { TextArea } = antd_1.Input;
const NewArticle = () => {
    const handleFormSubmit = (values) => {
        const title = values.title;
        const context = values.context;
        console.log(values, title, context);
    };
    const contentRules = [
        { required: true, message: 'Please input a context' }
    ];
    return (<antd_1.Form name="article" onFinish={(values) => handleFormSubmit(values)}>
            <antd_1.Form.Item name="title" label="Title" rules={contentRules}>
                <antd_1.Input />
            </antd_1.Form.Item>
            <antd_1.Form.Item name="context" label="Context" rules={contentRules}>
                <TextArea rows={4}/>
            </antd_1.Form.Item>
            <antd_1.Form.Item>
                <antd_1.Button type="primary" htmlType="submit">Submit</antd_1.Button>
            </antd_1.Form.Item>
        </antd_1.Form>);
};
exports.default = NewArticle;
