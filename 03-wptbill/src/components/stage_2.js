import React, {useContext} from 'react';

import {MyContext} from '../context';

const Stage2 = () => {
    const context = useContext(MyContext);
    return (
        <>
            <div className='flex flex-col justify-center items-center '>
                <h3 className='text-blue-600 text-xl'>The Looser is:</h3>
                <div className='text-red-800 text-5xl'>{context.state.result}</div>
            </div>
            <div className='absolute bottom-4 right-4 flex justify-between'>
                <button className='action_button py-4 px-6 m-2 bg-red-600 text-white font-bold border rounded border-solid cursor-pointer focus:outline-none active:scale-[0.98] block' onClick={() => context.startOver()}>
                    Start Over
                </button>
                <button className='action_button py-4 px-6 m-2 bg-red-600 text-white font-bold border rounded border-solid cursor-pointer focus:outline-none active:scale-[0.98] block' onClick={() => context.generateLooser()}>
                    Get New Looser
                </button>
            </div>
        </>
    );
};

export default Stage2;
