import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import axios from 'axios';
import { Link } from 'react-router';
import { instance } from '@/lib/axisoInstance';

// Pure Functions: Same input -> same output
// function add(a, b) {
//   return a + b;
// }

// Side Effect: Any Function not related to rendering logic
// 1. Modify External Variable
// let count = 0;

// function increment() {
//   count++;
// }

// 2. Change DOM
// document.title = 'Hello';

// 3. Make network requests
// fetch('https://api.escuelajs.co/api/v1/users');

// 4. Write Storage
// localStorage.setItem('token', 'abc');

// 5. Console
// console.log('Hello');

const UsersPage = () => {
  // Class-based Components
  // 1. Mounting Phase => componentDidMount
  // 2. Update Phase => componentDidUpdate
  // 3. Unmounting Phase => componentWillMount

  // useEffect(): Hook handle Side Effects
  // useEffect(2args Side Effect Callback()=>{}, Dependency Array []);

  // 1. Mounting Phase => Run Once when the component appears and never again
  // Empty Dependency Array + Callback without return
  useEffect(() => {
    console.log('This runs once (Mounting Phase)');
  }, []);

  // 2. Update Phase => Runs Every Update/Re-Render depending on specific state

  // Dependency Array [state] + Callback without return
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log('This runs Every Update/Re-Render (Update Phase)');
  }, [count]);

  // 3. Unmounting Phase =>
  useEffect(() => {
    return () => {
      console.log('This runs Once before component removed from DOM (Unmounting Phase)');
    };
  }, []);

  // 4. Use with Precautions
  useEffect(() => {
    console.log('This runs Every Render');
  });

  // Using Fetch Logic
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // const response = await fetch('https://api.escuelajs.co/api/v1/users');
        // const data = await response.json();

        // DRY: Don't repeat Yourself
        // const response = await axios.get('https://api.escuelajs.co/api/v1/users');
        const response = await instance.get();
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleClick = async () => {
    const data = {
      email: 'hassan@example.com',
      password: 'IFPQ7x',
      name: 'Hassan',
      role: 'admin',
      avatar: 'https://test.com',
      creationAt: '2026-06-23T17:28:25.000Z',
      updatedAt: '2026-06-23T17:28:26.000Z',
    };

    // DRY: Don't repeat Yourself
    // const response = await axios.post('https://api.escuelajs.co/api/v1/users', data);
    const response = await instance.post('', data);

    console.log(response.data);
  };

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
      <Button onClick={() => setCount1(count1 + 1)}>Another Count: {count1}</Button>
      <Button variant='outline' onClick={handleClick}>
        Post
      </Button>

      <div>{error && <p>{error}</p>}</div>
      <div>{loading && <p>..... loading</p>}</div>

      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4 m-5'>
        {data.map((user) => (
          // <Link to={`users/${user.id}`}>
          <Link to={`/users/${user.id}`}>
            <Card size='sm' className='mx-auto w-full max-w-sm' key={user.id}>
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>This user is {user.role}.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Email: {user.email}</p>
                <p>Creation At: {user.creationAt}</p>
                <p>Updated At: {user.updatedAt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
