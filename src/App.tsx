import React from "react";
import Redux from "Store";
import ThemeProvider from "Components/ThemeProvider";
import RoutesWrapper from "Router";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
    return (
        <Redux>
            <GoogleOAuthProvider clientId="1073341523252-s6oqv70hds6d9sdikpgfs2su07ghnep8.apps.googleusercontent.com">
                <ThemeProvider>
                    <RoutesWrapper />
                </ThemeProvider>
            </GoogleOAuthProvider>
        </Redux>
    );
}

export default App;
