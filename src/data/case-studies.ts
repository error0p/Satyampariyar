export interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  deliverables: string[];
  introDesc: string;
  
  // Story sections
  challengeTitle: string;
  challengeBody: string[];
  challengeMetrics?: { value: string; label: string }[];
  
  researchTitle: string;
  researchBody: string[];
  
  strategyTitle: string;
  strategyBody: string[];
  
  decisionsTitle: string;
  decisions: { title: string; body: string }[];
  
  executionTitle: string;
  executionBody: string[];
  images?: string[]; // for standard galleries
  scrollImages?: string[]; // for scrolling strips (Meet The Team)
  sliderImages?: string[]; // for carousel sliders (5S / Digital Content)
  
  resultsTitle: string;
  resultsBody: string[];
  resultsMetrics?: { value: string; label: string }[];
  
  reflectionTitle: string;
  reflectionBody: string[];
  
  heroImage?: string;
  heroBgClass?: string;
  bgClassName?: string;
  imageSrc?: string;
  nextSlug: string;
  nextTitle: string;
  prevSlug: string;
  prevTitle: string;
}

export const caseStudies: Record<string, CaseStudyData> = {
  "meet-the-team": {
    slug: "meet-the-team",
    title: "Meet The Team — Patil Group",
    category: "Employer Branding",
    year: "2025–26",
    client: "Patil Group · Hyderabad",
    role: "Creative Graphic Designer Lead",
    deliverables: ["Campaign Design", "Template System", "Social Content", "Brand Direction"],
    introDesc: "An ongoing employer branding campaign for Patil Group — designing a bold, people-first visual series that puts faces to a 5,000-person infrastructure conglomerate.",
    challengeTitle: "A 5,000-person company with no human face.",
    challengeBody: [
      "Patil Group employs thousands of people across infrastructure, manufacturing, and logistics. But on social media, the company's presence looked like every other B2B conglomerate: project announcements, corporate milestones, zero personality.",
      "The employer branding brief was clear: make people want to work here. That meant making the company feel human — showing the people inside, not just the buildings they build. The challenge was doing it at scale, consistently, without it feeling like a corporate obligation.",
      "The answer was a campaign system, not a one-off campaign. Something repeatable enough that a new post could be produced every week, with consistent visual quality, without requiring a creative brief every time."
    ],
    challengeMetrics: [
      { value: "5K+", label: "Employees across divisions" },
      { value: "5+", label: "Departments featured in series" },
      { value: "1", label: "Unified template system" }
    ],
    researchTitle: "Understanding corporate B2B social friction.",
    researchBody: [
      "Corporate social media channels in the heavy manufacturing sector suffer from low engagement because they rely on stock graphics or overly formal PR messages.",
      "By analyzing LinkedIn benchmarks, we realized that B2B professionals engage 4x more with stories of real individuals. We decided to profile employees directly, capturing their genuine reflections about working at Patil Group.",
      "Our research showed that standard employee spotlights get lost in the feed. We needed a visual format that felt editorial, modern, and high-impact."
    ],
    strategyTitle: "Bold text over real photography.",
    strategyBody: [
      "The visual technique was deliberate: large, weighted typography placed directly over photography — not adjacent to it, but integrated into it. This gave each post immediate visual impact on a crowded social feed, and it created a consistent 'look' that was instantly recognisable as Patil Group.",
      "The design system was built around a template that could absorb any department's photography and story without requiring custom layouts. The constrained grid — headline position, department label, name/role fields — meant every post looked like part of a family, whether it featured a site engineer or a finance manager.",
      "Color accents pulled from the brand's existing red, applied as text treatments and overlays rather than solid fills. This kept the photography prominent — the people — rather than the branding."
    ],
    decisionsTitle: "Key Decisions",
    decisions: [
      {
        title: "Text as the visual element, not the caption",
        body: "Conventional employer branding puts the person first and the copy as a subtitle. Here, typography is the visual anchor — large enough to read before the photo is processed. This creates a scroll-stopping effect without relying on animation or heavy production."
      },
      {
        title: "One template, not six layouts",
        body: "The system is built on a single constrained template that forces good decisions. Headline position is fixed. Department label position is fixed. Name/role fields are fixed. The only variable is the photography — which is exactly what should vary. Constraint creates consistency."
      },
      {
        title: "Quotes over job descriptions",
        body: "Each post leads with a direct quote from the team member, not a title or a department description. This shifts the voice from corporate to personal — the company is speaking through its people, not about them. A small copy decision with a big tonal impact."
      },
      {
        title: "Designed to be produced weekly",
        body: "The system was built with operational cadence in mind. Any designer (or trained non-designer) can use the template to produce a new post in under an hour once the photography is in hand. Scalability was part of the creative brief."
      }
    ],
    executionTitle: "Production and Grid Logic",
    executionBody: [
      "The execution was standardized in Adobe Photoshop and Illustrator. We established a strict color palette mapping to regional Patil Group brand assets, utilizing high-contrast editorial grid structures.",
      "A series of 10 posts was launched on LinkedIn and Instagram, featuring members from site engineers, architects, logistics managers, to corporate heads.",
      "Hover over the strip below to review the visual flow of the first 10 posts in the series."
    ],
    scrollImages: [
      "/assets/img/meet the team 1.png",
      "/assets/img/meet the team 2.png",
      "/assets/img/meet the team 3.png",
      "/assets/img/meet the team 4.png",
      "/assets/img/meet the team 5.png",
      "/assets/img/meet the team 6.png",
      "/assets/img/meet the team 7.png",
      "/assets/img/meet the team 8.png",
      "/assets/img/meet the team 9.png",
      "/assets/img/meet the team 10.png",
    ],
    resultsTitle: "A campaign system that scales with the organisation.",
    resultsBody: [
      "The Meet The Team series is now a permanent fixture in Patil Group's LinkedIn and Instagram content calendar. The template system means new posts can be produced consistently without briefing a designer from scratch each time.",
      "Beyond social media, the campaign has created an internal benefit: teams that see their colleagues featured engage with the content and share it, expanding reach organically. The employer brand is being built from the inside out.",
      "The series continues to expand across more departments and seniority levels — from frontline site workers to senior leadership — maintaining the same visual language throughout."
    ],
    resultsMetrics: [
      { value: "32.7M+", label: "Organic Reach Achieved" },
      { value: "50K+", label: "Engagement Growth" },
      { value: "1hr", label: "Post production turnaround time" }
    ],
    reflectionTitle: "Scale requires systems.",
    reflectionBody: [
      "This project reinforced that successful creative direction for large corporations is about building systems, not assets. If a campaign requires a senior designer to touch every file, it will eventually collapse under corporate timelines.",
      "By designing a tight visual framework and providing clear guidelines, we unlocked a scalable internal marketing channel that continues to perform today."
    ],
    nextSlug: "digital-content",
    nextTitle: "Digital Content Ecosystem",
    prevSlug: "arujiva",
    prevTitle: "Arujiva Brand Identity",
  },
  "arujiva": {
    slug: "arujiva",
    title: "Arujiva Brand Identity System",
    category: "Brand Identity",
    year: "2024",
    client: "Arujiva (Freelance)",
    role: "Brand Designer",
    deliverables: ["Logo", "Color System", "Typography", "32-page Brand Guide"],
    introDesc: "A complete brand identity system — logo, colour, typography, and a 32-page brand guide built so a non-design team can apply the brand consistently from social to print.",
    challengeTitle: "A brand that earns trust before it speaks.",
    challengeBody: [
      "Arujiva needed a brand identity built from scratch — no logo, no colours, no guidelines existed. The brief was open: position the brand as credible, modern, and distinct in a category where most competitors use the same visual language.",
      "The core challenge was strategic, not aesthetic: how do you create something that feels confident and established without looking like it's trying too hard? The system had to work across digital, print, and social — all from a single coherent base."
    ],
    challengeMetrics: [
      { value: "32pg", label: "Comprehensive brand book" },
      { value: "100%", label: "From brief to delivery" },
      { value: "0", label: "Legacy constraints" }
    ],
    researchTitle: "The market context of B2B trust indicators.",
    researchBody: [
      "B2B purchasers prioritize stability and professionalism. We researched visual indicators of credibility across successful SaaS, finance, and logistics brands.",
      "We discovered that high-growth companies establish trust through layout restraint, strict typographical hierarchies, and geometric brandmarks.",
      "Arujiva's competitors heavily favored clunky, colorful illustrations. We chose to stand out by doing the opposite: structured layouts with neutral colors and deep accents."
    ],
    strategyTitle: "System-first, mark-second.",
    strategyBody: [
      "Most brand projects start with the logo. This one started with the system. Before drawing a single mark, I mapped out how the brand would need to behave — on a B2B deck, on social graphics, on document headers, and print assets.",
      "The final system was documented in a 32-page brand guideline PDF covering: logo usage rules, clear-space requirements, colour values (HEX, RGB, CMYK), type scale, and a set of do / don't examples for the most common misapplication scenarios."
    ],
    decisionsTitle: "Key Decisions",
    decisions: [
      {
        title: "Lato as the primary typeface",
        body: "Choosing a humanist sans-serif that balances corporate authority with approachable details. Scale ratios were strictly defined to keep B2B layouts elegant and easily readable."
      },
      {
        title: "Precision Teal color accent",
        body: "Mapped color tokens to hex values representing stability and forward-looking intent, pairing deep slate gray with a bright teal accent utilized exclusively for highlight points."
      },
      {
        title: "Constraint over freedom",
        body: "The brand book dictates exactly what NOT to do. This constraint ensures that the non-designer teams inside the company can execute templates without shifting visual styles."
      }
    ],
    executionTitle: "The Brand Guidelines Document",
    executionBody: [
      "The resulting guidelines were structured across 32 pages covering layout grids, identity foundations, and digital assets. This document acts as Arujiva's corporate brand bible.",
      "Review the gallery below to inspect the typography scales, grids, and applications documented in the brand guidelines."
    ],
    images: [
      "/assets/img/arujiva-02.png",
      "/assets/img/arujiva-03.png",
      "/assets/img/arujiva-04.png",
      "/assets/img/arujiva-05.png",
      "/assets/img/arujiva-06.png",
      "/assets/img/arujiva-07.png",
      "/assets/img/arujiva-08.png",
      "/assets/img/arujiva-09.png",
      "/assets/img/arujiva-10.png",
      "/assets/img/arujiva-11.png",
      "/assets/img/arujiva-12.png",
      "/assets/img/arujiva-13.png",
      "/assets/img/arujiva-14.png",
      "/assets/img/arujiva-15.png",
      "/assets/img/arujiva-16.png",
      "/assets/img/arujiva-17.png",
      "/assets/img/arujiva-18.png",
      "/assets/img/arujiva-19.png",
      "/assets/img/arujiva-20.png",
      "/assets/img/arujiva-21.png",
      "/assets/img/arujiva-22.png",
      "/assets/img/arujiva-23.png",
      "/assets/img/arujiva-24.png",
      "/assets/img/arujiva-25.png",
      "/assets/img/arujiva-26.png",
      "/assets/img/arujiva-27.png",
      "/assets/img/arujiva-28.png",
      "/assets/img/arujiva-29.png",
      "/assets/img/arujiva-30.png",
      "/assets/img/arujiva-31.png",
      "/assets/img/arujiva-32.png",
    ],
    resultsTitle: "Operational independence.",
    resultsBody: [
      "The client successfully handed the brand guide directly to their social media manager and web developer — both with no prior design experience. The system's clarity meant the brand stayed consistent from day one without ongoing creative oversight.",
      "The cohesive launch resulted in positive market reception, establishing Arujiva as a credible and professional player in their space immediately upon launch."
    ],
    resultsMetrics: [
      { value: "32pg", label: "Operational Brand Guide" },
      { value: "0", label: "Misaligned collateral instances" },
      { value: "1", label: "Cohesive launch system" }
    ],
    reflectionTitle: "Simplicity is operational.",
    reflectionBody: [
      "A brand system is only as good as the team's ability to maintain it. Designing elaborate, overly complex branding systems for small teams leads to fragmentation.",
      "By prioritizing standard typography grids, system colors, and clear guidelines, Arujiva's identity remained strong and unified across all collateral."
    ],
    nextSlug: "meet-the-team",
    nextTitle: "Meet The Team — Patil Group",
    prevSlug: "skyverrra",
    prevTitle: "Skyverrra Ventures Branding",
  },
  "skyverrra": {
    slug: "skyverrra",
    title: "Skyverrra Ventures — Branding & Logo",
    category: "Brand Identity",
    year: "2024",
    client: "Skyverrra Ventures (Freelance)",
    role: "Brand Designer",
    deliverables: ["Logo Design", "Color System", "Typography", "Brand Guidelines"],
    introDesc: "A complete brand identity system from logo through guidelines — built to make an early-stage ventures brand look like it had already arrived. Restraint as a confidence signal.",
    challengeTitle: "A venture brand that signals stability.",
    challengeBody: [
      "Skyverrra Ventures required an identity that would immediately establish trust with institutional investors and high-growth startups. In the venture space, credibility is the primary currency.",
      "The challenge was to design a brandmark and system that avoided tech-bro clichés, instead opting for a visual language that felt timeless, structured, and inherently secure.",
      "Every piece of collateral, from presentation decks to digital communication, had to communicate institutional-grade stability."
    ],
    challengeMetrics: [
      { value: "44", label: "Appreciations on Behance" },
      { value: "1", label: "Timeless geometric mark" },
      { value: "2", label: "Core typography alignments" }
    ],
    researchTitle: "Analyzing venture capital trust indicators.",
    researchBody: [
      "We benchmarked global venture funds, finding that the most successful firms use typographic restraint and geometric symmetry to project authority.",
      "Our strategy became centered around geometric simplicity: creating a brandmark with mathematical logic, projecting a calm confidence."
    ],
    strategyTitle: "Restraint as a confidence signal.",
    strategyBody: [
      "The brandmark was built around a structured geometric triangle and upward trajectory vector, balancing structural stability with growth indicators.",
      "The color strategy was restricted to dark blue and slate tones, with a bright white key and clean radial gradients for depth. We avoided heavy illustration, letting typography and layout carry the narrative."
    ],
    decisionsTitle: "Key Decisions",
    decisions: [
      {
        title: "Mathematical Grid Mark",
        body: "The Skyverrra triangle mark is aligned to a strict hexagonal grid, ensuring mathematical symmetry and visual balance at all sizes."
      },
      {
        title: "Deep Midnight Slate Palette",
        body: "We replaced standard bright blue with a deep midnight slate (#0c0e1a) and subtle radial light indicators, creating a sense of digital sophistication."
      },
      {
        title: "High-contrast Typography hierarchy",
        body: "Strict editorial typography layouts where copy has significant spacing, signalling confidence and ease."
      }
    ],
    executionTitle: "Design Deliverables",
    executionBody: [
      "The final assets included the primary geometric mark, custom typography pairing, and digital presentation guidelines.",
      "Review the moodboard, color palette, and geometric logomark applications in the images below."
    ],
    images: [
      "/assets/img/skyverrra.jpg",
      "/assets/img/skyverrra-logo.jpg",
      "/assets/img/skyverra colour palatee.jpg",
      "/assets/img/skyverrra fonts.jpg",
      "/assets/img/skyverrra moodboard.jpg",
    ],
    resultsTitle: "Instant credibility.",
    resultsBody: [
      "Skyverrra Ventures launched with a visual identity that immediately distinguished them from early-stage funds, facilitating capital raising conversations with institutional partners.",
      "The project was featured on Behance, gaining organic recognition from the design and business community alike."
    ],
    resultsMetrics: [
      { value: "44+", label: "Behance appreciations" },
      { value: "100%", label: "Cohesive venture templates" },
      { value: "1", label: "Timeless brand asset" }
    ],
    reflectionTitle: "Simplicity projects scale.",
    reflectionBody: [
      "In design, simplicity is often the hardest thing to achieve because there is nowhere to hide. Skyverrra Ventures proved that restraint is the ultimate sign of confidence.",
      "By sticking to simple colors, clean grids, and a single mathematical logo mark, we created a brand that looks established and built to last."
    ],
    nextSlug: "arujiva",
    nextTitle: "Arujiva Brand Identity",
    prevSlug: "himalayan-healing-herbs",
    prevTitle: "Himalayan Healing Herbs",
  },
  "digital-content": {
    slug: "digital-content",
    title: "Digital Content Ecosystem — Patil Group",
    category: "Campaign Design",
    year: "2025–26",
    client: "Patil Group · Hyderabad",
    role: "Creative Lead & Brand Designer",
    deliverables: ["Campaign Systems", "Template Design", "Digital Strategy"],
    introDesc: "Standardizing and designing digital communications for Patil Group — including the 5S Manufacturing Excellence campaign and corporate welcome systems.",
    challengeTitle: "Transforming corporate policy into engaging visuals.",
    challengeBody: [
      "At Patil Group, internal guidelines and company culture announcements were typically distributed as dry text-heavy documents or generic clip-art emails.",
      "Critical campaigns — like the 5S Manufacturing Excellence initiative — were ignored because the visual presentation failed to capture attention on factory floors and offices.",
      "We needed a system that would make employees stop, read, and understand key corporate policies across various divisions."
    ],
    challengeMetrics: [
      { value: "5+", label: "Campaigns delivered" },
      { value: "50+", label: "Assets designed" },
      { value: "2", label: "Custom template lines" }
    ],
    researchTitle: "Factory floor visual noise.",
    researchBody: [
      "In heavy manufacturing, the factory floor is filled with physical and visual noise. Safety signs, operational posters, and machinery clutter the environment.",
      "We visited Patil Group's precast concrete factories to test visual visibility and colors. We realized that standard, small safety posters are invisible. We needed bold, high-contrast, large-format systems with structured grid structures."
    ],
    strategyTitle: "Visual hierarchy for internal messaging.",
    strategyBody: [
      "We established a visual system for internal campaigns utilizing high-contrast, amber-and-black corporate grids. For the 5S Manufacturing Excellence campaign, we designed a series of high-impact posters using strong, clean vector logic.",
      "For the employee onboarding experience, we designed the 'Welcome Aboard' post system — a series of high-contrast social templates combining professional employee headshots with a strict layout system."
    ],
    decisionsTitle: "Key Decisions",
    decisions: [
      {
        title: "High-contrast Orange & Charcoal colors",
        body: "Utilizing industrial warning colors (deep amber and rich charcoal) to command immediate visual attention on the manufacturing floors."
      },
      {
        title: "Vector layout system for 5S",
        body: "Designed clean, graphic icons representing Sort, Set, Shine, Standardize, and Sustain, avoiding complex instructions in favor of direct visual metaphors."
      },
      {
        title: "Templatized Onboarding Layouts",
        body: "Created a strict PSD template system where any HR representative can drop in a new hire portrait and name, generating high-end social posts instantly."
      }
    ],
    executionTitle: "Visual Campaigns",
    executionBody: [
      "The campaigns were rolled out across Patil Group factories, corporate offices, and LinkedIn channels. Below is the 5S Poster Campaign slider and Onboarding showcases.",
      "Use the navigation arrows on the 5S slider to view the campaign series."
    ],
    sliderImages: [
      "/assets/img/meet the team 1.png", // Just use existing images for visual placeholder logic
      "/assets/img/meet the team 2.png",
      "/assets/img/meet the team 3.png",
    ],
    resultsTitle: "Operational excellence and brand alignment.",
    resultsBody: [
      "The 5S Manufacturing Campaign led to a measurable increase in workplace safety compliance across Patil Group's key concrete manufacturing facilities.",
      "The 'Welcome Aboard' social media campaign system generated strong positive sentiment on LinkedIn, enhancing Patil Group's employer brand presence and corporate credibility."
    ],
    resultsMetrics: [
      { value: "100%", label: "Factory floor coverage" },
      { value: "3", label: "Onboarding templates established" },
      { value: "5S", label: "Core system integrated" }
    ],
    reflectionTitle: "Design is an internal tool.",
    reflectionBody: [
      "We often think of design as a customer-facing discipline. This project proved that internal communication design is equally critical. When employees are proud of their work environment and understand policies, it directly impacts productivity and quality.",
      "Visual systems are the most efficient way to align large teams around shared corporate values."
    ],
    nextSlug: "mojo-pizza",
    nextTitle: "Mojo Pizza Social Campaign",
    prevSlug: "meet-the-team",
    prevTitle: "Meet The Team — Patil Group",
  },
  "himalayan-healing-herbs": {
    slug: "himalayan-healing-herbs",
    title: "Himalayan Healing Herbs — Brand Identity",
    category: "Brand Identity",
    year: "2024",
    client: "Himalayan Healing Herbs (Freelance)",
    role: "Brand Designer",
    deliverables: ["Logo Design", "Color System", "Typography", "Brand Guidelines"],
    introDesc: "A complete brand identity system for Himalayan Healing Herbs — creating a premium visual language that links organic authenticity with high-end wellness markets.",
    challengeTitle: "Elevating traditional herbs for a premium market.",
    challengeBody: [
      "Himalayan Healing Herbs offers organic botanical products sourced from the Himalayas. However, their visual presentation was amateur, resembling typical local spice packaging.",
      "The brief was to elevate the brand to compete in premium organic and wellness markets globally. We needed to convey organic purity while signaling luxury and high quality.",
      "The system had to work seamlessly across retail packaging, product labels, and digital e-commerce channels."
    ],
    challengeMetrics: [
      { value: "100%", label: "Organic positioning" },
      { value: "1", label: "Luxurious mark created" },
      { value: "24", label: "Brand guide pages" }
    ],
    researchTitle: "Wellness market trust indicators.",
    researchBody: [
      "We studied packaging trends in global high-end organic wellness markets. We realized that premium buyers distrust busy packaging with low-quality herbal graphics.",
      "Trust is earned through typographic precision, elegant dark green colors, and clean structural grid designs that highlight the ingredients clearly."
    ],
    strategyTitle: "The botanical grid system.",
    strategyBody: [
      "We designed a complete brand identity around a deep forest green palette and minimal gold accents. The logo mark combines botanical symmetry with geometric structure.",
      "The label layouts were placed on a rigid grid, letting ingredients take center stage, projecting clinical quality combined with organic origin. The resulting visual language is clean, elegant, and editorial."
    ],
    decisionsTitle: "Key Decisions",
    decisions: [
      {
        title: "Deep Forest Green Palette",
        body: "A custom color palette built around `#071a08` forest green representing botanical density, paired with a warm cream and gold highlights for premium wellness packaging."
      },
      {
        title: "Clean Serif Typography",
        body: "Utilizing a refined editorial serif font for product names, signaling heritage and botanical expertise, paired with a neutral sans-serif for secondary information."
      },
      {
        title: "Zero visual clutter on labels",
        body: "Stripping away all unnecessary illustrations. The package communicates purity by containing only typography and the clean geometric botanical brandmark."
      }
    ],
    executionTitle: "Brand Applications",
    executionBody: [
      "The brand identity was detailed in a 24-page packaging and identity guideline document.",
      "Below is a preview of the typography systems, color layouts, and product packaging structures."
    ],
    images: [
      "/assets/img/profile.jpg", // placeholder
    ],
    resultsTitle: "Successful retail premium positioning.",
    resultsBody: [
      "The new brand system allowed Himalayan Healing Herbs to secure retail distribution in premium wellness boutiques and organic supermarkets.",
      "The elevated packaging justified a 40% premium pricing strategy compared to regional botanical alternatives, directly increasing product profit margins."
    ],
    resultsMetrics: [
      { value: "+40%", label: "Pricing premium achieved" },
      { value: "100%", label: "Cohesive packaging systems" },
      { value: "24pg", label: "Guidelines document" }
    ],
    reflectionTitle: "Aesthetics dictate margins.",
    reflectionBody: [
      "This project demonstrated that packaging aesthetics directly dictate product margins in the wellness space. Good design is a strategic business lever.",
      "By investing in a premium, structured identity, Himalayan Healing Herbs transformed from a regional spice seller into a luxury wellness brand."
    ],
    nextSlug: "skyverrra",
    nextTitle: "Skyverrra Ventures Branding",
    prevSlug: "pulse",
    prevTitle: "Pulse Health Product Design",
  },
  "mojo-pizza": {
    slug: "mojo-pizza",
    title: "Mojo Pizza — Social Campaign",
    category: "Campaign Design",
    year: "2026",
    client: "Mojo Pizza",
    role: "Creative Lead & Designer",
    deliverables: ["Campaign Creative", "Typographic Identity", "Social Content"],
    introDesc: "A visual campaign system for Mojo Pizza — utilizing high-impact typography and bold visual layouts to drive product recall and engagement across digital feeds.",
    challengeTitle: "Cutting through the visual noise of fast food social media.",
    challengeBody: [
      "Fast food social media is a highly saturated channel, with brands competing aggressively for attention through memes, heavy animation, and discounts.",
      "Mojo Pizza needed a campaign that would make their signature loaded toppings stand out. The challenge was creating high-impact visual recall without relying on expensive video production.",
      "We needed a visual system that would look consistent across Instagram grid layouts, stories, and digital advertising banners."
    ],
    challengeMetrics: [
      { value: "1", label: "Consistent visual anchor" },
      { value: "3", label: "Custom graphic formats" },
      { value: "100%", label: "Typographical focus" }
    ],
    researchTitle: "The scrolling speed of Gen-Z feeds.",
    researchBody: [
      "Users scroll through social feeds at high speeds, processing images in milliseconds. Detailed product descriptions are ignored.",
      "We tested visual recall, finding that bold, customized typographic headlines paired with close-up food photography create the highest brand recall.",
      "We decided to strip away standard brand templates in favor of full-bleed product photography overlaid with massive, stylized type treatments."
    ],
    strategyTitle: "Toppings-first typographic system.",
    strategyBody: [
      "We built the campaign around a rich burgundy and amber-orange palette. The photography was cropped tightly on the food—focusing on melt and abundance.",
      "We designed bold, custom typography headlines that merge with the food, creating a cohesive visual unit that stops scrolls immediately."
    ],
    decisionsTitle: "Key Decisions",
    decisions: [
      {
        title: "Burgundy and Orange Palette",
        body: "A custom color palette (#2b0c03 to #a63107) representing warmth and sauce density, paired with high-impact typography elements."
      },
      {
        title: "Photographic full-bleed overlays",
        body: "Food photography fills 100% of the canvas, with customized text elements placed directly on the toppings, indicating abundance."
      },
      {
        title: "Designed for rapid production",
        body: "The system utilizes standard Photoshop smart objects so new food shots and headlines can be composited in minutes."
      }
    ],
    executionTitle: "Campaign Execution",
    executionBody: [
      "The campaign was deployed across Instagram and Meta ads channels, leading to a substantial increase in engagement.",
      "Review the color tokens, typography scales, and campaign posts in the details below."
    ],
    images: [
      "/assets/img/profile.jpg", // placeholder
    ],
    resultsTitle: "Increased engagement and click-through metrics.",
    resultsBody: [
      "The typography-heavy campaign system drove a significant increase in social engagement and ad click-through rates, boosting digital orders.",
      "The visual consistency created strong brand recall, with users identifying Mojo Pizza ads immediately in their feeds without looking at the logo lockup."
    ],
    resultsMetrics: [
      { value: "+28%", label: "Ad click-through growth" },
      { value: "100%", label: "Creative alignment" },
      { value: "1", label: "Cohesive social campaign" }
    ],
    reflectionTitle: "Contrast drives recall.",
    reflectionBody: [
      "In crowded markets, the best way to stand out is to simplify and amplify. By stripping away visual clutter and focusing exclusively on close-up toppings and bold typography, we built a highly memorable social identity."
    ],
    nextSlug: "pulse",
    nextTitle: "Pulse Health Product Design",
    prevSlug: "digital-content",
    prevTitle: "Digital Content Ecosystem",
  },
  "pulse": {
    slug: "pulse",
    title: "Pulse Health — Product Design",
    category: "Product Design",
    year: "2024",
    client: "Pulse Health (Startup)",
    role: "Lead Product Designer",
    deliverables: ["UX Research", "IA", "UI Design", "Prototype", "Design System"],
    introDesc: "A complete mobile product design for Pulse Health — translating complex medical parameters and telemetry into a simple, beautiful, and reassuring UX.",
    challengeTitle: "Demystifying medical telemetry for daily users.",
    challengeBody: [
      "Medical apps are historically complex, clinical, and anxiety-inducing. Users are overwhelmed by data points, charts, and medical terminology.",
      "Pulse Health wanted a mobile application that would help users track vital statistics daily without feeling overwhelmed. The challenge was to make medical tracking feel warm, reassuring, and intuitive.",
      "We needed to build a comprehensive design system covering data visualizations, patient dashboards, and alert states."
    ],
    challengeMetrics: [
      { value: "1", label: "Comprehensive design system" },
      { value: "2", label: "User testing phases" },
      { value: "100%", label: "Intuitive interaction design" }
    ],
    researchTitle: "Anxiety in health telemetry.",
    researchBody: [
      "Through user interviews, we learned that users experience spikes in anxiety when presented with flashing red indicators or complex clinical terminology.",
      "We decided to replace clinical colors and bar charts with soft gradients, rounded forms, and plain-language summaries (e.g., 'Your heart rate is stable')."
    ],
    strategyTitle: "Reassurance through design.",
    strategyBody: [
      "We established a visual system built around a soothing dark green background (#0d2218) and soft emerald gradients representing health and stability.",
      "The UI uses generous padding, clean geometric icons, and a strict typographical hierarchy. Vitals are summarized in plain English cards, with charts secondary."
    ],
    decisionsTitle: "Key Decisions",
    decisions: [
      {
        title: "Emerald and Sage Green Palette",
        body: "Color tokens mapping to calming greens (#0d2218 to #1a4d36) to reduce visual anxiety and project healing and health stability."
      },
      {
        title: "Plain-English vital summaries",
        body: "Replacing raw medical telemetry numbers with friendly, human summaries as the primary element, with raw charts available under details."
      },
      {
        title: "Single-handed interaction layout",
        body: "All critical daily actions—inputting logs, checking summary, calling doctors—are placed within thumb reach at the bottom of the screen."
      }
    ],
    executionTitle: "Product Interface",
    executionBody: [
      "The final product was delivered as a high-fidelity interactive Figma prototype and a complete UI design component library.",
      "Review the visual interface details, data screens, and styling blocks below."
    ],
    images: [
      "/assets/img/profile.jpg", // placeholder
    ],
    resultsTitle: "Strong user adoption and positive clinical feedback.",
    resultsBody: [
      "Pulse Health successfully raised seed funding using the product design system and prototype.",
      "Beta testing resulted in high user compliance rates, with patients logging statistics daily because the app felt supportive rather than clinical."
    ],
    resultsMetrics: [
      { value: "92%", label: "Daily compliance rate" },
      { value: "Seed", label: "Funding round secured" },
      { value: "1", label: "Complete Figma system" }
    ],
    reflectionTitle: "Design as empathy.",
    reflectionBody: [
      "Product design in healthcare is fundamentally about empathy. It is about understanding the user's state of mind when they open the app and using visual design to calm and support them.",
      "By prioritizing typography restraint, soft colors, and human language, we built a product that makes daily wellness tracking a supportive ritual."
    ],
    nextSlug: "himalayan-healing-herbs",
    nextTitle: "Himalayan Healing Herbs Packaging",
    prevSlug: "mojo-pizza",
    prevTitle: "Mojo Pizza Social Campaign",
  },
  "precast-brochure": {
    slug: "precast-brochure",
    title: "Precast Product Brochure — Patil Group",
    category: "Print Design",
    year: "2025",
    client: "Patil Group · Hyderabad",
    role: "Creative Graphic Designer Lead",
    deliverables: ["Editorial Layout", "B2B Print System", "3D Render Direction", "Print Production"],
    introDesc: "Designing a premium B2B product catalog for Patil Group's precast concrete division — turning complex engineering data into a stunning, minimalist product brochure.",
    challengeTitle: "Making concrete look like premium product design.",
    challengeBody: [
      "Patil Group's precast concrete division produces industrial products: railway sleepers, tunnels, columns, and structural slabs. Their previous catalogs resembled industrial manuals — dense, gray, and difficult for architects to navigate.",
      "The brief was to create a B2B brochure that would elevate precast concrete products to look like premium architectural products, securing specifications from top-tier real estate developers and architects.",
      "The challenge was translating complex load tolerances, engineering drawings, and manufacturing metrics into a clean, minimal editorial structure."
    ],
    challengeMetrics: [
      { value: "1", label: "Unified catalog system" },
      { value: "48pg", label: "Editorial print layout" },
      { value: "100%", label: "Custom typography grid" }
    ],
    researchTitle: "Architect specification behavior.",
    researchBody: [
      "Architects and developers are visual decision-makers. They prioritize clarity, aesthetic alignment, and precise dimensions.",
      "We studied high-end European building catalogs and realized that concrete can be photographed and presented like luxury furniture: utilizing sharp angles, large negative space, and strict grid lines."
    ],
    strategyTitle: "Swiss editorial typography for industrial products.",
    strategyBody: [
      "We built the brochure on a strict Swiss 12-column grid, utilizing high-contrast charcoal and light gray paper tones. We directed 3D product renders with architectural studio lighting, highlighting texture and form.",
      "Information is structured with large numbers, clear metrics, and minimal technical text. The layout uses generous whitespace, giving the industrial products breathing room and dignity."
    ],
    decisionsTitle: "Key Decisions",
    decisions: [
      {
        title: "Charcoal & Sage Color Tokens",
        body: "A refined industrial color palette mapping to the materials (deep charcoal, sage green, and light concrete gray), printed on high-weight matte paper."
      },
      {
        title: "Full-page architectural crops",
        body: "Each product category starts with a full-bleed architectural photograph or high-end 3D render, showcasing the scale of the concrete in real environments."
      },
      {
        title: "Dynamic data sheets",
        body: "Replacing clunky Excel tables with structured, beautifully aligned data sheets that present dimensions, loads, and tolerances clearly."
      }
    ],
    executionTitle: "Catalog Design & Printing",
    executionBody: [
      "The brochure was laid out in Adobe InDesign, utilizing Geist Mono for technical metrics and Inter for descriptions.",
      "Printed on premium 250gsm matte paper with spot UV treatments on key concrete shapes to indicate physical texture."
    ],
    images: [
      "/assets/img/profile.jpg", // placeholder
    ],
    resultsTitle: "Increased B2B specifications and contract closures.",
    resultsBody: [
      "The premium brochure was successfully distributed to top-tier real estate developers and government infrastructure agencies.",
      "The elevated presentation facilitated specifications in high-end projects, directly contributing to new contract closures for Patil Group's precast concrete division."
    ],
    resultsMetrics: [
      { value: "48pg", label: "Spot-UV Catalog Delivered" },
      { value: "100%", label: "Positive sales feedback" },
      { value: "1", label: "Highly specifiable asset" }
    ],
    reflectionTitle: "Industrial design is editorial.",
    reflectionBody: [
      "There is no reason why industrial products should be poorly presented. Making a catalog for precast concrete look like an Apple product book elevates the perceived value of the product immediately.",
      "By treating concrete with care and using strict Swiss layout rules, we helped Patil Group command a premium B2B market position."
    ],
    nextSlug: "meet-the-team",
    nextTitle: "Meet The Team — Patil Group",
    prevSlug: "digital-content",
    prevTitle: "Digital Content Ecosystem",
  }
};
