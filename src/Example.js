import { useState } from 'react';
import Child from './example/Child';
import Button from './example/Button';

const Example = () => {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <Child number={count} />
      <Button onClick={changeCount} />
    </>
  );
};

export default Example;
