/* eslint-disable @next/next/no-img-element */

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed pb-60 "
      style={{ backgroundImage: 'url("AboutUs.webp")' }}
    >
      <div className="container text-white m-auto">  <img className="w-24 h-24" src="logo.svg" alt="" /></div>
      <hr className="container m-auto mb-4 mt-4" />
    <div className="flex justify-between container m-auto text-white">
      <div>
       <p>Company</p>
       <p>ABout with Us</p>
       <p>Partner with us</p>
       <p>Blogs</p>
      </div>
      <div>
       <p>Legal</p>
       <p>Privacey policy</p>
       <p>Terms of service</p>
      </div>
      <div>
        <p>conatact</p>
        <p>email: </p>
        <p>Phoen :+880175155****</p>
      </div>
      <div>

        <p>Social</p>
        <div className="flex gap-4">
          <p>logo</p>
          <p>logo</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
