import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/greetings/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getMessage()); }, [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
      <p>title</p>
    </div>
  );
};
export default Greeting;
