export const ExercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "48841fa36cmshc53dd287d0d1020p1a2b91jsn9b4f26c3fcff",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const YoutubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "81ea65dd83msh9bc193f7ca72d5cp1c0e68jsn10e095448b3a",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
