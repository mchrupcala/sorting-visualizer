import React from "react";
import SideNav, { 
    // Toggle, Nav, 
    NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const DashboardControls = (props) => {
    return (

        <SideNav className="desktop"
    // onSelect={(selected) => {
    //     props.selected
    // }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="merge">
        <NavItem eventKey="merge" onClick={props.merge_sort}>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '2.25em' }} />
            </NavIcon>
            <NavText>
                Merge Sort
            </NavText>
        </NavItem>
        <NavItem eventKey="bubble" onClick={props.bubble_sort}>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '2.25em' }} />
            </NavIcon>
            <NavText>
                Bubble Sort
            </NavText>
        </NavItem>
        <NavItem eventKey="quick" onClick={props.quick_sort}>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '2.25em' }} />
            </NavIcon>
            <NavText>
                Quick Sort
            </NavText>
        </NavItem>

    </SideNav.Nav>
</SideNav>
    ) }

export default DashboardControls;