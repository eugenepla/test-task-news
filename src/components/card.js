import React from 'react';
import { makeStyles } from '@mui/styles';
import { getDateFormat } from '../helpers/helpers';
import No_image from '../assets/No_image.png'

const NewsCard = ({
  item
}) => {
  const styles = useStyles();
  const { author, content, description, publishedAt, title, url, urlToImage, source } = item 

  const showCorrectAuthor = author?.includes(',') ? `${author} ` : `${author}, ${source.name} ` 

  return (
      <a target="_blank"
         rel="noreferrer" 
         href={url} 
         className={styles.cardBody}>
          <img
            className={styles.image}
            src={urlToImage || No_image}
            alt={title}
            width="260px"
            height="200px"
          />
          <div className={styles.articleInfoContainer}>
            <div className={styles.title}>
              {title}
            </div>
            <div id="title" className={styles.description}>
              {description}
            </div>
            <div className={styles.content}>
              {content}
            </div>
            <div className={styles.bottomInfoContainer}>
              <p className={styles.authors}>{showCorrectAuthor}</p>
              <p className={styles.date}>{getDateFormat(publishedAt)}</p>
            </div>
          </div>
        </a>
    );
  }

const useStyles = makeStyles(() => ({
  cardBody: {
    display: 'flex',
    borderRadius: '5px',
    border: 'solid 1px #dfdfec',
    boxShadow: '0 5px 15px 0 rgb(0 0 0 / 15%)',
    marginBottom: '40px',
    textDecoration: 'none'
  },
  articleInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    justifyContent: 'space-between',
    width: '100%',
    padding: '15px',
    fontFamily: 'canada-type-gibson',
  },
  title: {
    fontFamily: "canada-type-gibson",
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '1.17',
  },
  description: {
    fontSize: '13px',
    lineHeight: '1.07',
    color: '#1d1c3b',
  },
  content: {
    fontFamily: "canada-type-gibson",
    fontSize: '14px',
    color: '#505669'
  },
  bottomInfoContainer: {
    display: 'flex',
    justifyContent: 'right',
    fontSize: '14px',
    height: '30px'
  },
  authors: {
    marginRight: '10px',
    color: 'blue'
  },
  date: {
    color: '#1d1c3b'
  }
}))

export default NewsCard;