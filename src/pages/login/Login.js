import React, {Component} from 'react';
import KakaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {FACEBOOK_APPID, GOOGLE_CLIENT_ID, KAKAO_JSKEY} from "../../utils/config";

class Login extends Component {
  render() {

    const responseFacebook = (response) => {
      console.log(response);
    };

    const responseGoogle = (response) => {
      console.log(response);
    };

    const kk_success = (response) => {
      console.log(response);
    };

    const kk_failure = (error) => {
      console.log(error);
    };


    return (
      <div>
        <FacebookLogin
          appId={FACEBOOK_APPID}
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />

        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

        <KakaoLogin
          jsKey={KAKAO_JSKEY}
          onSuccess={kk_success}
          onFailure={kk_failure}
        />
      </div>
    );
  }
}


export default Login;
