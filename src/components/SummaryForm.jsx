import { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const SummaryForm = () => {
  const [btnControl, setBtnControl] = useState(false);

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  return (
    <div>
      <form>
        <input
          type='checkbox'
          name='tcCheck'
          id='tcCheck'
          value={btnControl}
          onChange={(e) => setBtnControl(e.target.checked)}
        />
        <label htmlFor='tcCheck'>
          I agree to the{' '}
          <OverlayTrigger
            placement='right'
            overlay={popover}
          >
            <span style={{ color: 'blue' }}>terms of service</span>
          </OverlayTrigger>
        </label>

        <br />
        <button
          type='submit'
          disabled={!btnControl}
        >
          Confirm order
        </button>
      </form>
    </div>
  );
};

export default SummaryForm;
