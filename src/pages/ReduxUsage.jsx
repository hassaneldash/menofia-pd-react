import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { decrease, increase, increaseByValue, reset } from '@/store/redux/counterSlice';
const ReduxUsage = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mt-5'>
        Redux
      </h1>
      <Card className='mb-2'>
        <CardHeader>
          <CardTitle>First Redux Component</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Count: {count}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => dispatch(increase())}>Increment</Button>
          <Button className='ms-2' variant='outline' onClick={() => dispatch(decrease())}>
            Decrement
          </Button>
          <Button className='ms-2' onClick={() => dispatch(increaseByValue(10))}>
            Increment By 10
          </Button>
          <Button className='ms-2' onClick={() => dispatch(reset())}>
            Reset
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ReduxUsage;
