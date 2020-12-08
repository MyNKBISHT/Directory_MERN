import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
import {
  ThreeBarsIcon,
  PersonIcon,
  StopIcon,
  CommentIcon
} from "@primer/octicons-react";
import "../.././styles.css";

const Header = () => {
  return (
    <header>
      <div className="navbar-brands">
        <ul>
          <li>
            <ThreeBarsIcon size={16} /> Name of the Project
          </li>
          {/* <li>Name of the Project</li> */}
        </ul>
      </div>

      <nav>
        <ul className="nav_links">
          <li>
            <a href="#tasks">Tasks</a>
          </li>
          <li>
            <a href="#users">Users</a>
          </li>
          <li>
            <a href="#activity">Activity</a>
          </li>
          <li>
            <a href="#members">Members</a>
          </li>
        </ul>
      </nav>
      <div className="nav_end">
        <ul>
          <li>
            <a href="#account">
              <i>
                <PersonIcon size={16} />
              </i>
            </a>
          </li>
          <li>
            <a href="#support">
              <StopIcon size={16} /> Support
            </a>
          </li>

          <li>
            <a href="#account">
              <i>
                <CommentIcon size={16} />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
