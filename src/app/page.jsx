'use client'
import styles from '../app/page.module.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cars, setCars] = useState([]);
  const router = useRouter(); 

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick(id){
    console.log(id);
    router.push(`/about/[id]`);
  }

  return (
    <>
      <div className={styles.container}>
        <h1>List of cars</h1>
        <ul>
          {cars.map((car, index) => (
            <li key={index}>
              <a onClick={() => handleClick(car.id)}>{car.brand}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
