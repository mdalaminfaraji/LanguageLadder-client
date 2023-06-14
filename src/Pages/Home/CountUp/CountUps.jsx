import CountUp from 'react-countup';
import React from 'react';

const CountUps = () => {
    return (
        <>
        <h1 className='text-4xl text-center mt-10 '>AT A GLANCE</h1>
        <p className='divider text-green-800 w-1/2 mx-auto text-5xl'>-</p>
          <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-6'>
        
        <div className='border-4 text-4xl font-bold p-10 text-green-800 mx-10 rounded-xl'>
            <p>Our Students </p>
            <p className='divider text-green-800'>-</p>
            <CountUp 
               start={0} duration={10} end={4567} delay={0}
            
            >
            {({ countUpRef, start }) => (
                <div>                  
                <span ref={countUpRef} />
                <button onClick={start}></button>
                </div>
            )}
            </CountUp>
        </div>
        <div className='border-4 text-4xl font-bold p-10 text-green-800 mx-10 rounded-xl'>
            <p>Our Assistant </p>
            <p className='divider text-green-800'>-</p>
            <CountUp 
               start={0} duration={10} end={1456} delay={0}
            
            >
            {({ countUpRef, start }) => (
                <div>                  
                <span ref={countUpRef} />
                <button onClick={start}></button>
                </div>
            )}
            </CountUp>
        </div>
        <div className='border-4 text-4xl font-bold p-10 text-green-800 mx-10 rounded-xl'>
            <p>Our Teachers </p>
            <p className='divider text-green-800'>-</p>
            <CountUp 
               start={0}  duration={10} end={678} delay={0}
            
            >
            {({ countUpRef, start }) => (
                <div>                  
                <span ref={countUpRef} />
                <button onClick={start}></button>
                </div>
            )}
            </CountUp>
        </div>

        
        </div>
        </>
      
        
    );
};

export default CountUps;