import "./home.css"
import buyhome  from "../../images/buy-home.png"
import homeZome  from "../../images/home-with-zoom-tool.png"
import callHome  from "../../images/call.png"
import price  from "../../images/price.png"
import rent  from "../../images/rent.png"
import { Link } from 'react-router-dom';
import Footer from "../../components/header/footer/Footer"
const Home = () => {
  return (
      <>
    <div className='cont'>
    <div className='home'>
          <div className="info">
            <h1> مرحبًا بك  في وسيط </h1>
            <p>
            نحن وسيط متخصص في خدمات البيع والشراء العقارية. نسعى لتسهيل عملية بيع وشراء العقارات بشكل بسيط وفعال. فلنكن وسيطًا بسيطًا لك في رحلتك للعثور على المنزل أو العقار المثالي
            </p>
            <p>
            مهمتنا هي توفير تجربة مريحة وموثوقة لعملائنا. نحن نفهم تمامًا أهمية هذه الصفقات المالية، ولذلك نسعى لتقديم خدمة متميزة. بغض النظر عما إذا كنت ترغب في شراء منزل أحلامك أو بيع عقارك الحالي، فإننا هنا لنقدم لك الدعم والمساعدة في كل خطوة
            </p>
            <h3>نحن متحمسون للعمل معك ومساعدتك في تحقيق أهدافك العقارية</h3>
            <a href="#services">
                تعرف علي خدماتنا
                <i className="bi bi-arrow-down"></i>
            </a>
          </div>
         <div className="image">
            <img src={buyhome} alt="" />
         </div>
       </div>
        
        <div id="services" className="services">
            <div className="head-title">
               <h2>خدمات وسيط</h2>
               <p >مع وسيط البيع والشراء بقي بسيط</p>
            </div>

           <div className="services-wrapper">
               
               <Link to="/sale" className="service">
               <img src={price} alt="" />
                  <h4>
                  بيع عقار
                  </h4>
                  <p>
                  تقديم تفاصيل العقار الذي ترغب في بيعه، بما في ذلك وصف العقار ورقم الهاتف. سنقوم بالبحث عن مشترٍ محتمل يتوافق مع متطلباتك ويهتم بشراء العقار.
                  </p>
               </Link>

               <Link to="Buy" className="service">
               <img src={homeZome} alt="" />
                  <h4>
                  شراء عقار
                  </h4>
                  <p>يمكننا مساعدتك في البحث عن عقار معين وفقًا لاحتياجاتك ومتطلباتك. يرجى توفير المعلومات التالية لتسهيل عملية البحث</p>
                 
               </Link>

               <Link to="rent"  className="service">
               <img src={rent} alt="" />
                  <h4>
                  ايجار عقار
                  </h4>
                  <p>
                   نقدم خدمات تأجير العقارات أيضًا. إذا كنت ترغب في تأجير عقارك أو البحث عن عقار للإيجار، يمكننا توفير المساعدة اللازمة. نحن نعمل على توفير عملية تأجير سلسة ومريحة لكل من المالك والمستأجر.
                  </p>
                  
               </Link>

               <Link to="ask"  className="service">
               <img src={callHome} alt="" />
                  <h4>
                  استشارة     
                  </h4>
                  <p>
نحن نقدم خدمة الاستشارة العقارية المتخصصة. فريقنا من الخبراء في العقارات مستعدون لتقديم المشورة والإرشاد فيما يتعلق بعمليات البيع والشراء والاستئجار والاستثمار في العقارات .</p>

                    
             
               </Link>

           </div>

        </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default Home;