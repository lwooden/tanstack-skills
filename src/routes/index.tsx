import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Terminal } from "lucide-react";
import { SkillCard } from "#/components/SkillCard";
import { getSkills } from "#/dataconnect-generated";
import { dataConnect } from "#/lib/firebase";

// Data Fetching Process
// Step 1: Define higher-order server function that runs the getSkills query
const getSkillsFn = createServerFn({ method: "GET" }).handler(async () => {
	try {
		const { data } = await getSkills(dataConnect, {
			searchTerm: "",
			limit: 10,
		});
		console.log("Server-side data fetch: ", data.skills);
		return data.skills;
	} catch (error) {
		console.error(error);
		return [];
	}
});

export const Route = createFileRoute("/")({
	component: Home,
	// Step 2: Define loader function in the Route Definition that calls the higher-order server function
	// This setup allows TanStack Router to fetch the data before the component is rendered
	loader: () => getSkillsFn(),
});

// const skills: SkillRecord[] = [
// 	{
// 		id: "skill-001",
// 		title: "TanStack Router Guard",
// 		slug: "tanstack-router-guard",
// 		description: "Adds route-level auth guard helpers for protected pages.",
// 		category: "routing",
// 		tags: ["tanstack-router", "auth", "guards"],
// 		installCommand: "npx cursor-skills add tanstack-router-guard",
// 		createdAt: "2026-04-20T14:30:00.000Z",
// 		authorClerkId: "user_2f3ab9",
// 		authorEmail: "dev@example.com",
// 	}
//
// ];

function Home() {
	// Step 3: Access the loader data in the component
	const skills = Route.useLoaderData();
	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registry for <br />
						<span className="text-gradient">Agentic Intelligence</span>
					</h1>
					<p>Lorem</p>
				</div>
				<div className="actions">
					<Link to="/skills" className="btn-primary">
						<Terminal size={18} />
						<span>Browse Registiry</span>
					</Link>
					<Link to="/skills/new" className="btn-secondary">
						Publish Skill
					</Link>
				</div>
			</section>
			<section className="latest">
				<div className="space-y-2">
					<h2 className="text-gradient">Recently Created Skills</h2>
					<p>Latest skills loaded from firestore</p>
				</div>
				<div>
					<ul>
						{skills.length > 0 ? (
							<div className="skills-grid">
								{skills.map((skill) => (
									<SkillCard key={skill.id} {...skill} />
								))}
							</div>
						) : (
							<p>No skills yet!</p>
						)}
					</ul>
				</div>
			</section>
		</div>
	);
}
