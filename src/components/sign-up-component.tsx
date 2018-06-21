import * as PropTypes from 'prop-types';
import * as React from 'react';

import {
  Button, // https://material-ui.com/demos/buttons/
  Grid,
  TextField, // https://material-ui.com/demos/text-fields/
  withStyles
} from '@material-ui/core';

import { Styles } from './styles';

class SignUp extends React.Component<any, any> {
  public static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      password: '',
      username: '',
    }
  }

  public render() {
    const { classes } = this.props;

    const {
      password,
      username,
    } = this.state;

    return (
      <form className={classes.form}>
        <Grid container={true} direction="column" spacing={16}>
          <Grid item={true}>
            <TextField
              id="username"
              label="Username"
              className={classes.textField}
              value={username}
              autoComplete="username"
              onChange={this.handleChange('username')}
              margin="normal"
            />
          </Grid>
          <Grid item={true}>
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              value={password}
              type="password"
              autoComplete="current-password"
              onChange={this.handleChange('password')}
            />
          </Grid>
          <Grid item={true}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.onSaveClicked()}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }

  private handleChange = (inputKey: string) => (event: any) => {
    this.setState({
      [inputKey]: event.target.value,
    });
  }

  private onSaveClicked = () => (event: any) => {
    // Implements sign up logic
  }
}

export default withStyles(Styles.signUp)(SignUp);
