import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';




const CustomCarousel = ({picures_data }) => {


  const space = { 
 

    // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    // border: 'none',
    width: '80%',
    // top: '1.5vh',
    // left: '3vw',
    // display:'flex',
    // backgroundcolor: 'blue'
    borderRadius: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    border: 'none',
    marginLeft: '2em',
  }

  //border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; border: none; width: 80%; top: 1.5vh; left: 3vw;

  return (
    <Carousel >
      {
        picures_data.map( picture => {
          return (
            <Carousel.Item key={picture.id} style={space}>
              <img 
                className="d-block w-100"
                style={{width: '100%'}}
                src={picture.image} 
                />
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default CustomCarousel;