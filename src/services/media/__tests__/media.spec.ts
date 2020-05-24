import media from '..';

describe('#mediaQuery', () => {
  test('media', () => {
    expect(`${media.custom(1400)}`).toEqual('@media (min-width: 1400px)');
    expect(`${media.desktop}`).toEqual('@media (min-width: 1220px)');
    expect(`${media.tablet}`).toEqual('@media (min-width: 768px)');
    expect(`${media.bigMobile}`).toEqual('@media (min-width: 600px)');
    expect(`${media.mobile}`).toEqual('@media (min-width: 414px)');
    expect(`${media.smallMobile}`).toEqual('@media (min-width: 360px)');
  });
});
