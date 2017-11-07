import React, {Component} from "react";

class GraphBar extends Component {

    // React calls the render method every time the props change, which keeps
    // the component HTML up to date.
    render() {
        // An unusual thing about JSX is that the `style` attribute should be a
        // JavaScript object, not a string like in HTML.
        return (
            <div className="GraphBar">
                <div className="label">{this.props.label}</div>
                <div className="value" style={{width:this.props.value * 50}}>{this.props.value}</div>
            </div>
        );
    }
}

// Can't forget to export the component as the default export!
export default GraphBar;
