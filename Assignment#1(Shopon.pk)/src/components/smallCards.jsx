// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SmallCards({img,title,className}) {
  return (
    <Card style={{ width: '9rem' }} className={`small-card ${className}`}>
      <Card.Img  variant="top" src={img} />
      <Card.Body className='smallCardBody'>
        <Card.Title className='card-title'>{title}</Card.Title>

      </Card.Body>
    </Card>
  );
}

export default SmallCards;