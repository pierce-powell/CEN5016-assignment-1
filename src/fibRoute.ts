// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import { Request, Response } from 'express';


export default (req : Request, res : Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
    let result: string; 
    result  = `fibonacci(${String(num)}) is ${fibN}`;

    if (fibN < 0) {
    result = `fibonacci(${String(num)}) is undefined`;
    }

  res.send(result);
};
