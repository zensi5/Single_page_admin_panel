import React from 'react';
import './SearchBar.scss';
import { Input } from 'antd';
import { ReactComponent as SearchIcon } from '../../assets/svgs/SearchIcon.svg';


function SearchBar() {
    return (
        <Input
            allowClear
            placeholder="Search here"
            prefix={<SearchIcon />}
        />
    )
}

export default SearchBar;