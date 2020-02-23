import React from "react";
import "./Menubar.css";

class Menubar extends React.Component {
  render() {
    return (
      <div className="menubar">
        <div className="menu-content">
          <ul>
            <li>
              <a className="anchors" href="#">
                {this.props.left1}
              </a>
            </li>
            <li>
              <a className="anchors" href="#">
                {this.props.left2}
              </a>
            </li>
            <li>
              <a className="anchors" href="#">
                {this.props.right2}
              </a>
            </li>
            <li>
              <a className="anchors" href="#">
                {this.props.right1}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menubar;
