import { useState } from "react";
import "./ask.css"
import askApi from "../../api/postAsk"
const Ask = () => {
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");

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


<button onClick={()=>askApi(name, phone)} className="btnsave" >حفظ البيانات</button>

</div>

    </div>
      
    </div>
  );
};

export default Ask;