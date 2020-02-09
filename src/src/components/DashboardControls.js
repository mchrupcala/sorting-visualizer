import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const DashboardControls = (props) => {
    return (

        <SideNav
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

        {/* <div className="ui sidebar inverted vertical menu dashboard-controls">
            <a onClick={props.merge_sort} className="sort-banner item">
                Merge Sort
            </a>
            <a onClick={props.bubble_sort} className="sort-banner item">
            Bubble Sort
            </a>
            <a onClick={props.quick_sort} className="sort-banner item">
            Quick Sort
            </a>
             <Button className="ui primary button" text={"Sort"}/>
      </div> */}

        // <div >
        //     <h2 onClick={props.merge_sort} className="sort-banner">Merge Sort</h2>
        //     <h2 onClick={props.bubble_sort} className="sort-banner">Bubble Sort</h2>
        //     <h2 onClick={props.quick_sort} className="sort-banner">Quick Sort</h2>
        //     {/* <h2 onClick={props.heap_sort} className="sort-banner">Heap Sort</h2> */}

        //     <Button className="ui primary button" text={"Sort"}/>
        // </div>

export default DashboardControls;