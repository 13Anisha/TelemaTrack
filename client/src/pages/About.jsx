// import React from 'react';
// import '../pages/AboutStyle.css'; // Import CSS styles

// const About = () => {
//   return (
//     <>
//       <div className=" h-2/5">
//         <video autoPlay loop muted  className="w-full">
//           <source src="Fleet_Management.mp4" type="video/mp4" />
//         </video>
//       </div>


//       <div className="row">
//         <div className="imgWrapper">
//           <img src="https://www.merchantsfleet.com/wp-content/uploads/2020/09/Merchant-Fleet-Management.jpg" alt="AboutImg"  />
//         </div>

//         <div className='contentWrapper'>
//           <div className="content">
//             <span className="textWrapper">
//               <span>About Us</span>
//             </span>

//             <h2>Welcome to TelemaTrack</h2>
//             <p>TelemaTrack is your all-in-one solution for smart fleet management. We’re on a mission to transform how you monitor, manage, and maintain your fleet. Our web app is crafted to equip businesses with the insights and tools they need to optimize operations, minimize downtime, and extend the life of their assets.






// </p>


//           </div>
//         </div>
//       </div>





      
//     </>

    
//   );
// };

// export default About;




import React from 'react';

const About = () => {
  return (
    <>
      <div className="h-2/5">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="Fleet_Management.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Grid Layout for Image and About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src="https://www.merchantsfleet.com/wp-content/uploads/2020/09/Merchant-Fleet-Management.jpg"
              alt="AboutImg"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* About Us Section */}
          <div>
            <div className="mb-6">
              <span className="block text-2xl font-bold text-gray-700 mb-2">
                About Us
              </span>
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">Telema<span className='text-orange-500'>T</span>rack</h2>
              <p className="text-gray-600 leading-relaxed">
                TelemaTrack is a cutting-edge solution designed to revolutionize machine maintenance management through
                the power of generative AI and advanced image recognition technology. Our platform empowers technicians and
                maintenance teams to proactively identify and address potential equipment or component failures, ensuring
                optimal efficiency and reducing downtime for Caterpillar’s global customers.
              </p>
            </div>

            

            
          </div>


        </div>
      </div>

      <h3 className="text-3xl font-semibold text-gray-800 mb-4 ml-5 italic">Key Points</h3>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed ml-5">
              <li className="mb-3">
                <b className="text-gray-800">Machine Identification & Risk Assessment:</b> TelemaTrack categorizes machines based on unique
                identifiers, determining whether they are high-risk or low-maintenance.
              </li>
              <li className="mb-3">
                <b className="text-gray-800">Interactive Image Upload:</b> Technicians can upload images of machines for accurate identification,
                minimizing human error and enhancing reliability.
              </li>
              <li className="mb-3">
                <b className="text-gray-800">Generative AI Integration:</b> TelemaTrack categorizes machines based on unique identifiers,
                determining whether they are high-risk or low-maintenance.
              </li>
              <li className="mb-3">
                <b className="text-gray-800">Automated Alert System:</b> High-risk machines trigger automated alerts, while low-maintenance
                machines are monitored through a risk distribution graph for easy management.
              </li>
              <li className="mb-3">
                <b className="text-gray-800">Comprehensive Visualization:</b> TelemaTrack offers a clear and intuitive interface for monitoring
                risk assessments and maintenance needs, all within a streamlined user experience powered by Streamlit.
              </li>
            </ul>

            <h3 className="text-3xl font-semibold text-gray-800 mt-6 mb-4 ml-5 italic">Our Unique Selling Point</h3>
            <p className="text-gray-600 leading-relaxed ml-5 mb-8">
              TelemaTrack’s enhanced accuracy, driven by generative AI, significantly reduces manual errors and optimizes
              maintenance management, ensuring your machinery operates at peak performance.
            </p>
    </>
  );
};

export default About;
