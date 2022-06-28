import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspapers = () => {
   const [articles, setArticles] = useState([]);
   useEffect (()=>{
      fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=37b47d819f7048deabe7280236759725')
      .then(res => res.json())
      .then(data => setArticles(data.articles));
   }, [])
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
            articles.map(article => <Grid item xs={2} sm={4} md={4}>
               <News article={article}></News>
            </Grid>)
         }
         </Grid>
      </Box>
   );
};

export default Newspapers;