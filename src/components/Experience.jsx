import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
let datas =  [

    {
        picture: "/Image/programminghero.png",
        name: "Programming Hero",
        duration: "6-months"
    },
    {
        picture: "/Image/creativeit.png",
        name: "Creative It",
        duration: "3-months"
    },
]




const Experience = () => {
    return (
        <div className='bg-gray-900'id='experience'>
           <div className=' bg-white bg-opacity-90 rounded-lg container mx-auto mt-20'>
           <h3 className='font-Roboto  text-5xl font-extrabold text-center pt-20 text-gray-900'>WORKED WITH</h3>
            <div className='flex  justify-between items-center '>
                <div>
                    {
                        datas.map((data) => (
                            <div  data-aos="fade-right"  key={data.anything} className='lg:flex lg:text-left text-center gap-6 items-center px-10 py-5 '>
                                <div>
                                <img  className='h-32 w-32 rounded-[100%] mt-5 lg:mx-0 mx-auto'  src={data.picture} alt="" />
                                </div>
                                <div>
                                <h2 className='font-Roboto text-3xl font-semibold text-gray-900'>{data.name}</h2>
                                <p className='font-Roboto text-2xl font-medium text-gray-900'>{data.duration}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <img  data-aos="fade-left"  src="/Image/experience.png" alt="" />
                </div>
            </div>
           </div>
        </div>
    );
};
function App() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
      });
    }, []);
  
    return (
      <div className="App">
        <Experience/>
      </div>
    );
  }
  

export default App;