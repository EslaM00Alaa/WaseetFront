// import React, { useState } from 'react';

// const Rent = () => {
//    const [curPage, setCurPage] = useState(0); 
//   return (
//     <div className='rent'>
//       <div className="container">
//       <div className="filterBtns">
//             <button onClick={()=>setCurPage(0)}  className={`${curPage ==0 ?"active":""}`}>مالك</button>
//             <button onClick={()=>setCurPage(0)} className={`${curPage ==1 ?"active":""}`}>مستاجر</button>
//         </div>
      
//       {}
//       </div>
      

//     </div>
//   );
// };

// export default Rent;
import React, { useState } from 'react';
import "./rent.css"
import Renter from './renter';
import Owner from './owner';
const Rent = () => {
const [curPage, setCurPage] = useState(0); 
  return (
    <div className='rentback'>
       <div className="container">
       <div className="filterBtns">
             <button onClick={()=>setCurPage(0)}  className={`${curPage ==0 ?"curbtn":""}`}>مالك</button>
             <button onClick={()=>setCurPage(1)} className={`${curPage ==1 ?"curbtn":""}`}>مستاجر</button>
        </div>
        <div className="rentPage">   
       { curPage==1 ? <Renter/> : <Owner/>}
       </div>
   </div>
    </div>
  
  );
};

export default Rent;