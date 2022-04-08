import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 gap-y-10 bg-gray-100 px-32 py-14 text-gray-600 md:grid-cols-4">
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It's a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Vieri</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
      </div>
    </div>
  )
}

export default Footer
