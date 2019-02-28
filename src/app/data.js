import * as markup from "./markup";

const stripTypes = [
  {
    name: "hero",
    label: "Hero"
  },
  {
    name: "key-features",
    label: "Key features"
  },
  {
    name: "proposition",
    label: "Proposition"
  },
  {
    name: "detail",
    label: "Detail"
  },
  {
    name: "embed",
    label: "Embed"
  },
  {
    name: "comparison",
    label: "Comparison"
  },
  {
    name: "credibility",
    label: "Credibility"
  },
  {
    name: "links",
    label: "Links"
  },
  {
    name: "instructions",
    label: "Instructions"
  },
  {
    name: "tail",
    label: "Tail"
  },
  {
    name: "micronav",
    label: "Micro Navigation"
  },
  {
    name: "footer",
    label: "Footer"
  }
];

const stripExamples = [
  {
    type: "navigation",
    name: "Ubuntu.com",
    description: "Use for bubbles with ubuntu.com",
    jsx: markup.Hero_video
  },
  {
    type: "navigation",
    name: "Stand-alone site",
    description: "Use for microsites and arms length properties",
    jsx: markup.Hero_video
  },
  {
    type: "hero",
    name: "Small video",
    description: "Hero with a small video",
    jsx: markup.Hero_video
  },
  {
    type: "proposition",
    name: "Illustrated themes",
    description: "Use with photography or illustration",
    jsx: markup.Proposition_3_themes
  },
  {
    type: "proposition",
    name: "Pair",
    description: "Two sub-headed paragraphs",
    jsx: markup.Proposition_sub - group_with_pair
  },
  {
    type: "proposition",
    name: "Hierarchy",
    description: "Feature-benefit tree as used on maas.io",
    jsx: markup.Proposition_feature - benefit
  },
  {
    type: "proposition",
    name: "Headline-para",
    description: "Use in sets of two or three",
    jsx: markup.Proposition - short_prop_with_with_learn - more
  },
  {
    type: "key-features",
    name: "Icon grid",
    description:
      "Needs a uniform set of monochrome icons. Icons not usually links",
    jsx: markup.Key_features_grid_icons_3_x_3
  },
  {
    type: "key-features",
    name: "Text grid",
    description: "~20 words for each key point",
    jsx: markup.Key_features_grid_text - only_3_x_3
  },
  {
    type: "key-features",
    name: "Ticklist 2 columns",
    description: "Short sentence ticklist. Usually orange.",
    jsx: markup.Key_features_ticklist_large_orange
  },
  {
    type: "detail",
    name: "Paragraph - image pair",
    description: "Text with related image",
    jsx: markup.Detail_text_L_image_R
  },
  {
    type: "detail",
    name: "Paragraph pair",
    description: "",
    jsx: markup.Detail_text_L_text_R.js
  },
  {
    type: "embed",
    name: "Code block",
    description: "Multi line code sample, for cutting and pasting",
    jsx: markup.Embeded_code
  },
  {
    type: "embed",
    name: "ASCIINEMA",
    description: "For a demo. Variable sizes.",
    jsx: markup.Embed_asciinema
  },
  {
    type: "comparison",
    name: "Table",
    description: "Granular presense or absence, feature by feature",
    jsx: markup.Comparision_feature - price_table
  },
  {
    type: "comparison",
    name: "Cards",
    description:
      "Cards declare make the main choice clear, then detail the features",
    jsx: markup.Comparison_Feature - price_cards
  },
  {
    type: "credibility",
    name: "Logo cloud",
    description: "Logos of major ",
    jsx: markup.Credibility_logo_cloud
  },
  {
    type: "credibility",
    name: "Claim and quote",
    description: "The quotes shuold directly support the text",
    jsx: markup.Credibility_quote_supporting_claim_long
  },
  {
    type: "credibility",
    name: "Three quotes",
    description: "Two sentences ~40 words, max for each of the three quotes.",
    jsx: markup.Credibility_three_quotes
  },
  {
    type: "links",
    name: "Dated posts",
    description: "Blogposts, or other dated links, needing regular updates",
    jsx: markup.Links_3_blogposts_with_date
  },
  {
    type: "links",
    name: "Resources",
    description:
      "Variety of kinds of link made clear with iconography. Typically for evergreen resources.",
    jsx: markup.Links_3_resources_category_icons
  },
  {
    type: "links",
    name: "Cards",
    description:
      "Shows longer  links to content that need longer ~30 word intros. ",
    jsx: markup.Links_Cards_grid_2_x_2
  },
  {
    type: "tail",
    name: "Simple",
    description:
      "Headline and call to action, e.g. Install, Try now, Learn more",
    jsx: markup.Tail_headline_cta
  },
  {
    type: "tail",
    name: "Complex",
    description: "Provide choice of onward journeys at the end of the page",
    jsx: markup.Tail_3col_cta_reading
  },
  {
    type: "micronav",
    name: "Cards",
    description:
      "Stand-alone sites can offer a mini-sitemap at the end of the page",
    jsx: markup.Tail_micronav
  },
  {
    type: "footer",
    name: "Minimum, legal",
    description:
      "Optionally add build details, thank-yous, support and feedback links",
    jsx: markup.Footer_Legal
  }
];

export { stripTypes, stripExamples };
