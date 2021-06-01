import { formatDate } from "./formatDate";

export const getNews = () => {
  const apiUrl = `https://newsapi.org/v2/everything?q=astronomy&from=${formatDate(
    new Date()
  )}&sortBy=publishedAt&apiKey=cf51166c285a415a801148b2f5b41d70`;

  const res = fetch(apiUrl).then((data) => data.json());
  return res;
};
