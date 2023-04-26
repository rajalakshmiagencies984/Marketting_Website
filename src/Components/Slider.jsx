import SimpleImageSlider from "react-simple-image-slider";
import styles from '../styles/Slider.module.scss'


const images = [
  { url: "https://thumbs.dreamstime.com/b/farmer-spraying-pesticide-field-27431865.jpg" },
  { url: "https://thumbs.dreamstime.com/b/spraying-pesticides-28301470.jpg" },
  { url: "https://thumbs.dreamstime.com/b/farming-tractor-15546358.jpg" },
  { url: "https://thumbs.dreamstime.com/b/farming-tractor-11283409.jpg" },
  { url: "https://thumbs.dreamstime.com/b/spraying-pesticides-1-18708579.jpg" },
  { url: "https://thumbs.dreamstime.com/b/corn-fields-farm-tractor-5259518.jpg" },
  { url: "https://thumbs.dreamstime.com/b/spraying-peach-9599444.jpg" },
];

const Slider = () => {
  return (
    <div className={styles.container}>
      <SimpleImageSlider className={styles.images}
        width={1500}
        height={630}
        images={images}
        showBullets={true}
        autoPlay={true}
        autoPlayDelay={3}
      />
    </div>
  );
}
export default Slider;