


export const searchPlaceholder = '<|search|>';

export const getSearchUrlFromQuery = (query, domain) => {

  let url = domain.url;
  if (query.length > 0 && !query.includes('.') && query.includes(' ')) {
      // get search query url 
      url = domain.searchTemplate?.replace(searchPlaceholder, encodeURIComponent(query));
  }

  return url;
};

export const defaultDomains = [
    // Add: wikipedia, 
    {
      url: 'www.google.com',
      searchTemplate: 'https://www.google.com/search?q=<|search|>',
      title: 'Google',
      favIconUrl: 'https://www.google.com/images/branding/product/1x/gsa_android_144dp.png'
    },
    {
      url: 'https://en.wikipedia.org/',
      searchTemplate: 'https://en.wikipedia.org/wiki/Special:Search?go=Go&search=<|search|>',
      title: 'Wikipedia',
      favIconUrl: 'https://en.wikipedia.org/static/favicon/wikipedia.ico'
    },
    {
      url: 'scholar.google.com',
      searchTemplate: 'https://scholar.google.com/scholar?q=<|search|>',
      title: 'Google Scholar',
      favIconUrl: 'https://scholar.google.com/favicon.ico',
      canSearchUrl: true,
    },
    {
      title: 'Bing',
      url: 'https://www.bing.com',
      favIconUrl: 'https://www.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico',
      searchTemplate: "https://www.bing.com/search?q=<|search|>",
    },
    {
      title: 'DuckDuckGo',
      url: 'https://duckduckgo.com',
      favIconUrl: 'https://duckduckgo.com/favicon.ico',
      searchTemplate: 'https://duckduckgo.com/?q=<|search|>',
    },
    {
      title: 'Brave Search',
      url: 'https://search.brave.com',
      favIconUrl: 'https://cdn.search.brave.com/serp/v2/_app/immutable/assets/favicon.GnMcXrVh.ico',
      searchTemplate: 'https://search.brave.com/search?q=<|search|>'
    },
    {
      title: 'Chat GPT',
      url: 'https://chatgpt.com',
      favIconUrl: 'https://cdn.oaistatic.com/_next/static/media/favicon-32x32.be48395e.png',
    },
    {
      title: 'Perplexity',
      url: 'https://perplexity.ai',
      favIconUrl: 'https://www.perplexity.ai/favicon.ico',
    },
    {
      title: 'Exa',
      favIconUrl: 'https://exa.ai/favicon.png',
      url: 'https://exa.ai/',
      searchTemplate: 'https://exa.ai/search?q=<|search|>',
      type: 'ai',
      canSearchUrl: true,
    },
    {
      title: 'Youtube',
      url: 'https://youtube.com',
      favIconUrl: "https://www.youtube.com/s/desktop/7ea5dfab/img/favicon_32x32.png",
      searchTemplate: 'https://www.youtube.com/results?search_query=<|search|>',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com',
      favIconUrl: 'https://abs.twimg.com/favicons/twitter.3.ico',
      searchTemplate: 'https://twitter.com/search?q=<|search|>',
      type: 'social',
    },
    {
      title: 'Sublime',
      url: 'https://sublime.app',
      searchTemplate: 'https://sublime.app/search?query=<|search|>',
      favIconUrl: 'https://sublime.app/apple-touch-icon.png',
      type: 'social',
    },

    {
      title: 'Reddit',
      url: 'https://www.reddit.com',
      favIconUrl: 'https://www.redditstatic.com/shreddit/assets/favicon/64x64.png',
      searchTemplate: 'https://www.reddit.com/search/?q=<|search|>',
      type: 'social'
    },

    {
      title: 'Hypothesis',
      url: 'https://hypothes.is',
      searchTemplate: 'https://hypothes.is/search?q=<|search|>',
      favIconUrl: 'https://hypothes.is/assets/images/favicons/favicon-32x32.png?07d072',
      type: 'social',
    },
    {
      title: 'Amazon',
      url: 'https://amazon.com',
      favIconUrl: 'https://www.amazon.com/favicon.ico',
      searchTemplate: 'https://www.amazon.com/s?k=<|search|>',
      type: 'shopping',
    },
    {
      title: 'Substack',
      url: 'https://substack.com',
      searchTemplate: 'https://substack.com/search/<|search|>',
      favIconUrl: 'https://substackcdn.com/icons/substack/favicon.ico',
      type: 'reading',
    },

    {
      title: 'New York Public Library',
      url: 'https://www.nypl.org',
      favIconUrl: 'https://ux-static.nypl.org/images/favicon.ico',
      searchTemplate: 'https://nypl.na2.iiivega.com/search?query=<|search|>&searchType=everything&pageSize=10',
      type: 'reading',
    },
    {
      title: 'Notion',
      url: 'https://www.notion.so',
      favIconUrl: 'https://www.notion.so/images/favicon.ico',
    },
    {
      title: 'Quora',
      url: 'https://www.quora.com',
      favIconUrl: 'https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.favicon-new-badged.ico-26-7a2cda9b4acdaf19.ico',
      searchTemplate: 'https://www.quora.com/search?q=<|search|>',
      type: 'social'
    },
    {
      title: 'Hacker News',
      url: 'https://news.ycombinator.com',
      searchTemplate: 'https://hn.algolia.com/?q=<|search|>',
      favIconUrl: 'https://news.ycombinator.com/favicon.ico',
      type: 'social',
    },
    {
      title: 'Sci Hub',
      favIconUrl: 'https://sci-hub.hkvisa.net/favicon.ico',
      url: 'https://sci-hub.hkvisa.net',
      searchTemplate: 'https://sci-hub.hkvisa.net/<|search|>'
    },
  ];