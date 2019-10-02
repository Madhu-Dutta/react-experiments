import React from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import Landing from "./landing";
import About from "./about";
import Project from "./project";
import Blog from "./blog";
import Contact from "./contact";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <Router>
                <Navbar fixed="top" light expand="sm">
                    <NavbarBrand exact to="/" aria-label="re-direct to home">
                        <span>
                            <NavLink exact to="/" aria-label="re-direct to home">mdp</NavLink>
                        </span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink to="/about/" aria-label="re-direct to About page">About</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/projects/" aria-label="re-direct to Project page">Projects</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/blogs/" aria-label="re-direct to Blogs page">Blogs</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/contact/" aria-label="re-direct to Contact page">Contact</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Lang
                                    </DropdownToggle>
                                <DropdownMenu center >
                                    <DropdownItem>
                                        en
                                    </DropdownItem>
                                    <DropdownItem>
                                        fr
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>

                </Navbar>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Project} />
                    <Route path="/blogs" component={Blog} />
                    <Route path="/contact" component={Contact} />
                    {/* <Route component={Notfound} /> */}
                </Switch>
            </Router >

        )
    }
}


export default Header;
