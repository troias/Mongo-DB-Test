import { MongoClient } from "mongodb";

import { createContext } from "react";

//connection string

export const uri = process.env.REACT_APP_MONGODB_URI as string;

console.log("uri", uri);

//conect to MongoDB

export const store = {
  name: "John",
  age: 30,
};

export const Context = createContext({});
