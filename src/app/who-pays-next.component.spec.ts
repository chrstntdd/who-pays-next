import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WhoPaysNextAppComponent } from '../app/who-pays-next.component';

beforeEachProviders(() => [WhoPaysNextAppComponent]);

describe('App: WhoPaysNext', () => {
  it('should create the app',
      inject([WhoPaysNextAppComponent], (app: WhoPaysNextAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'who-pays-next works!\'',
      inject([WhoPaysNextAppComponent], (app: WhoPaysNextAppComponent) => {
    expect(app.title).toEqual('who-pays-next works!');
  }));
});
