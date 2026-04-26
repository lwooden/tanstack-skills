import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

export const Navbar = () => (
	<nav className="navbar">
		<div className="brand">
			<div className="mark">
				<div className="glyph"></div>
			</div>
			<Link to="/">
				<span>Skilld</span>
			</Link>
		</div>
		<div className="actions">
			<Link to="/sign-in/$" className="btn-primary">
				<LogIn size={16} />
				Login
			</Link>
		</div>
	</nav>
);
