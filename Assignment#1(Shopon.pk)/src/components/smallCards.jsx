// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SmallCards({img,title}) {
  return (
    <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>

      </Card.Body>
    </Card>
  );
}

export default SmallCards;