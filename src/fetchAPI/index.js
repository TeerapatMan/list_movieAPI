import { Component } from 'react';

import { connect } from 'react-redux';

class fetchComponent extends Component {

    componentDidMount = () => {
        fetch('http://www.mocky.io/v2/5c3724b83000009d001f6253')
        .then(res => res.json())
        .then((response) => {
          this.props.DataMovive(response.movies)
          this.props.DataMoviveid(response.movies)
        })
      }

    render (){
        return (
            this.props.children
          )
    }
}
  const mapDispatchToProps = dispatch => ({
    DataMovive(res) {
      dispatch({
        type: "API",
        data: res
      })
    },
    DataMoviveid(responseid) {
      dispatch({
        type: "ID",
        responseid: responseid
      })
    }
  })

export default connect (
        null,
        mapDispatchToProps
    )(fetchComponent);