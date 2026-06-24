import { useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field';
import { CircleFadingArrowUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '../components/ui/input';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link, NavLink, useNavigate } from 'react-router';
import AboutPage from './AboutPage';

const HomePage = () => {
  // let name = 'Hassan';
  // const handleClick = () => {
  //   name = 'Hassan ELDash';
  //   console.log(name);
  // };

  // Reactive Variable => state (Immutable)

  // React Hooks: Special Built-in Functions add features (Class-based)
  // 📖 Rule: at Top Level (Before Return + Outside any condition - inside Component)

  // Example of Hooks:
  // useState()

  // const [stateName, setStateName] = useState(initialValue);
  const [firstname, setFirstname] = useState('Alaa');

  const [count, setCount] = useState(0);

  const handleClick = () => {
    // firstname = 'Hassan ELDash';
    // console.log(firstname);
    setFirstname('Hassan ELDash');
  };

  // List Rendering
  const [fruits, setFruits] = useState([
    'Passion Fruit',
    'Strawberry',
    'Banana',
    'Watermelon',
  ]);

  const [addedFruit, setAddedFruit] = useState('');

  const addedFruitRef = useRef();

  const [boolValue, setBoolValue] = useState(true);

  const [users, setUsers] = useState([
    {
      id: 1,
      email: 'john@mail.com',
      password: 'changeme',
      name: 'Jhon',
      role: 'customer',
      avatar: 'https://i.imgur.com/LDOO4Qs.jpg',
      creationAt: '2026-06-12T23:13:07.000Z',
      updatedAt: '2026-06-12T23:13:07.000Z',
    },
    {
      id: 2,
      email: 'maria@mail.com',
      password: '12345',
      name: 'Maria',
      role: 'customer',
      avatar: 'https://i.imgur.com/DTfowdu.jpg',
      creationAt: '2026-06-12T23:13:07.000Z',
      updatedAt: '2026-06-12T23:13:07.000Z',
    },
    {
      id: 3,
      email: 'admin@mail.com',
      password: 'admin123',
      name: 'Admin',
      role: 'admin',
      avatar: 'https://i.imgur.com/yhW6Yw1.jpg',
      creationAt: '2026-06-12T23:13:07.000Z',
      updatedAt: '2026-06-12T23:13:07.000Z',
    },
    {
      id: 4,
      email: 'aa@aa.co',
      password: '12345',
      name: 'Aniket',
      role: 'customer',
      avatar: 'https://i.imgur.com/yhW6Yw1.jpg',
      creationAt: '2026-06-13T01:53:31.000Z',
      updatedAt: '2026-06-13T01:53:31.000Z',
    },
    {
      id: 5,
      email: 't@t.cm',
      password: '44444',
      name: 't',
      role: 'customer',
      avatar: 'https://i.imgur.com/yhW6Yw1.jpg',
      creationAt: '2026-06-13T01:56:24.000Z',
      updatedAt: '2026-06-13T01:56:24.000Z',
    },
    {
      id: 6,
      email: 'aa@aa.com',
      password: '44444',
      name: 'Aniket',
      role: 'customer',
      avatar: 'https://i.imgur.com/yhW6Yw1.jpg',
      creationAt: '2026-06-13T02:00:48.000Z',
      updatedAt: '2026-06-13T02:00:48.000Z',
    },
    {
      id: 7,
      email: 'customer@test.com',
      password: 'customer123',
      name: 'customer',
      role: 'customer',
      avatar: 'https://i.imgur.com/LDOO4Qs.jpg',
      creationAt: '2026-06-13T02:03:44.000Z',
      updatedAt: '2026-06-13T02:03:44.000Z',
    },
    {
      id: 8,
      email: 'aa@aa.com',
      password: '1234a',
      name: 'aa',
      role: 'customer',
      avatar: 'https://i.imgur.com/yhW6Yw1.jpg',
      creationAt: '2026-06-13T02:06:20.000Z',
      updatedAt: '2026-06-13T02:06:20.000Z',
    },
    {
      id: 9,
      email: 'aa@aa.com',
      password: '12345',
      name: 'aaa',
      role: 'customer',
      avatar: 'https://i.imgur.com/yhW6Yw1.jpg',
      creationAt: '2026-06-13T02:10:46.000Z',
      updatedAt: '2026-06-13T02:10:46.000Z',
    },
  ]);

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleNavigation = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <AboutPage name='Hassan ELDash' age={34} firstname={firstname} />
      <Button variant='outline' size='icon' onClick={handleClick}>
        <CircleFadingArrowUpIcon />
      </Button>
      
      <Separator className='my-4' />
      <Button onClick={handleNavigation}>Navigate</Button>
      <p>Is Logged In ? {isLoggedIn ? '✅' : '❌'}</p>
      <Button onClick={() => setIsLoggedIn(!isLoggedIn)}>Change Login State</Button>

      <Separator className='my-4' />

      <p className='text-3xl font-bold underline'>Hello Menofia PD</p>
      <Accordion type='single' collapsible defaultValue='item-1'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator className='my-4' />

      <p>{firstname}</p>
      <Button variant='outline' size='icon' onClick={handleClick}>
        <CircleFadingArrowUpIcon />
      </Button>
      <Button
        onClick={() => {
          // setCount(count + 1);
          // setCount(count + 1);
          // setCount(count + 1);
          // setCount(count + 1);

          // This is for Multiple Operations
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}>
        Count: {count}
      </Button>

      <Separator className='my-4' />

      <div>
        {fruits.map((value, index) => (
          <div key={index}>
            <p>{value}</p>
          </div>
        ))}
      </div>
      {/* Don't Try This at Home */}
      <Button
        variant='destructive'
        onClick={() => {
          setFruits((prev) => prev.push('Orange'));
        }}>
        Error Adding to Immutable State
      </Button>
      <Button
        variant='outline'
        onClick={() => {
          setFruits((prev) => {
            const newArr = [...prev];
            newArr.push('Orange');
            return newArr;
          });
        }}>
        1st Correct to Add
      </Button>
      {/* 
      Event Phases:
        Capturing Phase
        Target
        Bubbling
      */}
      <Button
        variant='outline'
        onClick={(e) => {
          console.log(e);
          setFruits((prev) => [...prev, 'Orange']);
        }}>
        2nd Correct to Add
      </Button>

      <Separator className='my-4' />

      {/* Controlled */}
      <Field>
        <FieldLabel htmlFor='name'>Fruit Name</FieldLabel>
        <Input
          id='name'
          type='text'
          placeholder='Please, enter fruit name'
          onChange={(e) => {
            console.log(e.target.value);
            setAddedFruit(e.target.value);
          }}
        />
        <FieldDescription>Adding Fruit Name from Controlled input</FieldDescription>
      </Field>
      <Button
        variant='outline'
        onClick={(e) => {
          console.log(e);
          setFruits((prev) => [...prev, addedFruit]);
        }}>
        3rd Add (Controlled Field)
      </Button>
      <Button
        variant='destructive'
        onClick={(e) => {
          setFruits((prev) => {
            const newArr = prev.filter((fruit) => fruit != e.target.value);
            return newArr;
          });
        }}>
        Delete (Controlled Field)
      </Button>

      <Separator className='my-4' />

      {/* Uncontrolled */}
      <Field>
        <FieldLabel htmlFor='name'>Fruit Name</FieldLabel>
        <Input
          id='name'
          type='text'
          placeholder='Please, enter fruit name'
          ref={addedFruitRef}
        />
        <FieldDescription>Adding Fruit Name from Controlled input</FieldDescription>
      </Field>
      <Button
        variant='outline'
        onClick={(e) => {
          console.log(e);
          setFruits((prev) => [...prev, addedFruitRef.current.value]);
        }}>
        4th Add (Uncontrolled Field)
      </Button>
      <Button
        variant='destructive'
        onClick={() => {
          setFruits((prev) => {
            const newArr = prev.filter((fruit) => fruit != addedFruitRef.current.value);
            return newArr;
          });
        }}>
        Delete (Uncontrolled Field)
      </Button>

      <Separator className='my-4' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4'>
        {users.map((user) => (
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
        ))}
      </div>

      <Separator className='my-4' />

      {/* Conditional Rendering */}
      <div className='text-center'>{boolValue && <p>Hello this is true</p>}</div>
      <Separator className='my-4' />
      <div>{boolValue ? <p>This is True</p> : <p>This is False</p>}</div>
      <Separator className='my-4' />
      <Button
        onClick={() => {
          setBoolValue(!boolValue);
        }}>
        Click to Show/Hide
      </Button>
      <p>Falsy Values: false, 0, -0, 0n, NaN, "", undefined, null</p>

      <div className='grid place-items-center'>
        <div className='bg-blue-500 p-6 text-white rounded-lg'>Centered Div</div>
      </div>
    </>
  );
};

export default HomePage;

// https://ui.shadcn.com/docs/installation/vite#existing-vite-project
