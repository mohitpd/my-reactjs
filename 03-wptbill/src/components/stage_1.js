import React, {useContext, useRef, useState} from 'react';
import {MyContext} from '../context';

const Stage1 = () => {
    const textInput = useRef();
    const context = useContext(MyContext);
    const [error, setError] = useState([false, '']);

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        const validate = validateInput(value);
        if (validate) {
            // Form is Valid.. Add Player
            setError([false, '']);
            context.addPlayer(value);

            textInput.current.value = '';
        }
    };

    const validateInput = (value) => {
        if (value === '') {
            setError([true, 'Sorry You need to add something']);
            return false;
        }
        if (value.length <= 2) {
            setError([true, 'Sorry You need 3 char atleast']);
            return false;
        }
        return true;
    };
    console.log(context);

    return (
        <div className='m-auto max-w-xl'>
            <form onSubmit={handleSubmit} className='w-80 mt-4'>
                <input className='group w-full  py-2 px-1 m-0' placeholder='Add a player name' name='player' ref={textInput}></input>
                {error[0] ? <div className='w-full bg-pink-300 text-pink-900 py-2 pl-2 rounded my-2 mx-0'>{error[1]}</div> : null}
                <button className='bg-blue-600 text-white p-1 m-1 border-blue-800 font-bold border rounded border-solid cursor-pointer focus:outline-none active:scale-[0.98] block' type='submit'>
                    Add player
                </button>
            </form>
            {context.state.players && context.state.players.length > 0 ? (
                <>
                    <hr className='w-full' />
                    <div className='w-full border px-0  border-solid border-gray-200 rounded-md divide-y divide-x-0 divide-solid divide-gray-200'>
                        {context.state.players.map((item, idx) => (
                            <div key={idx} className='pl-3 pr-4 py-3 m-0 flex items-center flex-1 justify-between text-sm'>
                                {item}
                                <span className='bg-blue-600 text-white rounded border w-4 h-4 justify-center text-center items-center flex cursor-pointer ' onClick={() => context.removePlayer(idx)}>
                                    x
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className='absolute right-4 bottom-4 '>
                        <button className='bg-pink-600 text-white py-3 px-6 m-1 border-blue-800 font-bold border rounded border-solid cursor-pointer focus:outline-none active:scale-[0.98] block' onClick={() => context.next()}>
                            Next
                        </button>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Stage1;
