import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useCount } from '@/store/zustand/useCount';
import { Button } from '@/components/ui/button';

const SecondZustandComponent = () => {
  // Consume Data From Zustand Store
  const count = useCount((state) => state.count);

  // Consume Actions From Zustand Store
  const increment = useCount((state) => state.increment);
  const decrement = useCount((state) => state.decrement);
  const incrementByTen = useCount((state) => state.incrementByTen);
  const incrementByValue = useCount((state) => state.incrementByValue);
  const reset = useCount((state) => state.reset);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Second Zustand Component</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Count: {count}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={increment}>Increment</Button>
        <Button className='ms-2' variant='outline' onClick={decrement}>
          Decrement
        </Button>
        <Button className='ms-2' onClick={incrementByTen}>
          Increment By 10
        </Button>
        <Button
          variant='outline'
          className='ms-2'
          onClick={() => {
            incrementByValue(15);
          }}>
          Decrement By 15
        </Button>
        <Button className='ms-2' onClick={reset}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SecondZustandComponent;
