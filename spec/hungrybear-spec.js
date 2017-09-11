import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  // beforeEach(function() {
  //   jasmine.clock().install();
  //   fuzzy.setHunger();
  // });

  let fuzzy = new HungryBear(“Fuzzy”);

  afterEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    jasmine.clock().tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });
});
