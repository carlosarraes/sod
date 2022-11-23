import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useOrderDetails } from '../contexts/OrderDetails';

const ScoopOption = ({ name, imagePath }) => {
  const { updateOptionCount } = useOrderDetails();

  const handleChange = (e) => updateOptionCount(name, Number(e.target.value), 'scoops');

  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{ textAlign: 'center' }}
    >
      <span>{name}</span>
      <img
        style={{ width: '10%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label
          column
          xs='6'
          style={{ textAlign: 'right' }}
        >
          {name}
        </Form.Label>
        <Col
          xs='5'
          style={{ textAlgin: 'left' }}
        >
          <Form.Control
            type='number'
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOption;
