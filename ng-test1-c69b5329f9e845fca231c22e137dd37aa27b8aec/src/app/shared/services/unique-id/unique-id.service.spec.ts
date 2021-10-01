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

  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new  UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++){
      ids.add(service.generateUniqueWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generates when called`, () => {
    service.generateUniqueWithPrefix('app');
    service.generateUniqueWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name}, should throw when called with empty`, () => {
    const emptyValues = [null, undefined, ''];
    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueWithPrefix(emptyValue)).withContext(`Empty value: ${emptyValue}`).toThrow();
    });
  });
});
