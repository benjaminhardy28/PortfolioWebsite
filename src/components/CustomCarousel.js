import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCarousel = ({picures_data }) => {


  // const space = { 
  //   width: '80%',
  //   borderRadius: '20px',
  //   boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  //   border: 'none',
  //   marginLeft: '2em',
  // }

  return (
    <Carousel >
      {
        picures_data.map( picture => {
          return (
            <Carousel.Item key={picture.id} > 
              <img 
                className="d-block w-100"
                src={picture.image} 
                alt=""
                />
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default CustomCarousel;