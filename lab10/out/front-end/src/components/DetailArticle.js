"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const articles_json_1 = __importDefault(require("./data/articles.json"));
const react_router_dom_1 = require("react-router-dom");
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const DetailArticle = (props) => {
    const { id } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    for (const article of articles_json_1.default) {
        if (article.id == id) {
            return (<>
                    <h1>{article.title}</h1>
                    <p>{article.fullText}</p>
                    <antd_1.Button type="primary" icon={<icons_1.RollbackOutlined />} onClick={() => navigate(-1)}/>
                </>);
        }
    }
};
exports.default = DetailArticle;
