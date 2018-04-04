import React, {Component, PropTypes} from 'react';
import {Dropdown, AppBar, Checkbox, IconButton} from 'react-toolbox';
import {Layout, NavDrawer, Panel, Sidebar} from 'react-toolbox';
import theme from './MainStuff.css';

const countries = [
    {value: 'EN-gb', label: 'England'},
    {value: 'ES-es', label: 'Spain'},
    {value: 'TH-th', label: 'Thailand'},
    {value: 'EN-en', label: 'USA'}
];


export default class MainStuff extends Component {
    state = {
        drawerActive: true,
        drawerPinned: true,
        sidebarPinned: true
    };


    toggleDrawerActive = () => {
        this.setState({drawerActive: !this.state.drawerActive});
    };

    toggleDrawerPinned = () => {
        this.setState({drawerPinned: !this.state.drawerPinned});
    };

    toggleSidebar = () => {
        this.setState({sidebarPinned: !this.state.sidebarPinned});
    };

    render () {
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                           pinned={this.state.drawerPinned} permanentAt='xxxl'
                           onOverlayClick={this.toggleDrawerActive}>

                    <p className={theme.leftDrawer} >
                        Navigation, account switcher, etc. go here.
                        <Dropdown label='Cohort'
                                  auto
                                  onChange={this.handleChange}
                                  source={countries}
                                  value={this.state.value}
                        />
                        <Dropdown label='Sort algorithm'
                                  auto
                                  onChange={this.handleChange}
                                  source={countries}
                                  value={this.state.value}
                        />
                        <Dropdown label='Filter'
                                  auto
                                  onChange={this.handleChange}
                                  source={countries}
                                  value={this.state.value}
                        />
                    </p>
                </NavDrawer>
                <Panel>
                    <AppBar leftIcon='menu' onLeftIconClick={this.toggleDrawerActive}/>
                    <div style={{flex: 1, overflowY: 'auto', padding: '1.8rem'}}>
                        <h1>Main Content</h1>
                        <p>Main content goes here.</p>
                        <Checkbox label='Pin drawer' checked={this.state.drawerPinned}
                                  onChange={this.toggleDrawerPinned}/>
                        <Checkbox label='Show sidebar' checked={this.state.sidebarPinned}
                                  onChange={this.toggleSidebar}/>
                    </div>
                </Panel>
                <Sidebar pinned={this.state.sidebarPinned} width={5}>
                    <div><IconButton icon='close' onClick={this.toggleSidebar}/></div>
                    <div style={{flex: 1}} className={theme.rightDrawer}>
                        <p>Supplemental content goes here.</p>
                    </div>
                </Sidebar>
            </Layout>
        );
    }
}
