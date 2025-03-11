import React from 'react'

function Overview({book}) {
    const {
        book_title,
        person_name,
        person_name_ar,
        date,
        origin,
        subject,
        dimensions,
        preservation_status,
        
    } = book;
  return (
    <div className='bg-white p-4 sm:p-6'>
                    <h1 className='text-3xl font-bold mb-4'>{book_title}</h1>
                    <div className='my-4'>
                        <h1 className='font-semibold'>Author</h1>
                        <h2>{person_name} ({person_name_ar})</h2>
                    </div>
                    <div className='my-4'>
                        <p className='font-semibold'>Date</p>
                        <p>{date}</p>
                    </div>
                    <div className='my-4'>
                        <p className='font-semibold'>Origin</p>
                        <p>{origin}</p>
                    </div>
                    <div className='my-4'>
                        <p className='font-semibold'>Subject</p>
                        <p>{subject.join(", ")}</p>
                    </div>
                    <div className='my-4'>
                        <p className='font-semibold'>Dimensions</p>
                        <p>{dimensions}</p>
                    </div>
                    <div className='my-4'>
                        <p className='font-semibold'>Preservation Status:</p>
                        <p>{preservation_status}</p>
                    </div>
                </div>
  )
}

export default Overview