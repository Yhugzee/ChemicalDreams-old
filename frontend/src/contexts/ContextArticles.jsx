import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";

const ArticleContext = createContext();

export default ArticleContext;

export function ArticleContextProvider({ children }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/articles", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const updateArticle = (article) => {
    setArticles(
      articles.map((oldArticle) =>
        oldArticle.id === article.id ? article : oldArticle
      )
    );
  };

  const memoizedValue = useMemo(
    () => ({
      articles,
      updateArticle,
    }),
    [articles, updateArticle]
  );

  return (
    <ArticleContext.Provider value={memoizedValue}>
      {children}
    </ArticleContext.Provider>
  );
}

ArticleContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
