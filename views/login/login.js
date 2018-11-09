import React, {Component} from 'react';
import { List, InputItem ,Button, WingBlank, WhiteSpace } from 'antd-mobile-rn';
import {StyleSheet, Text, View} from 'react-native';

export default class Login extends Component<Props> {

  componentDidMount() {
    console.log(styles.loginBtn)
  }

  render() {
    return (
      <View style={styles.container}>
        <WingBlank size="lg">
          <List style={styles.noBorderTop}>
            <InputItem type="phone">账号</InputItem>
          </List>
          <List style={styles.noBorderTop}>
            <InputItem>密码</InputItem>
          </List>
          <Button style={styles.loginBtn} type="primary">登录</Button>
        </WingBlank>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#fff',
  },
  loginBtn: {
    marginTop: 20,
  },
  noBorderTop: {
    borderTopWidth: 0
  }
});
