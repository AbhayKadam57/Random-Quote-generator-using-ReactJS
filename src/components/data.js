const data = [
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller",
    tag: "Business",
    id: Math.floor(Math.random() * 1000),
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    tag: "Business",
    id: Math.floor(Math.random() * 1000),
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank",
    tag: "Funny",
    id: Math.floor(Math.random() * 1000),
  },
  {
    quote:
      "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde",
    tag: "Humor",
    id: Math.floor(Math.random() * 1000),
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    tag: "Humor",
    id: Math.floor(Math.random() * 1000),
  },
  {
    quote:
      "If life were predictable it would cease to be life and be without flavor.",
    author: "Ralph Waldo Emerson",
    tag: "Humor",
    id: Math.floor(Math.random() * 1000),
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    tag: "Funny",
    id: Math.floor(Math.random() * 1000),
  },
  {
    quote: "DThe only impossible journey is the one you never begin.",
    author: "ony Robbins",
    tag: "Funny",
    id: Math.floor(Math.random() * 1000),
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
    tag: "Humor",
    id: Math.floor(Math.random() * 1000),
  },
];

export const getQuote = (selected) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let filterData = data.filter((item) => item.tag === selected);
      console.log(filterData);

      return resolve(filterData[Math.floor(Math.random() * filterData.length)]);
    }, 800);
  });
};
