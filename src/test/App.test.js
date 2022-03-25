import { formatTimeStrings } from '../utils/formatTimeString';

describe('formatTimeString test', () => {
  it('returns None if no opening hours passed', () => {
    const expected = 'None';
    const received = formatTimeStrings([]);

    expect(received).toEqual(expected);
  });

  it("returns 'start - Till tomorrow' if only one opening hours passed", () => {
    const openingHours = ["12-00"];
    const expected = `${openingHours[0]} - Till tomorrow`;
    const received = formatTimeStrings(openingHours);

    expect(received).toEqual(expected);
  });

  it("returns 'start - end' if more than one opening hours passed", () => {
    const openingHours = ["12:00", "16:00", "18:00", '', '', '23:33'];
    const expected = `${openingHours[0]} - ${openingHours[5]}`;
    const received = formatTimeStrings(openingHours);

    expect(received).toEqual(expected);
  })
});
