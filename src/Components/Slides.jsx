const { default: Slider } = require("./slider");

const Slides = () => {
    const slides = [
      {
        text: 'Slide 1',
        videoSrc: 'Step3.mp4',
      },
      {
        text: 'Slide 2',
        videoSrc: 'Step3.mp4',
      },
      {
        text: 'Slide 3',
        videoSrc: 'Step3.mp4',
      },
    ];
  
    return (
      <div>
        <Slider slides={slides} />
      </div>
    );
  };
  export default Slides;
  