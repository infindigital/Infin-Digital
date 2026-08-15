/**
 * The four articles published on the site. This is the single source of truth:
 * the home page grid, the About page "Insights & Inspiration" rail, the /blog
 * index and each /blog/:slug page all read from here, so a post is written once
 * and appears everywhere.
 *
 * Every field is real. Images are screenshots and mockups of work INFIN Digital
 * has actually shipped, not stock photography. If you add a post, give it a real
 * body: an entry with a title and no article behind it is worse than no entry.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  category: string;
  title: string;
  /** Used as the meta description and as the card/lead-in summary. */
  excerpt: string;
  /** Opening paragraph, set larger than the body on the article page. */
  standfirst: string;
  img: string;
  alt: string;
  /** ISO date, for <time> and Article schema. */
  date: string;
  /** Human date shown on cards and the article page. */
  dateLabel: string;
  readingTime: string;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "local-search-mangalore-businesses",
    category: "Local SEO",
    title: "How Local Search Puts Mangalore Businesses on the Map",
    excerpt:
      "Most buying decisions in Mangalore start with a search that has a place attached to it. Here is what actually decides which businesses show up in that map pack, and what you can fix this month.",
    standfirst:
      "Someone in Kadri looking for a dentist does not type \"dentist\". They type \"dentist near me\", or they open Maps. That small difference decides which three businesses they ever see, and it is won or lost on details most owners have never been shown.",
    img: "/assets/imgs/pages/img-33.png",
    alt: "Google local search results and a Search Console performance graph for Midwest Identity Services, a local SEO client of Infin Digital",
    date: "2026-08-15",
    dateLabel: "15 August 2026",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "When a search carries local intent, Google stops behaving like an encyclopedia and starts behaving like a directory. It sets aside the ordinary ranked list and shows a map with three businesses pinned to it. That block is where the clicks and calls go. Everything below it collects a fraction of the attention.",
      },
      {
        type: "p",
        text: "The three businesses in that block are not the three best businesses. They are the three that have given Google the clearest, most consistent, most corroborated answer about who they are, where they are and what they do. That is a solvable problem, and it is mostly unglamorous work.",
      },
      { type: "h2", text: "What the map pack is actually ranking" },
      {
        type: "p",
        text: "Google weighs three things for local results: relevance, distance and prominence. Distance you cannot change. The other two you can.",
      },
      {
        type: "ul",
        items: [
          "Relevance is how well your business profile matches what was searched. A profile with the primary category set to \"Business services\" will lose to one set to \"Fingerprinting service\" every time somebody searches for fingerprinting.",
          "Prominence is how well known you are, in the offline sense as much as the online one. Reviews, mentions in local press, links from local organisations and directory listings all feed it.",
          "Consistency ties the two together. If your address is written three different ways across your website, your profile and the directories that list you, you have given Google three weaker signals instead of one strong one.",
        ],
      },
      { type: "h2", text: "Start with the profile, not the website" },
      {
        type: "p",
        text: "Your Google Business Profile is the single highest-leverage asset in local search, and it is free. Most profiles we audit are half filled in. The category is wrong or too broad. The service list is empty. There are four photographs, all from the year the business opened. Opening hours have not been touched since a festival two years ago.",
      },
      {
        type: "p",
        text: "Fix the primary category first, because it does more work than anything else on the profile. Then add secondary categories for the other things you genuinely do. Then fill in every service with a real description. Then add photographs, and keep adding them, because profiles that are actively maintained outperform profiles that are merely complete.",
      },
      { type: "h2", text: "Reviews are the part nobody wants to do" },
      {
        type: "p",
        text: "Review count and recency both matter, and recency is the one businesses neglect. Forty reviews from three years ago read as a business that used to be busy. Twelve reviews from the last six months read as a business people are currently choosing. Ask every satisfied customer, at the moment they are most satisfied, and make it a one-tap link rather than a request to go and find you on Maps.",
      },
      {
        type: "p",
        text: "Reply to all of them, including the bad ones, in public and without defensiveness. Prospective customers read the replies more carefully than the reviews. A calm, specific response to a complaint sells better than a wall of five stars.",
      },
      { type: "h2", text: "Then make the website agree with the profile" },
      {
        type: "p",
        text: "Your website's job in local search is corroboration. The name, address and phone number should appear in the page markup exactly as they appear on the profile, not as text baked into an image. Add LocalBusiness structured data so the details are machine-readable. If you serve several towns across Dakshina Kannada, give the meaningful ones their own page with genuinely different content, not one template with the place name swapped out.",
      },
      { type: "h2", text: "How to know whether it is working" },
      {
        type: "p",
        text: "Track calls, direction requests and website clicks from the profile itself, and track them month over month rather than day to day. Local rankings vary with the searcher's exact position, so a screenshot of your own phone showing position one proves very little. What proves something is a steady rise in the actions people take after they find you.",
      },
      {
        type: "p",
        text: "None of this is quick. A neglected profile that gets properly categorised, populated and reviewed usually takes two to three months to move. It also does not stop working the moment you stop paying for it, which is the difference between this and an ad campaign.",
      },
    ],
  },
  {
    slug: "what-makes-a-business-website-load-fast",
    category: "Web Development",
    title: "What Actually Makes a Business Website Load Fast",
    excerpt:
      "Speed is not a plugin you install at the end. It is a set of decisions made early, and the biggest one is usually about images. A practical look at what moves the needle on a real business site.",
    standfirst:
      "Almost every slow website we are asked to rescue is slow for the same three reasons, and none of them are the reasons the owner was told. Here is what genuinely decides whether a page appears in one second or six.",
    img: "/assets/imgs/pages/img-31.png",
    alt: "The iDrive website shown on a phone, laptop and tablet, a responsive build by Infin Digital",
    date: "2026-08-15",
    dateLabel: "15 August 2026",
    readingTime: "7 min read",
    body: [
      {
        type: "p",
        text: "Site speed gets discussed as though it were a switch. Install a caching plugin, buy a faster hosting plan, and the problem is solved. It rarely is, because the weight that makes a page slow was usually added long before anyone thought about performance.",
      },
      { type: "h2", text: "Images are almost always the problem" },
      {
        type: "p",
        text: "On a typical business website, images account for the large majority of what a visitor has to download. A single photograph exported straight from a camera or a design tool can be four megabytes. Put five of those above the fold and no amount of caching will save the page on a mobile connection.",
      },
      {
        type: "ul",
        items: [
          "Serve modern formats. WebP or AVIF will typically cut file size by half or better against a JPEG at the same visual quality.",
          "Resize to the size actually displayed. A 4000-pixel-wide image squeezed into a 400-pixel slot still downloads all 4000 pixels.",
          "Set width and height on every image. Without them the browser does not know how much room to leave, so the page jumps around as images arrive. That jumping is measured, and it counts against you.",
          "Lazy-load everything below the fold, and only below the fold. Lazy-loading your hero image delays the very thing you want to appear first.",
        ],
      },
      { type: "h2", text: "The second problem is everything you bolted on" },
      {
        type: "p",
        text: "Chat widgets, heat-mapping tools, three analytics scripts, a review carousel, an animation library used for one fade. Each was added for a reason that felt good at the time, and each costs the visitor download time and processing time on a phone that is slower than your laptop.",
      },
      {
        type: "p",
        text: "Audit the list honestly. For each third-party script, ask who looked at its output in the last three months. In our experience roughly half of them fail that question and can be removed the same afternoon, which is the cheapest performance win available to anyone.",
      },
      { type: "h2", text: "The third is fonts, which nobody suspects" },
      {
        type: "p",
        text: "Custom fonts are downloaded before text can be painted in them. Load four weights of two families and you have added a serious delay before a visitor sees a single word. Two weights of one family covers the needs of most business websites. Self-host them, subset them to the characters you actually use, and set font-display so text renders immediately in a fallback rather than leaving a blank space.",
      },
      { type: "h2", text: "What to measure, and what to ignore" },
      {
        type: "p",
        text: "Chasing a green score in a testing tool is a poor goal, because the score is a proxy. Measure the three things Google actually reports on real visitors: how long the largest element takes to appear, how quickly the page responds to a tap, and how much the layout shifts while loading.",
      },
      {
        type: "p",
        text: "Test on a mid-range Android phone on mobile data, not on office broadband. That is the device most of your visitors are holding, and it is where the gap between a well-built site and a heavy one becomes obvious.",
      },
      { type: "h2", text: "Why this is a commercial argument, not a technical one" },
      {
        type: "p",
        text: "Speed compounds with everything else you spend on. Every visitor who leaves before the page renders is a visitor your ad budget already paid for. Every second of delay on a checkout is abandoned carts. It is also, unlike most marketing spend, a one-time fix that keeps paying: a site built carefully stays fast unless somebody makes it slow again.",
      },
      {
        type: "p",
        text: "The honest summary is that fast websites are not built by optimising at the end. They are built by making sensible decisions about images, scripts and fonts at the start, and then keeping the discipline when someone asks for one more widget.",
      },
    ],
  },
  {
    slug: "clear-visual-identity-makes-campaigns-cheaper",
    category: "Branding",
    title: "Why a Clear Visual Identity Makes Every Campaign Cheaper",
    excerpt:
      "Branding is usually sold as a matter of taste. It is better understood as a cost control: a settled identity means less rework, faster production and advertising that compounds instead of starting over each month.",
    standfirst:
      "Businesses tend to treat brand work as the nice-to-have that comes after the marketing budget. That order is expensive, and the cost shows up somewhere most owners never think to look.",
    img: "/assets/imgs/pages/img-30.png",
    alt: "Stationery, business cards, notebook and packaging carrying The Route Technician identity, a branding project by Infin Digital",
    date: "2026-08-15",
    dateLabel: "15 August 2026",
    readingTime: "5 min read",
    body: [
      {
        type: "p",
        text: "The case for a proper visual identity is usually made in the language of feeling. It should look premium, it should feel trustworthy, it should stand out. All true, and all impossible to argue with or against. There is a harder argument available, and it is about money.",
      },
      { type: "h2", text: "Undefined brands get redesigned every month" },
      {
        type: "p",
        text: "Without a settled identity, every piece of work restarts the same conversation. Which blue? Is the logo big enough? Should this be in the other font? Each round of that conversation costs real hours, and those hours are billed or taken from someone's week.",
      },
      {
        type: "p",
        text: "A defined system removes the conversation. Colours, type, spacing, logo behaviour and photographic treatment are decided once, written down, and then simply applied. A festival campaign that used to take a week of back and forth takes an afternoon, because nothing fundamental is up for debate.",
      },
      { type: "h2", text: "Recognition is a discount on attention" },
      {
        type: "p",
        text: "Advertising works on repetition, but repetition only accumulates if each exposure is recognisably the same brand. Run a Meta campaign in one style, a Google display set in another and a hoarding in a third, and you have paid for three unrelated first impressions rather than three reinforcements of one.",
      },
      {
        type: "p",
        text: "Consistency is what converts spend into memory. It is the reason a business with a settled identity can spend less over time to stay equally present: it is building on the previous month rather than replacing it.",
      },
      { type: "h2", text: "What a usable identity actually contains" },
      {
        type: "ul",
        items: [
          "A logo with real rules: minimum size, clear space, what to do on dark backgrounds, and which variants exist for square, horizontal and stamp uses.",
          "A colour palette with defined roles, not just a row of swatches. Which colour is a button, which is a background, which is only ever an accent.",
          "Two typefaces at most, with a stated scale. Everything a designer might set should already have a size and weight assigned.",
          "A photographic direction, written plainly enough that whoever runs your Instagram can follow it without a designer present.",
          "Real applications: a card, a letterhead, a package, a social template. An identity that has never been applied to anything is a theory.",
        ],
      },
      { type: "h2", text: "The test of a good identity is other people using it" },
      {
        type: "p",
        text: "The point is not the presentation deck. The point is that six months later your intern, your printer and your Meta ads all produce work that looks like the same company without anyone having to ask. If the system only works when its designer is in the room, it is not finished.",
      },
      {
        type: "p",
        text: "That is the practical argument for doing brand work before the campaign budget rather than after it. Not because it looks better, though it does, but because everything downstream of it becomes cheaper and faster to produce.",
      },
    ],
  },
  {
    slug: "planning-an-ad-budget-you-can-measure",
    category: "Performance Marketing",
    title: "Planning an Ad Budget You Can Measure From Day One",
    excerpt:
      "The most common reason ad spend feels wasted is that nobody set up the tracking before the money started moving. A straightforward way to plan a budget you can actually judge.",
    standfirst:
      "Reach and impressions are the metrics agencies report when there is nothing better to say. If you decide what counts as a result before you launch, you never have to accept them.",
    img: "/assets/imgs/pages/img-32.png",
    alt: "A Meta Ads campaign dashboard showing conversions, reach, leads and cost per lead for NKN Media, a performance marketing client of Infin Digital",
    date: "2026-08-15",
    dateLabel: "15 August 2026",
    readingTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Businesses rarely regret the amount they spent on advertising. They regret not being able to tell what it did. That is almost always a decision made in the first week, when tracking was left until later and later never arrived.",
      },
      { type: "h2", text: "Decide what a result is before you spend anything" },
      {
        type: "p",
        text: "Write down the action that has commercial value to you. A completed enquiry form. A WhatsApp conversation started. A phone call over sixty seconds. A purchase. Anything that stops short of that is a step, not a result, and steps should never be the headline in a report.",
      },
      {
        type: "p",
        text: "Then work out roughly what one is worth. If one enquiry in four becomes a customer and a customer is worth thirty thousand rupees, an enquiry is worth about seven and a half thousand to you. Now you have a ceiling, and a cost per lead figure stops being an abstract number.",
      },
      { type: "h2", text: "Set the tracking up while it is still boring" },
      {
        type: "ul",
        items: [
          "Install conversion tracking for each defined action, and test it yourself by completing the action end to end.",
          "Use server-side tracking where you can. Browser-based tracking loses a meaningful share of conversions to blockers and privacy settings, which makes campaigns look worse than they are.",
          "Give calls their own tracking, with a duration threshold. A three-second call is a wrong number, not a lead.",
          "Check that the numbers in the ad platform and the numbers in your analytics roughly agree before you trust either.",
        ],
      },
      { type: "h2", text: "Split the budget by job, not evenly" },
      {
        type: "p",
        text: "Google Ads and Meta Ads do different work. Search captures demand that already exists: somebody is looking for what you sell right now. Meta creates demand among people who were not looking, which works well for visual categories such as retail, hospitality, property and education.",
      },
      {
        type: "p",
        text: "If you need enquiries this quarter, weight towards search. If the category is visual and the purchase is considered, give Meta a real share rather than a token one. Splitting fifty-fifty by default is a decision nobody made.",
      },
      { type: "h2", text: "Give it enough to learn from" },
      {
        type: "p",
        text: "Both platforms need conversion volume before their optimisation is worth anything. A budget spread across six campaigns, each collecting two conversions a week, teaches the system nothing and teaches you nothing either. Fewer campaigns with meaningful volume will beat many campaigns with none, almost every time.",
      },
      {
        type: "p",
        text: "Hold the first two weeks steady. Changing budgets and targeting daily resets the learning and guarantees you never see what the campaign would have settled at.",
      },
      { type: "h2", text: "What a report should tell you" },
      {
        type: "p",
        text: "Spend, conversions, cost per conversion, and where those conversions came from. If a monthly report leads with impressions and reach, ask what the cost per enquiry was. The answer, or the absence of one, tells you what you need to know about how the account is being run.",
      },
      {
        type: "p",
        text: "Set this up properly at the start and advertising becomes an ordinary business decision with a known return, rather than a monthly act of faith.",
      },
    ],
  },
];

export function getPost(slug: string | undefined): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
