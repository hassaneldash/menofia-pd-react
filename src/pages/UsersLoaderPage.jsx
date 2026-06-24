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
import { Link, useLoaderData } from 'react-router';
import { instance } from '@/lib/axisoInstance';

export async function loader() {
  // DRY: Don't repeat Yourself
  // const response = await axios.get('https://api.escuelajs.co/api/v1/users');
  const response = await instance.get();
  return response.data;
}

export async function ErrorBoundary() {
  return <div>Couldn't Load Users Page</div>;
}

const UsersLoaderPage = () => {
  const users = useLoaderData();
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4 m-5'>
        {users.map((user) => (
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

export default UsersLoaderPage;
