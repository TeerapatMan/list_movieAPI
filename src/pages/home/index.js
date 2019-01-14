import React, { Component } from 'react';
import '../../App.css'
import 'antd/dist/antd.css';
import favorite from '../../img/favorite.png';

import { Col, Row, Avatar, Button, } from 'antd';
import { Cards, H1, } from '../../components/style/card.js';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class Home extends Component {

  handleClick = (id) => {
    this.props.dataMovie(id) //จะไปเรียกค่าที่อยู่ใน reducer
  }

  state = {
    data: []
  }
    
  render() {
    return (
      <div className="App-bg">
        <Row gutter={16}>
        { 
          this.props.movies.map(Items => (
            <Col span={6}>
              <div className="cardiner" key={Items.toString()}>
                <Cards>
                  <H1 className="name">{ Items.name }</H1>
                  <H1 className="released">{ Items.released }</H1>
                  <img alt="picMovie" src={ Items.image } className="cover" />
                  <H1 className="rated"><Avatar src={favorite} className="avatar"></Avatar>{ " "+ Items.rated + " " }<span className="span"> / 10 </span></H1>
                  <Link to={ "/detail/" + Items.id }>
                    {/* ต้องใส่ () เพื่อให้รอการทำงานก่อน */}
                    <Button type="danger" id={ Items.id } name={ Items.id } onClick={ () =>this.handleClick(Items.id) }>Detail</Button> 
                  </Link>
                </Cards>
              </div>
            </Col>
          ))
        }
        </Row>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  movies: state.cktype,//movie == this.props.movie
})

const mapDispatchToProps = dispatch => ({
  dataMovie(responseid){
    dispatch({
      type: "ID",
      responseid: responseid //ชื่อ action ต้องตรงกับไฟล์ actions ใน reducer
    })
  }
})


export default connect ( //สามารถส่งได้ 2 ตัว และสามารถเชื่อมต่อกับredux ได้ 
  mapStateToProps,
  mapDispatchToProps,
  )(Home);
