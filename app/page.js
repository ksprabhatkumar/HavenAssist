"use client"
import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategorieList";
// import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BuisnessList";


export default function Home() {

  const [categoryList,setCategoryList]=useState([]);
  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    getCategoryList();
    getAllBusinessList();
  },[])


  const getCategoryList=()=>{
    // GlobalApi.getCategory().then(resp=>{
    //   setCategoryList(resp.categories);
    // })
    const sampleList = [
      {
        name: "Medical",
        icon: {
          url: "/icons/medical-icon.png"
        }
      },
      {
        name: "Legal",
        icon: {
          url: "/icons/legal-icon.png"
        }
      },
      {
        name: "Financial",
        icon: {
          url: "/icons/financial-icon.png"
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
          url: "/icons/education-icon.png"
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
    
    setCategoryList(sampleList); 

  }


  const getAllBusinessList=()=>{
    // GlobalApi.getAllBusinessList().then(resp=>{
    //   setBusinessList(resp.businessLists)
    // })
    const sampleBuisnessList = [
      {
        id: "1",
        name: "HealthCare Clinic",
        images: [
          {
            url: "/images/healthcare-clinic.jpg"
          }
        ],
        category: {
          name: "Medical"
        },
        contactPerson: "Dr. John Doe",
        address: "123 Health St, Wellness City"
      },
      {
        id: "2",
        name: "Legal Advisors Inc.",
        images: [
          {
            url: "/images/legal-advisors.jpg"
          }
        ],
        category: {
          name: "Legal"
        },
        contactPerson: "Jane Smith",
        address: "456 Justice Ave, Lawtown"
      },
      {
        id: "3",
        name: "FinServ Solutions",
        images: [
          {
            url: "/images/finserv-solutions.jpg"
          }
        ],
        category: {
          name: "Financial"
        },
        contactPerson: "Alice Johnson",
        address: "789 Finance Blvd, MoneyCity"
      },
      {
        id: "4",
        name: "Career Counseling Center",
        images: [
          {
            url: "/images/career-counseling.jpg"
          }
        ],
        category: {
          name: "Counseling"
        },
        contactPerson: "Robert Brown",
        address: "101 Advice St, Guidance Town"
      },
      {
        id: "5",
        name: "EduPro Academy",
        images: [
          {
            url: "/images/edupro-academy.jpg"
          }
        ],
        category: {
          name: "Education"
        },
        contactPerson: "Michael Green",
        address: "202 Learning Rd, Knowledge City"
      },
      {
        id: "6",
        name: "JobLink Employment Agency",
        images: [
          {
            url: "/images/joblink-agency.jpg"
          }
        ],
        category: {
          name: "Employment"
        },
        contactPerson: "Emily White",
        address: "303 Opportunity St, Career City"
      },
      {
        id: "7",
        name: "Safe Haven Housing",
        images: [
          {
            url: "/images/safe-haven-housing.jpg"
          }
        ],
        category: {
          name: "Housing"
        },
        contactPerson: "Chris Black",
        address: "404 Shelter Ln, HomeTown"
      },
      {
        id: "8",
        name: "TranspoPro Services",
        images: [
          {
            url: "/images/transpopro-services.jpg"
          }
        ],
        category: {
          name: "Transportation"
        },
        contactPerson: "Sarah Blue",
        address: "505 Mobility Ave, Transit City"
      }
    ];
    
    setBusinessList(sampleBuisnessList) 

  }
  return (
    <div>
      <Hero/>

      <CategoryList categoryList={categoryList} />
    
      <BusinessList businessList={businessList}
      title={'Popular Business'} />
    </div>
  );
}
