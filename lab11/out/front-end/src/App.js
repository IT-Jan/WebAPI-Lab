"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = require("antd");
const react_1 = __importDefault(require("react"));
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./components/Home"));
const Dashboard_1 = __importDefault(require("./components/Dashboard"));
const About_1 = __importDefault(require("./components/About"));
const Articles_1 = __importDefault(require("./components/Articles"));
const DetailArticle_1 = __importDefault(require("./components/DetailArticle"));
const Login_1 = __importDefault(require("./components/Login"));
const Register_1 = __importDefault(require("./components/Register"));
const Error404_1 = __importDefault(require("./components/Error404"));
const newArticle_1 = __importDefault(require("./components/newArticle"));
const { Header, Content, Footer } = antd_1.Layout;
const App = () => {
    return (<react_router_dom_1.BrowserRouter>
            <Header>
                <nav>
                    <antd_1.Space>
                        <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
                        <react_router_dom_1.Link to="/dashboard">Dashboard</react_router_dom_1.Link>
                        <react_router_dom_1.Link to="/about">About</react_router_dom_1.Link>
                        <react_router_dom_1.Link to="/article">Article</react_router_dom_1.Link>
                        <react_router_dom_1.Link to="/newarticle">New Article</react_router_dom_1.Link>
                        <react_router_dom_1.Link to="/login">Login</react_router_dom_1.Link>
                        <react_router_dom_1.Link to="/register">Register</react_router_dom_1.Link>
                    </antd_1.Space>
                </nav>
            </Header>

            <Content>
                <react_router_dom_1.Routes>
                    <react_router_dom_1.Route index element={<Home_1.default />}/>
                    <react_router_dom_1.Route path="/about" element={<About_1.default />}/>
                    <react_router_dom_1.Route path="/dashboard" element={<Dashboard_1.default />}/>
                    <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
                    <react_router_dom_1.Route path="/register" element={<Register_1.default />}/>
                    <react_router_dom_1.Route path="/article" element={<Articles_1.default />}/>
                    <react_router_dom_1.Route path="/a/:id" element={<DetailArticle_1.default />}/>
                    <react_router_dom_1.Route path="/newarticle" element={<newArticle_1.default />}/>
                    <react_router_dom_1.Route path="*" element={<Error404_1.default />}/>
                    
                </react_router_dom_1.Routes>
            </Content>

            <Footer>
                <p>VT6003CEM Demo</p>
            </Footer>
        </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
