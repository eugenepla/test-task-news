import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { API_KEY } from '../config'
import NewsCard from '../components/card';
import { NewsService } from '../services/news-service';

const NewsPage = ({}) => {
  const [newsData, setNewsData] = useState([])
  const [pageSize, setPageSize] = useState(10)

  const styles = useStyles();

  useEffect(() => {
    const firstSearchUrl = `&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=${pageSize}`;
    NewsService.get(firstSearchUrl)
    .then(res => {
      setNewsData(res.articles);
    });
  }, [])

  let loadMoreNews = () => {
    const searchUrl = `&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=${pageSize + 10}`
    NewsService.get(searchUrl)
    .then(res => {
      setNewsData(res.articles);
    });
    setPageSize(pageSize + 10)
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
      </div>
      <div className={styles.cardsContainer}>
        {newsData.map((item, index) => {
          return <NewsCard item={item} key={index} />
        })}
      </div>
      <div className={styles.loadMoreContainer}>
        <div onClick={() => loadMoreNews()} className={styles.loadMoreButton}>
          Load more
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  cardsContainer: {
    padding: '30px',
    maxWidth: '1000px',
    alignSelf: 'center'
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  loadMoreContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '70px'
  },
  loadMoreButton: {
    borderRadius: '2px',
    fontFamily: "canada-type-gibson",
    boxShadow: '0 15px 30px 0 rgb(54 93 231 / 29%)',
    backgroundImage: 'linear-gradient(253deg, #2199ff 100%, #4565ff)',
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    border: 'none',
    padding: '16px 48px',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      background: '#238cfc',
      cursor: 'pointer'
    },
  }
}));

export default NewsPage;
