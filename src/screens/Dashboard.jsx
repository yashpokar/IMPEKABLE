import React from 'react';
import { Link } from 'react-router-dom';

import { Sidebar, SidebarItem } from './../components/layouts/Sidebar';

import Card from './../components/Card';

import homeIcon from './../assets/images/house.svg';
import search from './../assets/images/Search Icon.svg';
import calender from './../assets/images/Calendar.svg';
import product from './../assets/images/barcode.svg';
import chart from './../assets/images/chart-bar-32.svg';
import chat from './../assets/images/chat-46.svg';
import messages from './../assets/images/Path 9.svg';
import notification from './../assets/images/Notification Icon.svg';
import receipt from './../assets/images/receipt-list-42.svg';
import single from './../assets/images/single-02.svg';
import support from './../assets/images/Support Iocn.svg';
import avatar from './../assets/images/Avatar.png';

export default class Dashboard extends React.Component {
	render () {
		return (
			<div className="container">
				<nav className="navigation">
					<Link className="navigation__title" to='/'>IMPEKABLE</Link>

					<div className="navigation__search">
						<img src={ search } alt="Search"/>

						<input type="text" className="navigation__search-box" placeholder="Search transactions, invoices or help" />
					</div>

					<ul className="navigation__menu">
						<li className="navigation__menu-item navigation__menu-item__user-profile">
							<span className="navigation__menu-item__user-profile__uname">Jhon Doe</span>

							<img src={ avatar } alt="Jhon Doe" />
						</li>

						<li className="navigation__menu-item">
							<img src={ notification } alt="Notification" />
						</li>

						<li className="navigation__menu-item">
							<img src={ messages } alt="Messages" />
						</li>

						<li className="navigation__menu-item">
							<img src={ support } alt="Support" />
						</li>
					</ul>
				</nav>

				<Sidebar>
					<SidebarItem name="Home" icon={ homeIcon } />
					<SidebarItem name="Dashboard" icon={ chart } />
					<SidebarItem name="Inbox" icon={ homeIcon } />
					<SidebarItem name="Products" icon={ product } isActive />
					<SidebarItem name="Invoices" icon={ receipt } />
					<SidebarItem name="Customers" icon={ single } />
					<SidebarItem name="Chat Room" icon={ chat } />
					<SidebarItem name="Calendar" icon={ calender } />
					<SidebarItem name="Help Center" icon={ support } />
					<SidebarItem name="Settings" icon={ homeIcon } />
				</Sidebar>

				<section className="content">
					<div id="page-title">Overview</div>

					<div>
						<Card text="246K" title="Total Views" percent="13.8" />
						<Card text="246K" title="Total Views" percent="13.8" isUp />
						<Card text="246K" title="Total Views" percent="13.8" />
					</div>

					<div className="card has-fullwidth mt-10">

					</div>
				</section>
			</div>
		)
	}
}
