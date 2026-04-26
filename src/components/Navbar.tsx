import { Show, UserButton } from "@clerk/tanstack-react-start";
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
			<Show when="signed-in">
				<UserButton />
			</Show>
			<Show when="signed-out">
				<Link to="/sign-in/$" className="btn-primary">
					{/* <SignInButton mode="modal" /> */}
					<LogIn size={16} />
					Login
				</Link>
			</Show>
		</div>
	</nav>
);
