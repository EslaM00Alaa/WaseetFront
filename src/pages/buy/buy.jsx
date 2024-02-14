import { useState } from "react";
import "./buy.css"
import buyApi from "../../api/postBuy"
const Buy = () => {
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [houseDetails, sethouseDetails] = useState("");
    const [addressDetails, setaddressDetails] = useState("");
    const [price, setPrice] = useState(0);
  return (
    <div className='salepage'>
    
    <div className="content">
        <div className="headForm">
            <div className="line">
            <i className="bi bi-info-circle"></i>
        <p>
يرجى التأكد من إدخال البيانات بشكل صحيح قبل الاستمرار. </p> 
            </div>
       <div className="line">
       <i className="bi bi-info-circle"></i>
<p>  البيانات الصحيحة تسهم في تحقيق نتائج دقيقة وتجربة مرضية.
</p>
       </div>

        </div>

<div className="form">

<label htmlFor="name">الاسم</label>
<input onChange={(e)=>setname(e.target.value)} type="text" id="name" placeholder="ادخل الاسم ..." />

<label htmlFor="ph"> رقم الهاتف</label>
<input onChange={(e)=>setphone(e.target.value)} type="text" id="ph" placeholder="ادخل رقم الهاتف ..." />

<label htmlFor="hd"> تفاصيل عن ما تريد  </label>
<textarea onChange={(e)=>sethouseDetails(e.target.value)} placeholder="ادخل تفاصيل العقار (مساحة - دور - تشطيب)" type="text" id="hd" />

<label htmlFor="ad">  اماكن تفضلها </label>
<textarea onChange={(e)=>setaddressDetails(e.target.value)} placeholder="(الحي الاول - عدنان -وسط البلد)" type="text" id="ad" />

<label htmlFor="pr"> الميزانيه المتاحه  </label>
<input onChange={(e)=>setPrice(e.target.value)} placeholder=" كميه الاموال المتاحه" type="number" id="pr" />

<button onClick={()=>buyApi(name, phone, houseDetails ,addressDetails ,price )} className="btnsave" >حفظ البيانات</button>

</div>

    </div>
      
    </div>
  );
};

export default Buy;