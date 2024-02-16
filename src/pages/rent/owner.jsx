import React, { useState } from 'react';
import rentApi from "../../api/rento"
const Owner = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [houseDetails, sethouseDetails] = useState("");
  const [addressDetails, setaddressDetails] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div className="contentrrr">
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

    <div className="form1">

<label htmlFor="name">اسم المالك</label>
<input onChange={(e)=>setname(e.target.value)} type="text" id="name" placeholder="ادخل الاسم ..." />

<label htmlFor="ph"> رقم الهاتف</label>
<input onChange={(e)=>setphone(e.target.value)} type="text" id="ph" placeholder="ادخل رقم الهاتف ..." />

<label htmlFor="hd"> تفاصيل العقار </label>
<textarea onChange={(e)=>sethouseDetails(e.target.value)} placeholder="ادخل تفاصيل العقار (مساحة - دور - تشطيب)" type="text" id="hd" />

<label htmlFor="ad"> تفاصيل العنوان</label>
<textarea onChange={(e)=>setaddressDetails(e.target.value)} placeholder="ادخل  بيانات العنوان بالتفصيل ..." type="text" id="ad" />

<label htmlFor="pr"> السعر الشهر </label>
<input onChange={(e)=>setPrice(e.target.value)} placeholder="السعر المتوقع ..." type="number" id="pr" />

<button  onClick={()=>rentApi(name, phone, houseDetails ,addressDetails ,price )} className="btnsave" >حفظ البيانات</button>

</div>

</div>
  );
};

export default Owner;