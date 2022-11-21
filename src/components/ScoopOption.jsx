import Col from 'react-bootstrap/Col';

const ScoopOption = ({ name, imagePath }) => {
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
    </Col>
  );
};

export default ScoopOption;