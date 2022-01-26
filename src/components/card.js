import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const NewsCard = ({
  item,
  index
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const styles = useStyles();
  const { author, content, description, publishedAt, title, url, urlToImage, source } = item 

  console.log('content', content)
  return (
    <div>
      {index}
      {console.log('item', item)}
    </div>
  );
};

const useStyles = makeStyles(() => ({

}));

export default NewsCard;

/*

{CardData.map(({ title, subtitle }, index) => ( 
            <div className="card" key={index}>
                <span>{title}</span>
                <br />
                <span>{subtitle}</span>
                <br />
            </div>
        ))}

        */