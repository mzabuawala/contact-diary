import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Image, Button, Icon } from 'semantic-ui-react';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    const {pathname} = useLocation();
    return (
        <Menu secondary pointing>
            <Image src={logo} height={60} width={60}/>
            <Menu.Item style={{fontSize:24}} as={Link} to='/'>Contact Diary</Menu.Item>

            {pathname && pathname === '/' && (
                <Menu.Item position='right'>
                    <Button primary icon as={Link} to='/contacts/create'>
                        <Icon name='add'></Icon>
                        Create Contact
                    </Button>
                </Menu.Item>
            )}

            {pathname && pathname === '/' && (
                <Menu.Item>
                    <Button basic icon color='red'>
                        <Icon name='log out'></Icon>
                        Logout
                    </Button>
                </Menu.Item>
            )}
        </Menu>
    )
}

export default Header;