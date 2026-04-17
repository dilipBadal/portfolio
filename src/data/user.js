const INFO = {
	main: {
		title: "Dilip Badal | Full-Stack Engineer",
		name: "Dilip Badal",
		role: "Full-Stack Engineer / Product Systems Builder",
		email: "workwithdilip1@gmail.com",
		location: "Paris, France",
		availability: "Open to strong product teams.",
		logoText: "DB",
	},

	socials: {
		github: "https://github.com/dilipBadal",
		linkedin: "https://www.linkedin.com/in/dilip-badal-aab9a5243/",
		instagram: "https://www.instagram.com/dilip._.33d?igsh=b2NsaDExeWRuOWpr",
	},

	homepage: {
		label: "",
		title: "I build sharp, cinematic digital experiences.",
		description:
			"I'm Dilip Badal, a Paris-based full-stack engineer blending product thinking, motion sensibility, and solid architecture to ship web, mobile, and AI-assisted experiences people actually remember.",
		secondary:
			"My sweet spot lives between clean systems and emotional impact: interfaces with presence, codebases with discipline, and products that feel considered from the first scroll to the last click.",
		metrics: [
			{
				value: "3+",
				label: "years building across product, mobile, and web",
			},
			{
				value: "Paris",
				label: "based, globally collaborative",
			},
			{
				value: "Full stack",
				label: "React, Node.js, Python, product-minded execution",
			},
		],
		ticker: [
			"React",
			"Node.js",
			"React Native",
			"Python",
			"Motion-led UI",
			"Product Systems",
			"AI Prototypes",
			"Data-informed Thinking",
		],
		spotlight: [
			"Performance should feel invisible.",
			"Motion should guide, not distract.",
			"Every layer should earn its place.",
		],
	},

	about: {
		title: "A little more about me and how I work.",
		description:
			"The goal is never just to make something function. The goal is to make it feel inevitable. I like interfaces with rhythm, systems with clarity, and engineering decisions that quietly make the whole experience feel more premium.",
		story: [
			"I started by building practical products for real communities, which taught me very quickly that users do not separate code quality from product quality. If a flow is confusing, sluggish, or emotionally flat, it does not matter how clever the implementation is.",
			"That pushed me toward a style of engineering that stays close to product thinking. I like shaping the architecture, but I also care about pacing, responsiveness, and how a screen lands emotionally in the first two seconds.",
			"Today I work across full-stack product builds, mobile experiences, and data-informed systems. The throughline is simple: make the product feel strong, modern, and trustworthy without bloating it with noise.",
			"Oh and I love dogs XD.",
		],
		quote:
			"Build the thing users trust before they can even explain why it feels right.",
		principles: [
			{
				title: "Precision Over Noise",
				body: "I prefer fewer elements with more intention. Strong hierarchy, controlled contrast, and motion that supports meaning beat decoration every time.",
			},
			{
				title: "Systems That Scale",
				body: "A polished interface means more when the code underneath can evolve cleanly. I aim for foundations that support speed, maintenance, and future product decisions.",
			},
			{
				title: "Emotion Through Engineering",
				body: "The best digital products are remembered not only because they work, but because they feel composed, confident, and alive in the hand.",
			},
		],
		educations: [
			{
				institution: "EDC Paris Business School",
				degree: "Masters in Data Science and Business Intelligence",
				duration: "2025 - 2027",
				summary: "Advanced focus on bridging complex data analytics with strategic product decisions. Gaining deep expertise in business intelligence to build systems that are functionally robust and strategically informed.",
			},
			{
				institution: "RJS First Grade College",
				degree: "Bachelor of Computer Applications",
				duration: "2021 - 2023",
				summary: "Established strong foundations in computer science, software engineering, and full-stack development. Focused on algorithms, core software architecture, and the mechanics of building scalable web applications.",
			}
		],
		stack: [
			"React",
			"React Native",
			"Node.js",
			"Express / APIs",
			"Python",
			"SQL / PostgreSQL",
			"GCP",
			"Airflow",
			"Pandas",
			"Scikit-Learn",
			"Business Intelligence",
			"PowerBI",
			"Data Storytelling",
		],
		stats: [
			{
				value: "Web + Mobile",
				label: "Shipping across platforms with one product mindset.",
			},
			{
				value: "Engineering + BI",
				label: "Technical rigor shaped by business intelligence studies.",
			},
			{
				value: "Clarity",
				label: "I optimize for products that feel obvious in the best way.",
			},
		],
	},

	projectsPage: {
		title: "A few things I've built.",
		description:
			"These projects span community platforms, social systems, AI experiments, and interactive products. The common thread is a focus on removing friction while making the product feel more alive.",
		process: [
			{
				step: "01",
				title: "Shape the narrative",
				body: "Figure out what the product needs to communicate before deciding what it needs to show.",
			},
			{
				step: "02",
				title: "Design the system",
				body: "Translate that narrative into reusable patterns, clean states, and a structure that can scale without collapsing.",
			},
			{
				step: "03",
				title: "Tune the feel",
				body: "Refine motion, responsiveness, and visual weight until the product feels deliberate instead of merely finished.",
			},
		],
	},

	projects: [
		{
			title: "StudaConnect",
			category: "Digital Student Communication",
			year: "2026",
			description:
				"StudaConnect offers a fully white-labeled social platform for universities. Replace messy group chats with a dedicated, safe, and branded digital campus.",
			outcome:
				"Built to improve student engagement and campus life.",
			stack: ["React Native", "Python", "PostgreSQL", "Supabase"],
			logo: "/studaconnect_logo.png",
			linkText: "Visit platform",
			link: "https://www.studaconnect.com/",
			featured: true,
		},
		{
			title: "LÜVYN",
			category: "Dating App",
			year: "2026",
			description:
				"An intentional dating platform built around the mechanics of slow dating. By replacing endless swiping with paced interactions, LÜVYN reduces user fatigue and creates an environment where connections actually feel earned.",
			outcome:
				"Proved that social software can drive engagement through calm, deliberate pacing rather than aggressive dopamine loops.",
			stack: ["React", "Python", "PostgreSQL"],
			logo: "/luvyn_logo.png",
			linkText: "Visit platform",
			link: "www.luvyn.app",
			featured: true,
		},
		{
			title: "Square Social",
			category: "Social Product",
			year: "2024",
			description:
				"A modern social networking architecture with real-time interactions, persistent notifications, and a responsive experience built for continuous engagement.",
			outcome:
				"Explored how social software can feel lightweight without losing depth.",
			stack: ["React", "Node.js", "Express", "MongoDB"],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View source",
			link: "https://github.com/dilipBadal/Square",
			featured: false,
		},
		{
			title: "Strategic Chess AI",
			category: "AI / Systems",
			year: "2024",
			description:
				"A Python chess engine with a custom AI opponent using minimax search and heuristic evaluation to generate more thoughtful, strategic play.",
			outcome:
				"An exercise in translating classic algorithmic thinking into a playable experience.",
			stack: ["Python", "Algorithms", "Game Logic", "Heuristics"],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View source",
			link: "https://github.com/dilipBadal/Chess-Game-Ai",
			featured: false,
		},
	],

	works: [
		{
			company: "Levich Solutions",
			position: "Software Engineer",
			duration: "2023 - 2025",
			logo: "/levich.svg",
			link: "https://www.linkedin.com/company/levich/",
			summary:
				"Worked on product delivery, engineering execution, and features designed to feel reliable under real-world use.",
		},
		{
			company: "Levich Solutions",
			position: "Software Engineering Intern",
			duration: "5 months",
			logo: "/levich.svg",
			link: "https://www.linkedin.com/company/levich/",
			summary:
				"Built early production instincts by shipping, iterating fast, and learning how product constraints shape code decisions.",
		},
	],

	contact: {
		title: "Building something strong? Let's talk.",
		description:
			"I work across data systems, full-stack products, and polished web experiences that need clear thinking and solid execution.",
		availability:
			"Currently open to strong product teams and selective collaborations.",
		opportunities: [
			"Product builds that need both frontend polish and backend structure",
			"Data and BI work spanning dashboards, reporting flows, and decision-support systems",
			"Rapid prototypes for AI tools, community products, and data-heavy experiences",
		],
		response:
			"Email is the fastest route. I usually reply within a couple of days.",
	},

	notesPage: {
		title: "Notes on product feel, motion, and engineering choices that people notice.",
		description:
			"Not tutorials. More like short essays on why some interfaces feel expensive, calm, or inevitable, and how those details connect back to engineering.",
	},

	notes: [
		{
			slug: "interfaces-need-tension",
			date: "January 2026",
			readTime: "4 min read",
			title: "Interfaces Need Tension, Not Just Cleanliness",
			description:
				"Premium interfaces rarely feel premium because they are minimal. They feel premium because contrast, rhythm, and restraint are working together.",
			tags: ["Interface Design", "Motion", "Craft"],
			sections: [
				{
					title: "Clean is not the finish line",
					paragraphs: [
						"A lot of interfaces chase cleanliness so hard that they flatten all personality out of the product. Everything becomes tasteful, but nothing becomes memorable.",
						"What creates presence is tension: big type against quiet space, sharp transitions against calm layouts, a bold hero followed by a disciplined content rhythm. That push and pull is what makes a page feel composed.",
					],
				},
				{
					title: "Motion should add pressure in the right places",
					paragraphs: [
						"Good motion does not exist to prove that animation is possible. It exists to direct attention, reveal hierarchy, and create a sense that the interface knows what matters next.",
						"When animation is treated like pacing instead of decoration, a user can feel the difference immediately. The experience gets smoother without becoming sleepy.",
					],
				},
			],
			takeaways: [
				"Use contrast to create controlled tension, not clutter.",
				"Let motion guide attention instead of stealing it.",
				"Minimal does not mean emotionally flat.",
			],
		},
		{
			slug: "shipping-premium-without-bloat",
			date: "February 2026",
			readTime: "5 min read",
			title: "Shipping Premium Without Bloated Frontends",
			description:
				"A product can feel rich without turning into a performance tax. The trick is being selective about where the spectacle actually belongs.",
			tags: ["Performance", "Frontend", "Product"],
			sections: [
				{
					title: "Spend motion where it matters",
					paragraphs: [
						"Not every component deserves a transition and not every section needs a dramatic reveal. If everything moves, nothing feels special.",
						"I like to spend motion on the moments that define the page: the first impression, the shift between sections, the hover that clarifies hierarchy, the detail that makes a card feel tactile.",
					],
				},
				{
					title: "Weight is a design choice too",
					paragraphs: [
						"Heavy pages are not only slow, they also feel less confident. Overbuilt visual systems often communicate indecision.",
						"The best frontends hide the work. They feel polished because the code is doing exactly enough, not because it is showing off every trick it knows.",
					],
				},
			],
			takeaways: [
				"Reserve big effects for high-impact moments.",
				"Performance is part of the visual identity.",
				"Confidence usually looks lighter, not louder.",
			],
		},
		{
			slug: "engineering-for-product-trust",
			date: "March 2026",
			readTime: "4 min read",
			title: "Engineering for Product Trust",
			description:
				"Users feel trust long before they can describe it. That feeling usually starts in the details engineers control.",
			tags: ["Engineering", "UX", "Trust"],
			sections: [
				{
					title: "Trust is cumulative",
					paragraphs: [
						"A product earns trust through hundreds of tiny confirmations: the screen responds quickly, the content hierarchy makes sense, the states feel predictable, and nothing behaves in a way that feels accidental.",
						"That is why engineering decisions are not separate from brand. Reliability, clarity, and pacing are part of what a product says about itself.",
					],
				},
				{
					title: "Small details compound",
					paragraphs: [
						"Loading states, empty states, error handling, hover behavior, focus treatment, spacing consistency. These details often get cut when teams are moving fast, but they are exactly what teaches users whether the product is serious.",
						"When those moments are handled well, the whole experience feels more mature without needing to explain itself.",
					],
				},
			],
			takeaways: [
				"Trust is built in the tiny moments, not the pitch deck.",
				"Reliability is part of the product's tone of voice.",
				"Polish is often a systems problem, not just a design problem.",
			],
		},
	],
};

export default INFO;
