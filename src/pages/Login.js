/**
 * Created by davidngv on 12/1/16.
 */

import React, {Component, PropTypes} from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';


class Login extends Component {

  render() {
    const styles = {
      root: {
        backgroundColor: grey200,
        textAlign: 'center',
        padding: 10,
      },
      h3: {
        margin: 0,
        padding: 0,
        fontWeight: typography.fontWeightLight,
        fontSize: 22,
      },
      button: {
        marginTop: 32,
      },
    };

    return (
      <div style={styles.root}>
        <TextField
          floatingLabelText="User ID"
          hintText="User ID"
        /><br />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        /><br />
        <RaisedButton
          label="Login"
        />
      </div>
    );
  }
}

export default Login;