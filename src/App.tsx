import React from "react";
import Redux from "Store";
import ThemeProvider from "Components/ThemeProvider";
import RoutesWrapper from "Router";

function App() {
    return (
        <Redux>
            <ThemeProvider>
                <RoutesWrapper />
            </ThemeProvider>
        </Redux>
    );
}

export default App;
