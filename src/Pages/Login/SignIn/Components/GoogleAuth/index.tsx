import React from "react";
import { useAppDispatch } from "Store";
import Actions from "Store/Auth";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { IAuthState } from "Store/Auth/types";

function GoogleAuthComponent(): JSX.Element {
  const dispatch = useAppDispatch();
  function onError() {
    dispatch(Actions.failedGoogleSubmit());
  }

  function onSuccess(credentialResponse: CredentialResponse) {
    if (credentialResponse.credential) {
      const parsed: IAuthState = jwtDecode(credentialResponse.credential);
      dispatch(
        Actions.googleLogin({
          name: parsed.name as string,
          email: parsed.email as string
        })
      );
    }
  }
  return (
    <div className="flex justify-center">
      <GoogleLogin
        shape="rectangular"
        size="large"
        logo_alignment="center"
        width="250px"
        onSuccess={(credentailResponse) => onSuccess(credentailResponse)}
        onError={() => onError()}
      />
    </div>
  );
}

const GoogleAuth = React.memo(GoogleAuthComponent);
export default GoogleAuth;
