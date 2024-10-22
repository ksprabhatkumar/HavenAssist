// app/api/categories/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const sampleList = [
    {
      name: "Medical",
      icon: {
        url: "@/public/assets/barbar.png"
      }
    },
    {
      name: "Legal",
      icon: {
        url: "@/public/assets/legal.png"
      }
    },
    {
      name: "Financial",
      icon: {
        url: "@/public/assets/legal.png"
      }
    },
    {
      name: "Counseling",
      icon: {
        url: "/icons/counseling-icon.png"
      }
    },
    {
      name: "Education",
      icon: {
        url: "@/public/assets/tutor.png"
      }
    },
    {
      name: "Employment",
      icon: {
        url: "/icons/employment-icon.png"
      }
    },
    {
      name: "Housing",
      icon: {
        url: "/icons/housing-icon.png"
      }
    },
    {
      name: "Transportation",
      icon: {
        url: "/icons/transportation-icon.png"
      }
    },
    {
      name: "Food",
      icon: {
        url: "/icons/food-icon.png"
      }
    },
    {
      name: "Clothing",
      icon: {
        url: "/icons/clothing-icon.png"
      }
    },
    {
      name: "Utilities",
      icon: {
        url: "/icons/utilities-icon.png"
      }
    },
    {
      name: "Other",
      icon: {
        url: "/icons/other-icon.png"
      }
    }
  ];

  return NextResponse.json(sampleList);
}
