import React from 'react';

interface Props {
  children: React.ReactNode;
}
export function MenuItem({ children }: Props) {
  return (
    <div className='group relative text-gray-500 flex justify-center align-middle py-3 hover:bg-gray-100 hover:text-platzi-1 rounded-r-lg cursor-pointer transition duration-200'>
      {children}
      <div className='absolute right-0 top-0 w-2 h-full rounded-r-lg group-hover:bg-platzi-1 transition duration-200'></div>
    </div>
  );
}
