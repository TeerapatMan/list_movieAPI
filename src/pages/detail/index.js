import React, { Component } from 'react';
import '../../App.css';
import 'antd/dist/antd.css';
import { H1 } from '../../components/style/card.js';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import favorite from '../../img/favorite.png';
import { 
  Row,
  Col,
  Layout,
  Avatar,
  Menu,
  Breadcrumb
} from 'antd';

class detailHome extends Component {
  
  state = {
    data: []
  }

  render() {
    console.log(this.props.match.params.Idmovie)
    console.log(this.props.movies)
    const {
      Header, Content, Footer,
    } = Layout;
    //สร้างตัวแปรที่ชื่อ movie = movies ใน api ทำให้เป็นfunction แล้ว ck ว่า Idmovie(ในreducer,ล่าง)
    const movie = this.props.movies.filter(movie => this.props.match.params.Idmovie == movie.id)[0];
    console.log(movie)
    if( movie == null ) {
      return null
    }
    //if จะทำงานrander ใหม่ ทุกครั้งเมื่อ props มีการเปลี่ยนค่า
    
    return (
      <div className="App-bg">
        <div>
          <div>
            <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}
                >
                <NavLink  to="/" className="link-detail">
                  <Menu.Item key="1">Home</Menu.Item>
                </NavLink> 
                  
                </Menu>
              </Header>
              <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Detail Movie</Breadcrumb.Item>
                </Breadcrumb>
                <div className="Content-div" style={{ background: '#fff' }}>
                  <Row>
                    <Col span={18} push={6}>
                      <div className="header">
                        <H1 className="name" >{ movie.name }</H1>
                        <H1 className="releaseddetail" >{ movie.released }</H1>
                        <H1 className="rated"><Avatar src={favorite} ></Avatar>{ " "+ movie.rated + " " }<span className="span"> / 10 </span></H1>
                      </div>
                    </Col>
                    <Col span={6} pull={18}>
                      <div>
                        <img alt="picMovie" src={ movie.image } className="covers" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({//movie == this.props.movie
  movies: state.cktype,
  Idmovie: state.ck_id
  })

export default connect ( //สามารถส่งได้ 2 ตัว และสามารถเชื่อมต่อกับredux ได้ 
  mapStateToProps,
  null,
  )(detailHome);
