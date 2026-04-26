import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import { SkillCard } from "#/components/SkillCard";

export const Route = createFileRoute("/")({ component: Home });

const skills: SkillRecord[] = [
	{
		id: "skill-001",
		title: "TanStack Router Guard",
		slug: "tanstack-router-guard",
		description: "Adds route-level auth guard helpers for protected pages.",
		category: "routing",
		tags: ["tanstack-router", "auth", "guards"],
		installCommand: "npx cursor-skills add tanstack-router-guard",
		createdAt: "2026-04-20T14:30:00.000Z",
		authorClerkId: "user_2f3ab9",
		authorEmail: "dev@example.com",
	},
	{
		id: "skill-002",
		title: "Firestore Query Optimizer",
		slug: "firestore-query-optimizer",
		description: "Generates indexed query patterns for Firestore collections.",
		category: "database",
		tags: ["firestore", "performance", "queries"],
		installCommand: "npx cursor-skills add firestore-query-optimizer",
		createdAt: "2026-04-22T09:10:00.000Z",
		authorClerkId: null,
		authorEmail: "maintainer@example.com",
	},
	{
		id: "skill-003",
		title: "Biome Lint Preset",
		slug: "biome-lint-preset",
		description:
			"Applies a strict Biome lint + format baseline for TS projects.",
		category: "tooling",
		tags: ["biome", "lint", "typescript"],
		installCommand: "npx cursor-skills add biome-lint-preset",
		createdAt: null,
		authorClerkId: "user_8c92d1",
		authorEmail: null,
	},
];

function Home() {
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
