import SimpleImageSlider from "react-simple-image-slider";
import styles from '../styles/Slider.module.scss'
import img from '../assets/logo.png'
import Image from 'next/image'



const images = [
  { url: "https://images.unsplash.com/photo-1656918828509-e674e5e99422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGFncmljdWx0dXJlJTIwcGVzdGlzaWRlJTIwc2hvcHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1500&q=600" },
  { url: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcyfHxhZ3JpY3VsdHVyZSUyMHBlc3Rpc2lkZSUyMHNob3BzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1500&q=600" },
  { url: "https://images.unsplash.com/photo-1655130944329-b3a63166f6b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNwcmF5aW5nJTIwcGVzdGlzaWRlcyUyMGFncmljdWx0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1500&q=1500" },
  { url: "https://images.unsplash.com/photo-1655130944281-072e0644db75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHNwcmF5JTIwcGVzdGlzaWRlcyUyMGluJTIwYWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=1000" },
  { url: "https://images.unsplash.com/photo-1589876568181-a1508b8ef473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=1000" },
  { url: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxzcHJheWluZyUyMHBlc3Rpc2lkZXMlMjBhZ3JpY3VsdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=1000" },
  { url: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=800" },
];

const Slider = () => {
  return (
    <div className={`row ${styles.container}`} >
      <div className={`col-7 ${styles.image}`}>
        <SimpleImageSlider className={styles.images}
          width={790}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
          navSize={30}
          navMargin={5}
          navStyle={2}
        />
      </div>
      <div className={`col-5 ${styles.company_details}`}>
        <Image src={img} alt="logo" height={150} width={150} className={`mt-3 ${styles.logo}`} />
        <h5 className={styles.brand}>Rajalkshmi Agencies</h5>
        <h5 className={styles.app}>Click the download button to get the app</h5>

      </div>
    </div>

  );
}
export default Slider;