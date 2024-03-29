import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
// import {useDataLayerValue} from './StateProvider';
import { useDataLayerValue } from "./DataLayer";

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();

return (

    <div className='header'>
        <div className='header__left'>
        <SearchIcon />
        <input
            placeholder='Search for Artists, Songs,or Albums'
            type='text'
            />
        </div>
        <div className='header__right'>
            <Avatar src={user?.images[0]?.url}alt='RQ' />
            <h4>Caesario Dinario</h4>
        </div>
    
    </div>
)
}

export default Header;
