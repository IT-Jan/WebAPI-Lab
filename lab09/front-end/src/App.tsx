import { Layout, Space } from 'antd';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About"
import Article from './components/Articles';
import DetailArticle from "./components/DetailArticle";
import Login from "./components/Login";
import Register from "./components/Register"

const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <Router>
            <Header>
                <nav>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/about">About</Link>
                        <Link to="/Article">Article</Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/Register">Register</Link>
                    </Space>
                </nav>
            </Header>

            <Content>
                <Routes>
                    <Route index element={ <Home/> } />
                    <Route path="/about" element={ <About/> } />
                    <Route path="/dashboard" element={ <Dashboard/> } />
                    <Route path="/article" element={ <Article /> } />
                    <Route path="/a/:id" element={ <DetailArticle/> }/>
                    <Route path="/login" element={ <Login/> } />
                    <Route path="/register" element={ <Register/> } />
                </Routes>
            </Content>

            <Footer>
                <p>VT6003CEM Demo</p>
            </Footer>
        </Router>
    );
}

export default App;