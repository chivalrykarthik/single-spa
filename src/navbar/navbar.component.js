import React from 'react';
import Dialog from './dialog.component.js';
import FrameworkInspector from './framework-inspector.component.js';
import {getBorder, showFrameworkObservable} from 'src/common/colored-border.js';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworkInspector: false,
    };
  }
  componentDidMount() {
    this.subscription = showFrameworkObservable.subscribe(newValue => this.setState({frameworkInspector: newValue}));
    $(".button-collapse").sideNav();
  }
  render() {
    return (
      <div>
        {this.state.frameworkInspector &&
          <div style={{position: 'fixed', top: 0, left: 0, zIndex: 10000}}>
            (built with React)
          </div>
        }
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo activator" href="#">
                <i />
                single-spa-examples
              </a>
              <a href="#" data-activates="mobile-demo" className="button-collapse">
                <i className="material-icons">
                  menu
                </i>
              </a>
              <ul className="right hide-on-med-and-down">
                {menuItems.call(this)}
              </ul>
            </div>
          </nav>
        </div>
        <ul className="side-nav" id="mobile-demo">
          {menuItems.call(this)}
        </ul>
      </div>
    );
  }
  componentWillUnmount() {
    this.subscription.dispose();
  }

  navigateTo = url => window.history.pushState(null, null, url)
}

function menuItems() {
  return (
    <div>
    
      <li>
        <a onClick={() => this.navigateTo("/")}>
          Home
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/about")}>
          About
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/counter")}>
          Counter
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/lazyCounter")}>
          LazyCounter
        </a>
      </li>

      <li>
        <a onClick={() => this.navigateTo("/showUser")}>
          ShowUser
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/updateUser")}>
          UpdateUser
        </a>
      </li>
     
    </div>
  )
}
