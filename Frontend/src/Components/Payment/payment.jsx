import React from 'react'
import "./payment.css";
import { DatePicker } from 'antd';
import {Link} from "react-scroll"
import {useState} from "react"
import moment from "moment"
const{RangePicker} = DatePicker


function Payment() {
const[dates,setDates] = useState([])
console.log(dates)

        return (
        <>
        
     <div className='left_head'>
        <div>
              <div className='villa_cont'>
                        <img 
                        className='villapic'width={700} 
                         src="data:image/jpeg;base64,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"
                         />
                         </div>
               
                <div className='villaDetails'>
                        <h1>Villa On The Hill In Candolim </h1>
                        <p>Candolim, Goa, India | Candolim</p>
                        <h5>Rated 4.5/5 By 4 Travelers </h5>
                </div>
                </div>

               

     </div>
     <div className='boxes'>
        <div><p>VILLA</p></div>
        <div><p>4 BEDROOMS</p></div>
        <div><p>11 MAX GUESTS</p></div>
        <div><p>WIFI</p></div>
        <div><p>KITCHEN</p></div>
        <div><p>AC</p></div>
        <div><p>PETS ALLOWED</p></div>
     </div>
      <div className='form'>
                        <h4 className='start'>Starting</h4>
                        <h1 className='rupie'> ₹9742  </h1>
                        <p className='pernight'>per night</p>
                        <form className='form2'>
                                <RangePicker
                                onChange={(values)=>{
                                        setDates(values.map(item=>{
                                                return moment(item).format('DD-MM-YYYY')
                                        }))    
                                        
                                       

                                }}
                                className='date'/>
                               
                                
                                <input placeholder='1 guest' 
                                 className='guest'/>
                                 <p className='rate'>Rateplan: No meals provided (EuropeaPlan)</p>
                                <button className='book'>Request to book</button>
                        </form>
                        

                
        </div>
        <div className='container2'>
                
               
                <div >
                        <Link  to="overview" spy={true} smooth={true} offset={50} duration={500}>
               OVERVIEW
        </Link>
      
        </div>
               
                
                <div>MAP</div>
                <div>
                <Link  to="policy" spy={true} smooth={true} offset={50} duration={500}>
                POLICIES & FEES
        </Link> 
                        </div>
                <div >
                        <Link  to="review" spy={true} smooth={true} offset={50} duration={500}>
                REVIEWS
        </Link>
        </div>
                </div>
                <div id="overview" className='overview'>
Located on a quiet hilltop, away from the hustle and bustle of the tourist areas, yet close enough to enjoy the trimmings of beaches, shopping, tours, restaurants etc. It is a 4 bed villa, all the rooms air conditioned with ceiling fans and en-suite bathrooms with showers. A fully functional kitchen with kettle, gas hob, fridge freezer, utensils and crockery and cutlery.

The villa has great views of the Candolim Valley and the Arabian sea from the roof top terrace and large window of the Master bedroom. There is also a 6 place dining table and a large lounge area to relax in. There is also a large basement which in the near future will have a pool/billiards table. Bed linen and towels 

                </div>
                <h1  id="policy"className='policy1'>Policies & Fees</h1>
                <h4 className='policyh4'>Default Cancelation Policy</h4>
                <div className="policies">
                      
                       
                     
                        <div>
                        <h4>Stringent:</h4>
                        <p> No charges will be levied if booking is canceled 61 days prior to check-in. If cancellation is done between 30 to 60 days prior to check-in, 50% of the total booking amount will be charged. Post that, there will be no refund. </p>
                        </div>
                        <div>
                                
<h4>House Rules</h4>

<p>Loud Music not allowed. Pets not allowed. Smoking inside Property not allowed. No Sex Workers/Call girls allowed on the premises.</p>

                        </div>
                        <div>
<h4>Cleaning Fee</h4>

<p>Cleaning Fee INR 1000.00 Fixed Amount Per Stay</p>
</div>
                        <div>
                                
<h4>Security Deposit</h4>

<p>Security Deposit INR 1000.00 Fixed Amount Per Stay</p>

                        </div>
                        
                </div>
                
                <div id="review" className="review1">Reviews</div>
                <div className='review'>
                <div >
                        <h2>Wonderful Stay!! </h2>
                        <p>
                        Our stay was very comfortable & nice. The caretakers of the property also took good care of us. Really nice property.
                        </p>

                </div>
                <div>
                        <h2> In short Stay was good </h2>
                        <p>
                        In short Stay was good
                        </p>
                </div>
                <div>
                        <h2>Awesome Place.. Awesome Service </h2>
                        <p>
                        It was my second stay at CasaMillers , like the previous one this one was awesome too.
Mohan , the caretaker was available for almost all the assistance we needed.
looking forward to visit again. 
                        </p>
                </div>
                <div>
                        <h2>Thoroughly enjoyed! </h2>
                        <p>
                        Villa was nice, comfortable, well maintained and privacy was there. Only concern was about the security, as its in the isolated area, by evening the area gets dark so suggest if there was a security personal at the villa for people to feel safe. However, We thoroughly enjoyed our stay at Casa Millers.
                        </p>
                </div>
                </div>
        
        </>
  )
}

export default Payment