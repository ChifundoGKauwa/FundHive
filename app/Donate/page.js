'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const presetAmounts = [500, 1000, 2000, 5000];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setShowOther(false);
    setCustomAmount('');
  };

  const handleOtherClick = () => {
    setSelectedAmount(null);
    setShowOther(true);
  };

  const getFinalAmount = () => {
    if (showOther) {
      return customAmount;
    }
    return selectedAmount;
  };

  const handleDonate = (e) => {
    e.preventDefault();
    const amount = getFinalAmount();
    if (!amount || !name || !email) return;
    setSuccess(true);
    setSelectedAmount(null);
    setCustomAmount('');
    setName('');
    setEmail('');
    setMessage('');
    setShowOther(false);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-50 py-6 px-2 md:py-10 md:px-4 place-items-center gap-2">
      <div className="w-full flex items-center justify-center order-1 md:order-none">
        <div className="relative w-full h-64 md:h-full max-w-md aspect-[3/4]">
          <Image 
            src={'/help2.jpg'} 
            alt='photo not found' 
            fill
            className="object-cover rounded-xl shadow-lg"
            sizes="(max-width: 768px) 400vw, 200px"
          />
        </div>
      </div>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 md:p-8 flex flex-col justify-center h-full">
        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-2 text-center">Support Our Cause</h1>
        <p className="text-gray-600 mb-6 text-center text-sm md:text-base">Your donation helps us make a difference. Every contribution counts!</p>
        <form onSubmit={handleDonate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Donation Amount (MWK)</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {presetAmounts.map((amt) => (
                <button
                  type="button"
                  key={amt}
                  className={`px-3 py-2 md:px-4 md:py-2 rounded-md border font-semibold transition-all ${selectedAmount === amt ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-orange-500 border-orange-500 hover:bg-orange-100'}`}
                  onClick={() => handleAmountClick(amt)}
                >
                  K{amt}
                </button>
              ))}
              <button
                type="button"
                className={`px-3 py-2 md:px-4 md:py-2 rounded-md border font-semibold transition-all ${showOther ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-orange-500 border-orange-500 hover:bg-orange-100'}`}
                onClick={handleOtherClick}
              >
                Other
              </button>
            </div>
            {showOther && (
              <input
                type="number"
                min="1"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={e => setCustomAmount(e.target.value)}
                required={showOther}
              />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message (optional)</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Donate
          </button>
          {success && <div className="text-green-600 text-center font-medium">Thank you for your donation!</div>}
        </form>
      </div>
    </div>
  );
}
