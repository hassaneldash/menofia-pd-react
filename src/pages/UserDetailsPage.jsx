import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { instance } from '@/lib/axisoInstance';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetailsPage = () => {
  const { id } = useParams();

  // Using Fetch Logic
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // const response = await fetch('https://api.escuelajs.co/api/v1/users');
        // const data = await response.json();

        // DRY: Don't repeat Yourself
        // const response = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`);
        const response = await instance.get(`${id}`);
        setUser(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);
  return (
    <>
      <div>{error && <p>{error}</p>}</div>
      <div>{loading && <p>..... loading</p>}</div>

      <div>
        {user && (
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
        )}
      </div>
    </>
  );
};

export default UserDetailsPage;
