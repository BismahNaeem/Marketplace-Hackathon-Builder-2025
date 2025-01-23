import React from 'react'
import Payment from '../components/payment'
import Billing from '../components/billing'
import PaymentsMethod from '../components/paymentsmethod'
import Confirmation from '../components/confirmation'

const page = () => {
  return (
    < div className='bg-gray-200'>
    <div className='pt-4 rounded-lg'><Payment /></div>
    <div className='pt-4 rounded-lg'><Billing /></div>
    
    <div className='pt-4 pb-4 rounded-lg'><PaymentsMethod /></div>
    <div className='pt-8 pb-4 rounded-lg'><Confirmation /></div>
    
    </div>
  )
}

export default page