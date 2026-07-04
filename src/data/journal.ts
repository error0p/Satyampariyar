export interface JournalPost {
  slug: string;
  title: string;
  category: "Branding" | "Design" | "Photography" | "Marketing";
  date: string;
  readTime: string;
  description: string;
  contentHtml: string;
  nextSlug?: string;
  nextTitle?: string;
  prevSlug?: string;
  prevTitle?: string;
}

export const journalPosts: Record<string, JournalPost> = {
  "power-of-restraint": {
    slug: "power-of-restraint",
    title: "The Power of Restraint in B2B Branding",
    category: "Branding",
    date: "June 15, 2026",
    readTime: "5 min read",
    description: "How early-stage ventures and conglomerates establish credibility by saying less. Exploring typography logic, margins, and the confidence of quiet aesthetics.",
    contentHtml: `
      <p class="mb-6 text-lg leading-relaxed text-foreground">
        In the B2B tech and infrastructure sectors, there is a common misconception that branding must shout to be heard. Companies clutter their websites with diagrams, animations, and color palettes that attempt to convey everything at once. 
      </p>
      <p class="mb-6">
        However, the most successful brands—think Stripe, Apple, or Vercel—understand a fundamental truth: <strong>restraint is a trust signal</strong>. When an organization projects calm, structured authority through its visual assets, it tells prospects that it has already arrived. It doesn't need to scream because its value is self-evident.
      </p>
      
      <h2 class="text-2xl font-display font-semibold text-foreground mt-12 mb-4">The Trust Mechanics of Spacing</h2>
      <p class="mb-6">
        Generous margins and large white space are not visual waste. In editorial design, empty space is a deliberate architectural tool. It gives the reader breathing room and focuses the eye on what is truly important: the core argument.
      </p>
      <p class="mb-6">
        When text or images are crammed together, it signals panic—a fear that the user will scroll past before you've said everything. By maintaining a strict 8px grid alignment and leaving generous negative space, we project institutional ease. The brand feels organized, structured, and in control.
      </p>

      <h2 class="text-2xl font-display font-semibold text-foreground mt-12 mb-4">Typography as Structure</h2>
      <p class="mb-6">
        In B2B communication, typography is the design itself. A brand that relies on decorative illustrations to hold its layout together is fragile. If you strip away the graphics and the typography looks weak, the brand is weak.
      </p>
      <p class="mb-6">
        During the Skyverrra Ventures project, we restricted the identity to a single geometric mark, three weight scales of a sans-serif typeface, and deep midnight tones. The result was a presentation style that commanded premium positioning because it relied on the structural integrity of the grid rather than decorative tricks.
      </p>
    `,
    nextSlug: "designing-visual-systems",
    nextTitle: "Designing Visual Systems for 5,000-Person Conglomerates",
  },
  "designing-visual-systems": {
    slug: "designing-visual-systems",
    title: "Designing Visual Systems for 5,000-Person Conglomerates",
    category: "Design",
    date: "May 28, 2026",
    readTime: "6 min read",
    description: "How to scale employer branding and internal communication campaigns across thousands of employees without losing visual quality.",
    contentHtml: `
      <p class="mb-6 text-lg leading-relaxed text-foreground">
        When designing for a 5,000-person conglomerate like Patil Group, you quickly realize that assets are not the problem. The problem is scaling.
      </p>
      <p class="mb-6">
        If a marketing campaign requires a custom visual layout for every department and individual asset, the project will eventually fail. Creative departments cannot maintain custom creative work under the crushing timelines of corporate operations. 
      </p>
      <p class="mb-6">
        To solve this, we must build <strong>visual systems</strong>. A system is a set of rules, templates, and constraints that forces good decisions. It enables non-designers or junior staff to generate visual assets that remain sharp and aligned with the brand's creative direction.
      </p>

      <h2 class="text-2xl font-display font-semibold text-foreground mt-12 mb-4">The Anatomy of a Design System</h2>
      <p class="mb-6">
        A scaling visual system consists of:
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Fixed parameters:</strong> Alignments, typography sizes, grid structures, and color values that cannot be changed under any circumstance.</li>
        <li><strong>Variable parameters:</strong> Photography assets and text copy that change to represent the specific department or story.</li>
        <li><strong>Clear governance:</strong> Simple, 1-page manuals illustrating do / don't misapplication cases.</li>
      </ul>

      <h2 class="text-2xl font-display font-semibold text-foreground mt-12 mb-4">Results of Systemization</h2>
      <p class="mb-6">
        During the 'Meet The Team' employer branding campaign at Patil Group, we established a single Photoshop template structure. By locking down the typography grids, headline positions, and color accent treatments, we cut post production times to under 1 hour.
      </p>
      <p class="mb-6">
        This allowed us to profile dozens of employees across logistics, engineering, and finance, generating over 32.7M+ reach organically while maintaining the visual consistency of a premium editorial magazine.
      </p>
    `,
    nextSlug: "photography-as-strategic-tool",
    nextTitle: "Photography as a Strategic Brand Tool",
    prevSlug: "power-of-restraint",
    prevTitle: "The Power of Restraint in B2B Branding",
  },
  "photography-as-strategic-tool": {
    slug: "photography-as-strategic-tool",
    title: "Photography as a Strategic Brand Tool",
    category: "Photography",
    date: "April 10, 2026",
    readTime: "4 min read",
    description: "Directing and capturing industrial structures to elevate B2B concrete and railway products from manual catalog style to premium product designs.",
    contentHtml: `
      <p class="mb-6 text-lg leading-relaxed text-foreground">
        Many organizations view corporate photography as an afterthought—something to buy from stock sites or shoot quickly with a smartphone on-site.
      </p>
      <p class="mb-6">
        But photography is a secondary creative discipline that communicates institutional quality immediately. In B2B sectors like railway, manufacturing, and infrastructure, the physical assets—concrete precast beams, railway lines, raw structural columns—are the product. 
      </p>
      <p class="mb-6">
        By photographing these industrial products with the same lighting, shadow structure, and editorial angles typically reserved for luxury furniture, we instantly elevate the perceived value of the product.
      </p>

      <h2 class="text-2xl font-display font-semibold text-foreground mt-12 mb-4">Shadow and Texture</h2>
      <p class="mb-6">
        Industrial materials are rich in physical details. Precast concrete, steel rails, and architectural facades have textured surfaces that catch light.
      </p>
      <p class="mb-6">
        When directing photography for Patil Group's product catalogs, we focused on high-contrast angles that highlighted the grit, texture, and structural details. This shift in visual direction helped transition their sales materials from dry technical manuals into high-end specification books.
      </p>
    `,
    nextSlug: "moving-beyond-stock-graphics",
    nextTitle: "Moving Beyond the Stock Graphic",
    prevSlug: "designing-visual-systems",
    prevTitle: "Designing Visual Systems for 5,000-Person Conglomerates",
  },
  "moving-beyond-stock-graphics": {
    slug: "moving-beyond-stock-graphics",
    title: "Moving Beyond the Stock Graphic",
    category: "Marketing",
    date: "March 02, 2026",
    readTime: "4 min read",
    description: "How customized typographic layouts and authentic photography drive organic social media conversions for B2B logistics and corporate brands.",
    contentHtml: `
      <p class="mb-6 text-lg leading-relaxed text-foreground">
        Social media feeds are flooded with generic stock graphics—blue geometric shapes, lightbulbs, shaking hands, and clip-art diagrams. Users are blind to these graphics because they signal 'low effort advertisement'.
      </p>
      <p class="mb-6">
        To command attention and drive B2B conversions, we must design custom visual solutions that feel authentic, premium, and meaningful.
      </p>

      <h2 class="text-2xl font-display font-semibold text-foreground mt-12 mb-4">The Value of Custom Collateral</h2>
      <p class="mb-6">
        When a prospect sees customized typography integrated directly with professional photography, their brain registers care and effort. It tells them that the company pays attention to details.
      </p>
      <p class="mb-6">
        If an organization cuts corners on its visual communication, B2B clients assume it will cut corners on its products or services. In contrast, a brand system that feels handcrafted, editorial, and aligned builds immediate trust.
      </p>
    `,
    prevSlug: "photography-as-strategic-tool",
    prevTitle: "Photography as a Strategic Brand Tool",
  }
};
