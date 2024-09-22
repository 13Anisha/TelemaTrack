// import React, { useState } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import "../pages/Home.css";
// import { useNavigate } from 'react-router-dom';
// import { Card } from "flowbite-react";
// import { Carousel } from "flowbite-react";

// export default function Home() {
//   const navigate = useNavigate();
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [fadeIn, setFadeIn] = useState(true);

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   const handleCardClick = (cardContent) => {
//     setSelectedCard(cardContent);
//   };

//   const closeModal = () => {
//     setSelectedCard(null);
//   };

//   const goToGoogle = () => {
//     window.open('https://www.google.com', '_blank');
//   };

//   return (
//     <div className="home-container">
//       <div className="relative video-section">
//         <video autoPlay loop muted className="w-full h-auto">
//           <source src="/Fleet_Management.mp4" type="video/mp4" />
//         </video>  

//         <button className="get-started-button flex items-center justify-center" onClick={() => handleNavigate('/signup')}>
//           Get Started
//           <FaArrowRight className="ml-2 w-4" />
//         </button>
//       </div>


//       <div
//         className={`telematics-data-section ${fadeIn ? 'fade-in' : ''} flex flex-col items-center justify-center mt-8 mb-12 text-center`}
//       >
//         <h1 className="text-4xl font-bold text-gray-800">
//           Turn telematics data into actionable insights
//         </h1>
//         <p className="text-lg text-gray-600 mt-4">
//           Visionlink is a suite of digital tools that delivers actionable insights to help take the guesswork out of fleet management.
//         </p>
//       </div>

      




      

//       <h2 className='flex flex-row justify-center items-center text-gray-800 text-3xl font-bold italic mt-4 md:text-2xl sm:text-xl'>Our Services</h2>
//       <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        
//         <Card className="max-w-sm cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg" onClick={() => handleCardClick({
//           title: 'Fleet Management Challenges',
//           image: 'https://www.trinetrawireless.com/wp-content/uploads/2021/03/8-key-challenges-that-Fleet-Managers-have-to-face.jpg',
//           description: 'Discover the key challenges that fleet managers face and how to overcome them.',
//         })}>
//           <img
//             src="https://www.trinetrawireless.com/wp-content/uploads/2021/03/8-key-challenges-that-Fleet-Managers-have-to-face.jpg"
//             alt="Fleet Management"
//             className="w-full h-auto"
//           />
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
//             Fleet Management Challenges
//           </h5>
//           <p className="font-normal text-gray-700 dark:text-gray-400">
//             Discover the key challenges that fleet managers face and how to overcome them.
//           </p>
//         </Card>

//         <Card className="max-w-sm cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg" onClick={() => handleCardClick({
//           title: 'Fleet Monitoring Solutions',
//           image: 'https://www.dispatchtrack.com/hubfs/multi%20stop%20route%20planning%20software.webp',
//           description: 'Learn about modern solutions for real-time fleet monitoring and management.',
//         })}>
//           <img
//             src="https://www.dispatchtrack.com/hubfs/multi%20stop%20route%20planning%20software.webp"
//             alt="Fleet Monitoring"
//             className="w-full h-auto"
//           />
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
//             Fleet Monitoring Solutions
//           </h5>
//           <p className="font-normal text-gray-700 dark:text-gray-400">
//             Learn about modern solutions for real-time fleet monitoring and management.
//           </p>
//         </Card>

//         <Card className="max-w-sm cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg" onClick={() => handleCardClick({
//           title: 'Technology Trends in Fleet',
//           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ikJsqJe3wo-ini2RX9nArUFOe2_gsecPwA&s',
//           description: 'Explore the latest technology trends that are shaping the future of fleet management.',
//         })}>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ikJsqJe3wo-ini2RX9nArUFOe2_gsecPwA&s"
//             alt="Technology Trends"
//             className="w-full h-auto"
//           />
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
//             Technology Trends in Fleet
//           </h5>
//           <p className="font-normal text-gray-700 dark:text-gray-400">
//             Explore the latest technology trends that are shaping the future of fleet management.
//           </p>
//         </Card>

//         <Card className="max-w-sm cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg" onClick={() => handleCardClick({
//           title: 'Optimizing Fleet Management',
//           image: 'https://flotillaiot.com/wp-content/uploads/2021/05/best-car-GPS-tracker.jpg',
//           description: 'Learn strategies and tips for optimizing fleet management for better efficiency and cost savings.',
//         })}>
//           <img
//             src="https://flotillaiot.com/wp-content/uploads/2021/05/best-car-GPS-tracker.jpg"
//             alt="Optimizing Fleet Management"
//             className="w-full h-auto"
//           />
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
//             Optimizing Fleet Management
//           </h5>
//           <p className="font-normal text-gray-700 dark:text-gray-400">
//             Learn strategies and tips for optimizing fleet management for better efficiency and cost savings.
//           </p>
//         </Card>
//       </div>

//       {selectedCard && (
//         <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
//           <div className="modal-content relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
//             <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl" onClick={closeModal}>
//               &times;
//             </button>
//             <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-auto mb-4" />
//             <h2 className="text-2xl font-bold mb-2">{selectedCard.title}</h2>
//             <p className="text-gray-700 mb-4">{selectedCard.description}</p>
//             <button 
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               onClick={goToGoogle}
//             >
//               View
//             </button>
//           </div>
//         </div>
//       )}


//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10 ">
//           <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
//             <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//               Slide 1
//             </div>
//             <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//               Slide 2
//             </div>
//             <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//               Slide 3
//             </div>
//           </Carousel>
//         </div>



//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "../pages/Home.css";
import { useNavigate } from 'react-router-dom';
import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";

export default function Home() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [fadeIn, setFadeIn] = useState(false); // Initially set to false

  useEffect(() => {
    // Set fadeIn to true when component mounts
    setFadeIn(true);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleCardClick = (cardContent) => {
    setSelectedCard(cardContent);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const goToGoogle = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className="home-container">
      <div className="relative video-section">
        <video autoPlay loop muted className="w-full h-auto">
          <source src="/Fleet_Management.mp4" type="video/mp4" />
        </video>  

        <button className="get-started-button flex items-center justify-center" onClick={() => handleNavigate('/signup')}>
          Get Started
          <FaArrowRight className="ml-2 w-4" />
        </button>
      </div>

      <div
        className={`telematics-data-section ${fadeIn ? 'fade-in' : ''} flex flex-col items-center justify-center mt-8 mb-12 text-center`}
      >
        <h1 className="text-4xl font-bold text-gray-800">
        Transform telematics data into valuable insights for better decision-making.
        </h1>
        <p className="text-lg text-gray-600 mt-4">
        A comprehensive suite of digital tools designed to provide actionable insights, eliminating uncertainty and streamlining fleet management.
        </p>
      </div>

      <h2 className='flex flex-row justify-center items-center text-gray-700 text-3xl italic mb-8 font-bold dark:text-white'>Our Services</h2>
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      <Card className="max-w-sm cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg" onClick={() => handleCardClick({
          title: 'Fleet Management Challenges',
          image: 'https://www.trinetrawireless.com/wp-content/uploads/2021/03/8-key-challenges-that-Fleet-Managers-have-to-face.jpg',
          description: 'Discover the key challenges that fleet managers face and how to overcome them.',
        })}>
          <img
            src="https://www.trinetrawireless.com/wp-content/uploads/2021/03/8-key-challenges-that-Fleet-Managers-have-to-face.jpg"
            alt="Fleet Management"
            className="w-full h-auto"
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
            Fleet Management Challenges
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Discover the key challenges that fleet managers face and how to overcome them.
          </p>
        </Card>

        <Card className="max-w-sm cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg" onClick={() => handleCardClick({
          title: 'Fleet Monitoring Solutions',
          image: 'https://www.dispatchtrack.com/hubfs/multi%20stop%20route%20planning%20software.webp',
          description: 'Learn about modern solutions for real-time fleet monitoring and management.',
        })}>
          <img
            src="https://www.dispatchtrack.com/hubfs/multi%20stop%20route%20planning%20software.webp"
            alt="Fleet Monitoring"
            className="w-full h-auto"
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
            Fleet Monitoring Solutions
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Learn about modern solutions for real-time fleet monitoring and management.
          </p>
        </Card>

        <Card className="max-w-sm cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg" onClick={() => handleCardClick({
          title: 'Technology Trends in Fleet',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ikJsqJe3wo-ini2RX9nArUFOe2_gsecPwA&s',
          description: 'Explore the latest technology trends that are shaping the future of fleet management.',
        })}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ikJsqJe3wo-ini2RX9nArUFOe2_gsecPwA&s"
            alt="Technology Trends"
            className="w-full h-auto"
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
            Technology Trends in Fleet
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Explore the latest technology trends that are shaping the future of fleet management.
          </p>
        </Card>

        <Card className="max-w-sm cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg" onClick={() => handleCardClick({
          title: 'Optimizing Fleet Management',
          image: '/Screenshot 2024-08-11 112709.png',
          description: 'Learn strategies and tips for optimizing fleet management for better efficiency and cost savings.',
        })}>
          <img
            src="/Screenshot 2024-08-11 112709.png"
            alt="Optimizing Fleet Management"
            className="w-full h-auto"
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
            Optimizing Fleet Management
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Learn strategies and tips for optimizing fleet management for better efficiency and cost savings.
          </p>
        </Card>

        
      </div>

      {selectedCard && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="modal-content relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedCard.title}</h2>
            <p className="text-gray-700 mb-4">{selectedCard.description}</p>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={goToGoogle}
            >
              View
            </button>
          </div>
        </div>
      )}

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10 mb-24">
      <h2 className='flex flex-row justify-center items-center text-gray-700 text-3xl italic mb-8 font-bold dark:text-white'>
        Data Visualization: Interactive Graphs and Trends
      </h2>
        <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="https://templates.peakboard.com/Fleet-Management/Fleet-Management.png" alt="#" className='w-full h-auto' />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="https://i.pinimg.com/originals/b6/d2/e0/b6d2e08a51b1905fa879330a0e88abb0.png" alt="#"  className='w-full h-auto'/>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="https://flotillaiot.com/wp-content/uploads/2021/05/what-is-fleet-management-system.jpg" alt="#" className='w-full h-auto' />
          </div>
        </Carousel>
      </div>


      



    </div>
  );
}
