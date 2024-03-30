'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutCar() {
  const router = useRouter(); 
  const { id } = router.query;

  const [loading, setLoading] = useState(true);
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/${id}`)
        .then(res => res.json())
        .then(data => {
          setCarData(data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>Car</h1>
      <p>ID: {id}</p>
      {carData && (
        <div>
          <p>Brand: {carData.brand}</p>
          <p>Model: {carData.model}</p>
        </div>
      )}
    </div>
  );
}
