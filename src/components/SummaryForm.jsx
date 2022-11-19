import { useState } from 'react';

const SummaryForm = () => {
  const [btnControl, setBtnControl] = useState(false);
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
        <label htmlFor='tcCheck'>I agree to the terms of service</label>
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
