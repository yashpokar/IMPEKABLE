import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = props => (
	<aside className="sidebar">
		<ul className="sidebar__menu">
			{ props.children }
		</ul>
	</aside>
);

const SidebarItem = props => (
	<li className={ `sidebar__menu-item${ props.isActive ? ' is-active' : '' }` }>
		<Link className="sidebar__menu-item__link" to='/'>
			<img src={ props.icon } alt={ props.name } className="sidebar__menu-item__icon"/> { props.name }
		</Link>
	</li>
);

SidebarItem.propTypes = {
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

Sidebar.defaultProps = {
	isActive: false,
};

export { Sidebar, SidebarItem };
