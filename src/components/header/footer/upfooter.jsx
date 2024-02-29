import "./upfooter.css"

const UpFooter = () => {
  return (
    <div className="upFppter" >
      <h4>متواجدين دائما لمساعدتك</h4>

       <div className="icons">
       <div><a href="https://web.facebook.com/profile.php?id=61556565194892"> <i class="bi bi-facebook face"></i>  </a></div>
       <div><a href="#"> <i class="bi bi-instagram insta"></i> </a></div>
       <div><a href="#"> <i class="bi bi-whatsapp whats"></i> </a></div>
       </div>

       <div className="contactUs">
        <h4>تواصل معنا عبر الايميل</h4>
        <a href="mailto:waseet288@gmail.com"><h3><i class="bi bi-envelope"></i>Waseet</h3></a>
       </div>
       
    </div>
  );
};

export default UpFooter;