// Content.jsx
console.log("Mounting Content.jsx... <Content />");

import React from 'react'
import Gauge from "../../../components/Gauge/Gauge";

class Content extends React.Component {
    render() {               
        return (
            <div className="content">
                <div className="line"></div>
                {/* Home item */}
                <div className="item card">
                    <span>Eagleton End container: The End Item</span>
                    <Gauge />
                </div>
            </div>
        );
    }
}

export default Content

// eof
