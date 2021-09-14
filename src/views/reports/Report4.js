import React from 'react'
import { Layout, Menu} from 'antd';
import {AreaChartOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import TimelineIcon from '@material-ui/icons/Timeline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PieChartIcon from '@material-ui/icons/PieChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export default function Reports() {

    const {Sider, Content } = Layout;


    return (
        <Layout>
        <Sider width={230} style={{height:'600px'}} trigger={null}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['5']}>
          <Menu.Item key="1" icon={<ArrowBackIcon style={{fontSize:'24px'}}/>}>
            <Link to="/dashboard">Back</Link>
            </Menu.Item>
          
          <Menu.Item key="2" icon={<AreaChartOutlined style={{fontSize:'24px'}}/>}>
            <Link to="/reports">Hospital Insights</Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<TimelineIcon style={{fontSize:'24px'}}/>}>
            <Link to="/report2">Doctor Engagements</Link>
            </Menu.Item>
            
            <Menu.Item key="4" icon={<PieChartIcon style={{fontSize:'24px'}}/>}>
            <Link to="/report3">Patient Demography</Link>
            </Menu.Item>

            <Menu.Item key="5" icon={<EqualizerIcon style={{fontSize:'24px'}}/>}>
            <Link to="/report4">Doctor Insights</Link>
            </Menu.Item>

            <Menu.Item key="6" icon={<ShowChartIcon style={{fontSize:'24px'}}/>}>
            <Link to="/report5">Patient Care</Link>
            </Menu.Item>
        </Menu>
        </Sider>

        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 0,
              minHeight: 450,
            }}>

        <iframe width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiMTFiZWQwNDgtNDI1MC00YmM3LTkwZmQtNTg0NjgyZWZiNmRiIiwidCI6Ijk3OTg0YzJiLWEyMjktNDYwOS04MTg1LWFlODQ5NDdiYzNmYyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
        </Content>
        
        </Layout>
    )
}
