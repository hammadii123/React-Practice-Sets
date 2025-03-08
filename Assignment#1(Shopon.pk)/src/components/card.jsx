import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard({prodName,prodImg,prodDetails}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='img'  variant="top" src={prodImg} />
      <Card.Body>
        <Card.Title>{prodName}</Card.Title>
        <Card.Text>{prodDetails}
        </Card.Text>
        <Button variant="primary">Click to view</Button>

      </Card.Body>
    </Card>
  );
}

export default CustomCard;