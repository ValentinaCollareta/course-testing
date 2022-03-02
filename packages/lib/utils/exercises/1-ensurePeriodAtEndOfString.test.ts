import * as Utils from './index';

describe('ensurePeriodAtEndOfString', () => {
  let warnSpy: jest.SpyInstance;
  beforeAll(() => {
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Checks if value exists', () => {
    const doublePointString = Utils.ensurePeriodAtEndOfString('Valentina.');
    const lengthString = doublePointString.length - 2;
    const endString1 = doublePointString.charAt(lengthString);
    const lengthString2 = doublePointString.length - 1;
    const endString2 = doublePointString.charAt(lengthString2);

    expect(endString1).not.toBe('.');
    expect(endString2).toBe('.');
  });

  it('Checks if value is not an empty string', () => {
    let string = Utils.ensurePeriodAtEndOfString('Valentina');
    expect(string).not.toEqual('');

    string = Utils.ensurePeriodAtEndOfString('');
    expect(string).toEqual('');
  });

  it('Checks if ensurePeriodAtEndOfString() add a period at the end of a string if it has none', () => {
    const string = Utils.ensurePeriodAtEndOfString('Valentina');
    const lengthString = string.length - 1;
    const endString = string.charAt(lengthString);

    expect(endString).toBe('.');
  });
});
