import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function SideMenu() {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <>
      {isCollapsed && (
        <div class="sidebar-container">
          <div class="sidebar-logo">
            <button
              onClick={() => {
                setCollapsed(!isCollapsed);
              }}
              class="button"
            >
              <i class="fa fa-bars"></i>
            </button>
          </div>
          <ul class="sidebar-navigation">
            <>
              <li>
                <Link to="/">
                  <i class="fa fa-home"></i>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <i class="fa fa-tachometer"></i>
                </Link>
              </li>
            </>
            <>
              <li>
                <Link to="/friends">
                  <i class="fa fa-users"></i>
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <i class="fa fa-cog"></i>
                </Link>
              </li>
              <li>
                <Link to="/information">
                  <i class="fa fa-info-circle"></i>
                </Link>
              </li>
            </>
          </ul>
        </div>
      )}
      {!isCollapsed && (
        <div class="sidebar-container-collapsed">
          <div class="sidebar-logo">
            <button
              onClick={() => {
                setCollapsed(!isCollapsed);
              }}
              class="button"
            >
              <i class="fa fa-bars"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
