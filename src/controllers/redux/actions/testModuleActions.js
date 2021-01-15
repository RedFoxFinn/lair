export const Types = {
  INCREMENT_TESTER: 'INCREMENT',
  DECREMENT_TESTER: 'DECREMENT',
  ZERO_TESTER: 'ZERO'
};

export const incrementTester = () => ({ type: Types.INCREMENT_TESTER });
export const decrementTester = () => ({ type: Types.DECREMENT_TESTER });
export const zeroTester = () => ({ type: Types.ZERO_TESTER });