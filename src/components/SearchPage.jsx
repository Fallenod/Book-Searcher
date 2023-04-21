import React, { useEffect, useState } from 'react';

import { Unstable_Grid2 as Grid, Pagination, Paper, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import LoaderGrid from './LoaderGrid';
import CardsData from './CardsData';
import { changeFilter, changeOrderBy, changePage, changePageSize, changePrintType, changeValue, fetchSearch, selectSearch, selectSearchFilter, selectSearchIsLoading, selectSearchOrderBy, selectSearchPage, selectSearchPageSize, selectSearchPrintType, selectSearchTotal, selectSearchTotalPage, selectSearchValue } from '../features/search/searchSlice';
import { useLocation, useSearchParams } from 'react-router-dom';
import Select from './Select';
import ViewToggle from './ViewToggle';
import FilterGroup from './FilterGroup';

const emptyText = 'Нет результатов в данной категории!';

const orderByList = [
  {
    id: 0,
    value: "relevance",
    name: "По релевантности",
  },
  {
    id: 1,
    value: "newest",
    name: "По дате добавления",
  },
];
const pageSizeList = [
  {
    id: 0,
    value: "18",
    name: "По 18",
  },
  {
    id: 1,
    value: "24",
    name: "По 24",
  },
  {
    id: 2,
    value: "30",
    name: "По 30",
  },
];

const filterData = {
  title: "По доступности:",
  list: [
    {
      name: "Платные электронные книги",
      value: "paid-ebooks",
    },
    {
      name: "Часть текста с предварительным просмотром",
      value: "partial",
    },
    {
      name: "Весь текст с предварительным просмотром",
      value: "full",
    },
    {
      name: "Бесплатные элетронные книги",
      value: "free-ebooks",
    },
    {
      name: "Все элетронные книги",
      value: "ebooks",
    },
  ],
};
const printTypeData = {
  title: "Показывать:",
  list: [
    {
      name: "Все",
      value: "all",
    },
    {
      name: "Книги",
      value: "books",
    },
    {
      name: "Журналы",
      value: "magazines",
    },
  ],
};

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [fullWidth, setFullWidth] = useState(true);
  const value = searchParams.get('q');
  const page = searchParams.get('startIndex');

  const { search } = useLocation();
  const cards = useSelector(selectSearch);
  const isLoading = useSelector(selectSearchIsLoading);
  const searchValue = useSelector(selectSearchValue);
  const defaultPage = useSelector(selectSearchPage);
  const totalPage = useSelector(selectSearchTotalPage);
  const orderBy = useSelector(selectSearchOrderBy);
  const totalItems = useSelector(selectSearchTotal);
  const pageSize = useSelector(selectSearchPageSize);
  const printTypeValue = useSelector(selectSearchPrintType);
  const filterValue = useSelector(selectSearchFilter);
  const dispatch = useDispatch();
  const [view, setView] = React.useState('list');

  const handleViewChange = (event, nextView) => {
    setView(nextView);
  };
  useEffect(() => {
    searchParams.forEach((value, key) => {
      console.log(value, key);
    });
  }, []);
  useEffect(() => {
    if (!searchParams.has('startIndex')) {
      dispatch(changePage(page));
    }
    if (page) {
      dispatch(changePage(page));
    }
  }, [dispatch]);
  useEffect(() => {
    if (value) {
      dispatch(changeValue(value));
    }
  }, [cards, dispatch]);

  useEffect(() => {
    dispatch(fetchSearch());
  }, [searchValue, defaultPage, orderBy, pageSize, printTypeValue, filterValue, search]);

  const handleChange = (event, value) => {
    dispatch(changePage(value - 1));
  };
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-between",
          marginTop: '20px',
          height: '100px',
        }}
      >
        <Stack flexDirection="row" gap={2}>
          <ViewToggle value={view} onChange={handleViewChange} />
          <Select list={pageSizeList} reducer={changePageSize} selector={pageSize} />
        </Stack>
        <Select list={orderByList} reducer={changeOrderBy} selector={orderBy} />
      </Grid>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: "row",
          alignItems: 'start',
          marginTop: '20px',
          minHeight: 'calc(100vh - 10rem)',
        }}
        spacing={2}
      >
        <Grid xs={2} container item >
          <Paper sx={{ width: "100%", marginTop: "20px", padding: "1rem" }}>
            <Typography variant='h6'>Фильтр</Typography>
            <FilterGroup data={printTypeData} defaultValue={printTypeValue} reducer={changePrintType} />
            <FilterGroup data={filterData} defaultValue={filterValue} reducer={changeFilter} />
          </Paper>
        </Grid>
        <Grid xs={10} container item rowSpacing={1} columnSpacing={2}>
          {isLoading ? <CardsData cards={cards} emptyText={emptyText} type={view} /> : <LoaderGrid />}
          {isLoading && (
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
                borderRadius: '20px',
                p: '1rem',
              }}
              xs={12}
              container
              spacing={2}
            >
              <Pagination
                shape="rounded"
                size="large"
                color='primary'
                count={totalPage}
                page={defaultPage + 1}
                onChange={handleChange}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
export default SearchPage;
