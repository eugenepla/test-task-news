import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { API_KEY } from '../config'
import {
  Grid,
  Container,
  Divider,
} from '@mui/material';
import NewsCard from '../components/card';
import { NewsService } from '../services/news-service';

const NewsPage = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([])
  const [page, setPage] = useState(0)
  const styles = useStyles();

  useEffect(() => {
    const firstSearchUrl = `&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=10`;
    NewsService.get(firstSearchUrl)
    .then(res => {
      setNewsData(res.articles);
    });
    setPage(1);
  }, [])

  return (
    <Container>
        {newsData?.map((item, index) => {
          {console.log('dasadsasd', item)}
          <div key={index}>
            {console.log('asddsasadsadas', item)}
            <p>dasdsasdaasddassa</p>
            <NewsCard item={item} index={index} />
          </div>
        })}
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
  },
  usersCardsContainer: {
    display: 'grid',
    gridTemplateColumns: '33.3% 33.3% 33.3%',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '15px',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '15px',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default NewsPage;
