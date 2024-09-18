import React from 'react'

export default function Profile() {
  return (
    <div className="w-11/12 mx-auto relative mt-12 px-4 py-8 bg-primary rounded-xl text-white text-center border-2 border-lightBlue ">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center">
          <img src="/profile-image.png"  alt="Profile" />
        </div>
        <p className="font-semibold mt-9">Immotrust AG</p>
        <p className="mt-2 leading-6">Vertrauensvolle Immobilienberatung seit 2008.</p>
        <p className="mt-4 rounded-lg bg-primary-light px-3 py-2 lg:text-sm xl:text-base">Carlos Kuik - Eigentümer</p>
      </div>
  )
}
