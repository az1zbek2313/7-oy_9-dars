import React from 'react'

function NotFound() {
  return (
    <div className='flex notfound'>
        <h1>
        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
        <p class="font-bold">Error Page</p>
        <p class="text-sm">Unfortunately, such a page does not exist.</p>
        <a href='/' class="font-bold">Return HOME PAGE.</a>
        </div>

        </h1>
    </div>
  )
}

export default NotFound