"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const { useToken } = antd_1.theme;
const { useBreakpoint } = antd_1.Grid;
const { Text, Title, Link } = antd_1.Typography;
const Register = () => {
    const { token } = useToken();
    const screens = useBreakpoint();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    const styles = {
        container: {
            margin: "0 auto",
            padding: screens.md ? `${token.paddingXL}px` : `${token.paddingXL}px ${token.padding}px`,
            width: "380px"
        },
        forgotPassword: {
            float: "right"
        },
        header: {
            marginBottom: token.marginXL,
            textAlign: "center"
        },
        section: {
            alignItems: "center",
            backgroundColor: token.colorBgContainer,
            display: "flex",
            height: screens.sm ? "100vh" : "auto",
            padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
        },
        signup: {
            marginTop: token.marginLG,
            textAlign: "center",
            width: "100%"
        },
        text: {
            color: token.colorTextSecondary
        },
        title: {
            fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
        }
    };
    return (<section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.125" width="32" height="32" rx="6.4" fill="#1890FF"/>
            <path d="M19.3251 4.80005H27.3251V12.8H19.3251V4.80005Z" fill="white"/>
            <path d="M12.925 12.8H19.3251V19.2H12.925V12.8Z" fill="white"/>
            <path d="M4.92505 17.6H14.525V27.2001H4.92505V17.6Z" fill="white"/>
          </svg>

          <Title style={styles.title}>Sign up</Title>
          <Text style={styles.text}>
            Join us! Create an account to get started.
          </Text>
        </div>
        <antd_1.Form name="normal_signup" onFinish={onFinish} layout="vertical" requiredMark="optional">
          <antd_1.Form.Item name="name" rules={[
            {
                required: true,
                message: "Please input your Name!",
            },
        ]}>
            <antd_1.Input prefix={<icons_1.UserOutlined />} placeholder="Name"/>
          </antd_1.Form.Item>
          <antd_1.Form.Item name="email" rules={[
            {
                type: "email",
                required: true,
                message: "Please input your Email!",
            },
        ]}>
            <antd_1.Input prefix={<icons_1.MailOutlined />} placeholder="Email"/>
          </antd_1.Form.Item>
          <antd_1.Form.Item name="password" extra="Password needs to be at least 8 characters." rules={[
            {
                required: true,
                message: "Please input your Password!",
            },
        ]}>
            <antd_1.Input.Password prefix={<icons_1.LockOutlined />} type="password" placeholder="Password"/>
          </antd_1.Form.Item>
          <antd_1.Form.Item style={{ marginBottom: "0px" }}>
            <antd_1.Button block type="primary" htmlType="submit">
              Sign up
            </antd_1.Button>
            <div style={styles.signup}>
              <Text style={styles.text}>Already have an account?</Text>{" "}
              <Link href="/login">Sign in</Link>
            </div>
          </antd_1.Form.Item>
        </antd_1.Form>
      </div>
    </section>);
};
exports.default = Register;
