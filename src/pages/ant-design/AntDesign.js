import React, { useState } from "react";
import {
  Layout,
  Menu,
  Table,
  Tag,
  Space,
  Card,
  Modal,
  Button,
  Spin,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';


import Login from "./components/Login";

import "antd/dist/antd.css";


const { Header, Sider, Content } = Layout;
const AntDesign = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSpin, setShowSpin] = useState(false);
  const [collapsed, setcollapsed] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <span>Invite {record.name}</span>
            <span>Delete</span>
            <Button type="primary" onClick={() => onShowModal()}>
              Open Modal
            </Button>
          </Space>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const toggle = () => {
    setcollapsed(!collapsed);
  };

  const onShowModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onLoginSubmit = () => {
    setShowSpin(true);
    setTimeout(() => {
      setShowSpin(false);
      setIsLogin(true);
    }, 4000);
  };

  return (
    <Layout style={{ height: '100% '}}>
      {isLogin ? 
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider> : null }
        <Layout className="site-layout">
          <Header className="site-layout-background flex1" style={{ backgroundColor: "#fff" }}>
          {isLogin ? <>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })} </> : null }
            <div></div>
            {isLogin ? (
            <Button
              type="default"
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Logout
            </Button>
          ) : (
            false
          )}
          </Header>
          <Content style={{ margin: "40px 16px" }}>
          {!isLogin ? (
            <div>
              <Login onLoginSubmit={onLoginSubmit} />
            </div>
          ) : (
            <>
              <Table columns={columns} dataSource={data} />

              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Card title="Card title">Card content</Card>
              </Modal>
            </>
          )}

          {showSpin ? (
            <div className="position-center">
              <Spin />
            </div>
          ) : null}
        </Content>
        </Layout>
      </Layout>
  );
};

export default AntDesign;
