import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
    <div>
        Hello World
    </div>
);

const container = document.querySelector('#app');
const root = ReactDOM.createRoot(container);
root.render(<App />);