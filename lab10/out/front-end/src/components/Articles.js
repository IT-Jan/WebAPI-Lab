"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const antd_1 = require("antd");
const axios_1 = __importDefault(require("axios"));
const js_base64_1 = require("js-base64");
// import articles from './data/articles.json';
const http_common_1 = require("../common/http-common");
const Article = () => {
    const [articles, setArticles] = react_1.default.useState(null);
    react_1.default.useEffect(() => {
        const username = 'alice';
        const password = 'alice';
        // const access_token = Buffer.from(`${username}:${password}`, 'utf-8').toString('base64');
        const access_token = js_base64_1.Base64.encode(`${username}:${password}`);
        const url = http_common_1.api.uri + 'articles';
        console.log(access_token);
        axios_1.default.get(url, {
            headers: {
                'Authorization': `Basic ${access_token}`
            }
        }).then((res) => {
            console.log(res.data);
            setArticles(res.data);
        });
    }, []);
    if (!articles) {
        return (<div> There is no article available now.</div>);
    }
    else {
        return (<antd_1.Row justify="space-around">
                {articles && articles.map(({ id, title, fullText }) => (<antd_1.Col span={8} key={id}>
                            <antd_1.Card title={title} style={{ width: 300 }}>
                                <p>{fullText}</p>
                                <p></p>
                                <react_router_dom_1.Link to={`/a/${id}`}>Details</react_router_dom_1.Link>
                            </antd_1.Card>
                        </antd_1.Col>))}
            </antd_1.Row>);
    }
};
exports.default = Article;
