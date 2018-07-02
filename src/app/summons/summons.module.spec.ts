import { ElysModule } from './summons.module';

describe('ElysModule', () => {
  let elysModule: ElysModule;

  beforeEach(() => {
    elysModule = new ElysModule();
  });

  it('should create an instance', () => {
    expect(elysModule).toBeTruthy();
  });
});
