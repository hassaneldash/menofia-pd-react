import { Button } from '@/components/ui/button';
import React from 'react';
import { useSearchParams } from 'react-router';

const SearchParametersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <p>Search/Query Param (name) = {searchParams.get('name')}</p>
      <p>Search/Query Param (age) = {searchParams.get('age')}</p>

      <Button
        onClick={() => {
          setSearchParams({ name: 'Ahmed', age: 25 });
        }}>
        Change
      </Button>
    </>
  );
};

export default SearchParametersPage;

// /query?name=hassan&age=34
