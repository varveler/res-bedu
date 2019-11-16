import React, {Component, Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';



class App extends Component {

  chunk =()=> {
    console.log('Ckicked!!')
    // let config = {
    //   headers: {
    //     header1: value,
    //   }
    // }

    // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    // axios.defaults.xsrfCookieName = "csrftoken";
    // axios.defaults.withCredentials = true;
    axios.post('http://localhost/dihola/', )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <Fragment>
        <Typography align='center' variant='h3'>
          RES
        </Typography>
        <Button variant="contained" onClick={this.chunk} color="primary">
          saludame
        </Button>

      </Fragment>
    );
  }
}

export default App;
