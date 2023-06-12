import React from "react";
import {Nav, initializeIcons} from '@fluentui/react'


const links = [
    {
        links: [
            {
                name: 'Dashboard',
                url: '/',
                key: 'Key1',
                iconProps: {
                    iconName: 'News',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: 'blue'                        }
                    }
                }
            },
            {
                name: 'Settings',
                url: '/',
                key: 'Key2',
                iconProps: {
                    iconName: 'PlayerSettings',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: 'blue'                        }
                    }
                }
            },
            {
                name: 'transfer',
                url: '/',
                key: 'Key3',
                iconProps: {
                    iconName: 'SwitcherStartEnd',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: 'blue'                        }
                    }
                }
            },
            {
                name: 'Stats',
                url: '/',
                key: 'Key4',
                iconProps: {
                    iconName: 'StackedLineChart',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: 'blue'                        }
                    }
                }
            }
        ]
    }
]
const navigationStyles = {
    root: {
        height: '100vh',
        boxSizing: 'border-box',
        overflowY: 'auto',
        paddingTop: '10vh',
    }
}

const Navigation = () => {
    initializeIcons();
    return (
      <Nav
        groups={links}
        selectedKey="Key1"
        styles={navigationStyles}
      />
    );
  }
  
export default Navigation;