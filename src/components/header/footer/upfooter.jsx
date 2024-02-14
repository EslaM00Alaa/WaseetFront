import "./upfooter.css"

const UpFooter = () => {
  return (
    <div className="upFppter" >
      <h4>متواجدين دائما لمساعدتك</h4>

       <div className="icons">
       <div><a href="#"> <i class="bi bi-facebook face"></i>  </a></div>
       <div><a href="#"> <i class="bi bi-instagram insta"></i> </a></div>
       <div><a href="#"> <i class="bi bi-whatsapp whats"></i> </a></div>
       </div>

       <div className="contactUs">
        <h4>تواصل معنا عبر الايميل</h4>
        <h3><i class="bi bi-envelope"></i>Waseet@gmail.com</h3>
       </div>
       
    </div>
  );
};

export default UpFooter;