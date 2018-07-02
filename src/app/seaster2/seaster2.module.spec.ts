import { SeasterModule } from './seaster2.module';

describe('ElysModule', () => {
  let elysModule: SeasterModule;

  beforeEach(() => {
    elysModule = new SeasterModule();
  });

  it('should create an instance', () => {
    expect(elysModule).toBeTruthy();
  });
});
