import React from 'react';
import {EMailPreview} from "./components/EMailPreview";
import {Editor} from "./components/Editor";

function App() {
    return (
        <div id="wrapper">
            <Editor />
            <EMailPreview />
        </div>
    );
}

export default App;
