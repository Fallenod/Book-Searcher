import React, { useEffect, useState } from 'react';

import { Unstable_Grid2 as Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import LoaderGrid from './LoaderGrid';
import Topic from '../features/topic/Topic';
import subjectList from '../subjectList';
import { fetchTopic, selectTopicIsLoading } from '../features/topic/topicSlice';

function HomePage() {
  const [topics, setTopics] = useState([]);
  const isLoading = useSelector(selectTopicIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const requests = subjectList.map((item) => dispatch(fetchTopic(item.url)));
    Promise.all(requests).then((data) => {
      setTopics(data);
    });
  }, [dispatch]);
  return (
    <Grid
      container
      gap={12}
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        borderRadius: '20px',
        minHeight: '100vh',
      }}
    >
      {isLoading ? (
        topics?.map((el, index) => (
          <Topic
            key={subjectList[index].id}
            name={subjectList[index].name}
            url={subjectList[index].url}
            color={subjectList[index].color}
            icon={subjectList[index].icon}
            data={el.payload.results.slice(0, 5)}
          />
        ))
      ) : (
        <LoaderGrid />
      )}

    </Grid>
  );
}

export default HomePage;
