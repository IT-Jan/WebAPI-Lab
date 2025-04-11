import React from "react"
import { Form, Input, Button } from 'antd';
import { Base64 } from "js-base64";
import axios from "axios";
import { api } from "../common/http-common";

const { TextArea } = Input;

const NewArticle = () => {
    const handleFormSumbit = (values:any) => {
        const title = values.title;
        const allText = values.context;
        const authorID = 1;
        console.log(values, title, allText);
        const username = "alice";
        const password = "alice";
        const access_token = Base64.encode(`${username}:${password}`) //alice:alice => YWxpY2U6YWxpY2U=
        const url = api.uri + 'articles';
        axios.post(url, {
            "title": title,
            "allText": allText,
            "authorID": 1
        }, {
            headers:{
                'Authorization': `Basic ${access_token}` //Basic YWxpY2U6YWxpY2U=
            }
        })
        .then((res) => {
            if(res.status === 201){
                console.log("Successfully Created Article!");
            }else{
                console.log("Failed Create Article!");
            }
        })
    }
    const contentRules = [ {required: true, message: 'Please input data'} ]
    return(
        <Form name="article" onFinish={(values) => handleFormSumbit(values)}>
            <Form.Item name="title" label="Title" rules={contentRules}>
                <Input/>
            </Form.Item>
            <Form.Item name="context" label="Context" rules={contentRules}>
                <TextArea rows={4}/>
            </Form.Item>
            <Form.Item name="submitBtn">
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default NewArticle;