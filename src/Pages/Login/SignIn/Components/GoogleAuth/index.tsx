import React from "react";
import { useAppDispatch } from "Store";
import Actions from "Store/auth";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { IAuthState } from "Store/types";

function GoogleAuthComponent(): JSX.Element {
    const dispatch = useAppDispatch();
    function onError() {
        dispatch(
            Actions.onSubmit({
                name: null,
                email: null,
                error: "Validação inválida"
            })
        );
        return null;
    }

    function onSuccess(credentialResponse: CredentialResponse) {
        if (credentialResponse.credential) {
            const parsed: IAuthState = jwtDecode(credentialResponse.credential);
            dispatch(
                Actions.onSubmit({
                    name: parsed.name,
                    email: parsed.email,
                    error: false,
                })
            );
            return null;
        }
        onError();
        return null;
    }
    return (
        <div className="flex justify-center">
            <GoogleLogin
                shape="rectangular"
                size="large"
                logo_alignment="center"
                width="250px"
                onSuccess={(credentailResponse) =>
                    onSuccess(credentailResponse)
                }
                onError={() => onError()}
            />
        </div>
    );
}

const GoogleAuth = React.memo(GoogleAuthComponent);
export default GoogleAuth;
