import { FakeDirective } from './fake.directive';

describe('FakeDirective', () => {
  it('should create an instance', () => {
    const directive = new FakeDirective();
    expect(directive).toBeTruthy();
  });
});
