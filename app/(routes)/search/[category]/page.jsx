// "use client"
// import BusinessList from '@/app/_components/BuisnessList';
// import React, { useEffect, useState } from 'react'

// function BusinessByCategory({params}) {

//     const [businessList,setBusinessList]=useState([]);
//     useEffect(()=>{
//         console.log(params);
//         params&&getBusinessList()
//     },[params]);

//     const getBusinessList=()=>{
//         // GlobalApi.getBusinessByCategory(params.category)
//         // .then(resp=>{
//         //     setBusinessList(resp?.businessLists);
//         // })
//         setBusinessList(["Medical","Legal","Financial","Counseling","Education","Employment","Housing","Transportation","Food","Clothing","Utilities","Other"])
//     }

//   return (
//     <div>
//         <BusinessList title={params.category}
//         businessList={businessList} />
//     </div>
//   )
// }

// export default BusinessByCategory

"use client"
import BusinessList from '@/app/_components/BuisnessList';
import React, { useEffect, useState } from 'react';

function BusinessByCategory({ params }) {

    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        console.log(params);
        params && getBusinessList();
    }, [params]);

    const getBusinessList = () => {
        // Mock data for different categories
        const mockData = {
            Medical: [
                {
                    id: "1",
                    name: "HealthCare Clinic",
                    images: [{ url: "" }],
                    category: { name: "Medical" },
                    contactPerson: "Dr. John Doe",
                    address: "123 Health St, Wellness City"
                },
                {
                    id: "2",
                    name: "MediPlus Pharmacy",
                    images: [{ url: "/images/mediplus-pharmacy.jpg" }],
                    category: { name: "Medical" },
                    contactPerson: "Pharmacist Jane Doe",
                    address: "456 Pharma Ave, MediTown"
                }
            ],
            Legal: [
                {
                    id: "3",
                    name: "Legal Advisors Inc.",
                    images: [{ url: "/images/legal-advisors.jpg" }],
                    category: { name: "Legal" },
                    contactPerson: "Jane Smith",
                    address: "789 Justice Blvd, LawTown"
                },
                {
                    id: "4",
                    name: "Law & Order Associates",
                    images: [{ url: "/images/law-order.jpg" }],
                    category: { name: "Legal" },
                    contactPerson: "Attorney John Smith",
                    address: "321 Legal Ln, Justice City"
                }
            ]
            // Add more categories and businesses as needed
        };

        setBusinessList(mockData[params.category] || []);
    };

    return (
        <div>
            <BusinessList
                title={params.category}
                businessList={businessList}
            />
        </div>
    );
}

export default BusinessByCategory;

