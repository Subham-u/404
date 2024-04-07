import React, { useState ,useContext } from "react";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import "./Nav.css";


const Nav = () => {
	const {currentUser} = useContext(AuthContext);
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
			route: "/"
		},
		{
			text: "Messages",
			icon: "icons/message.svg",
			route: "./chat"
		},
		{
			text: "Clubs",
			icon: "icons/pie-chart.svg",
			route: "./clubs"
		},
		{
			text: "File Manager",
			icon: "icons/folder.svg",
		},
		{
			text: "Saved Items",
			icon: "icons/heart.svg",
		},
        {
			text: "Admin Profile",
			icon: "icons/user.svg",
			route: "./profile"
		},
		{
			text: "Settings",
			icon: "icons/settings.svg",
			route: "./settings"
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h2>StudentApp</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				
				<div className="nav-menu">
				    
					{menuItems.map(({ text, icon, route }) => (
				
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href={route}
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>

					))}
				</div>
				
				

			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
					<img src={currentUser.photoURL} alt="" />
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">{currentUser.displayName}</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img onClick={()=>signOut(auth)} className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default Nav;