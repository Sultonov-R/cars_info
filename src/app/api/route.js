import { NextResponse } from "next/server";

export async function GET() {
  const cars = [
    {
      id:1,
      brand: "Mercedes-Benz",
      model: "Citan",
      "car body": "van",
      color: "red",
      price: "10000$",
      year: 2010,
    },
    {
      id:2,
      brand: "Lexus",
      model: "GX",
      "car body": "4WD",
      color: "black",
      price: "50000$",
      year: 2020,
    },
    {
      id:3,
      brand: "Toyota",
      model: "RAV4",
      "car body": "crossover",
      color: "gray",
      price: "15000$",
      year: 2015,
    },
    {
      id:4,
      brand: "Hyundai",
      model: "Grand i10 Nios",
      "car body": "hatchback",
      color: "yellow",
      price: "30000$",
      year: 2018,
    },
    {
      id:5,
      brand: "Honda",
      model: "Civic",
      "car body": "sedan",
      color: "blue",
      price: "25000$",
      year: 2010,
    },
  ];
  return NextResponse.json({cars})
}


