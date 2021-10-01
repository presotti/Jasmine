// import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

// describe('UniqueIdService', () => {
//   let service: UniqueIdService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UniqueIdService);
//   });
//
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueWithPrefix('app');
    expect(id).toContain('app-');
  });
});
