"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

interface Data {
  id: number;
  title: string;
  body: string;
}
export default function WhatIsTypescriptPage() {
  const [data, setData] = useState<Data[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const myPlusFunction = (a: number, b: number): number => {
    return a + b;
    };

    const result = myPlusFunction(5, 10);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header
        title="What is TypeScript?"
        description="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
      />
      <p>
        It offers static typing, interfaces, and other features to help
        developers write more robust code.
      </p>
      <p>My Result: {result}</p>
      <h3 className="text-3xl"></h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
