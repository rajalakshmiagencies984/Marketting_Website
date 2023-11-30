import SimpleImageSlider from "react-simple-image-slider";
import styles from '../styles/Slider.module.scss'
import Link from "next/link";



const images = [
  { url: "https://images.unsplash.com/photo-1656918828509-e674e5e99422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGFncmljdWx0dXJlJTIwcGVzdGlzaWRlJTIwc2hvcHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1500&q=600" },
  { url: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcyfHxhZ3JpY3VsdHVyZSUyMHBlc3Rpc2lkZSUyMHNob3BzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1500&q=600" },
  { url: "https://st4.depositphotos.com/1194063/25290/i/450/depositphotos_252907744-stock-photo-farmer-planting-tomatoes-seedling-in.jpg" },
  { url: "https://st4.depositphotos.com/1194063/25290/i/380/depositphotos_252907536-stock-photo-farmer-planting-seeds-in-soil.jpg" },
  { url: "https://media.gettyimages.com/id/1095359686/photo/agriculture-drone-fly-to-sprayed-fertilizer-on-the-rice-fields.jpg?s=612x612&w=0&k=20&c=sa613TCSs6sXt2fdcrOnis5EuN5qwckYpGmQvsEXVoM=" },
  { url: "https://media.istockphoto.com/id/606230424/photo/agriculture.jpg?s=612x612&w=0&k=20&c=byKybbMGCEAgdgfgyvUXC2ttl_8nbfc7JKpKFYg6rw4=" },
  { url: "https://media.istockphoto.com/id/1198739624/photo/science-research-education-concept.jpg?s=612x612&w=0&k=20&c=6TM0RhAyw2ll6WLNjmW9324SNCkw3r5ORIMaLjop6mk=" },
];

const Slider = () => {
  return (

      <div className={`row ${styles.container}`}>
        <div className={`col-md-12 col-lg-8 ${styles.image}`}>
          <SimpleImageSlider className={styles.images}
            width={970}
            height={600}
            images={images}
            showBullets={true}
            showNavs={true}
            navSize={30}
            navMargin={5}
            navStyle={2}
            autoPlay={true}
            />
        </div>
        <div className={`col-md-12 col-lg-4 ${styles.download}`}>
          <h6 className={styles.brand}>Download The App From Here</h6>
          <Link href="https://drive.google.com/file/d/1dliRuT642qQyxzkKYFPKCGW3-6XGF4mM/view?usp=share_link" target="_blank" className={`btn ${styles.link}`}>Download</Link>
        </div>
      </div>

  );
}
export default Slider;
