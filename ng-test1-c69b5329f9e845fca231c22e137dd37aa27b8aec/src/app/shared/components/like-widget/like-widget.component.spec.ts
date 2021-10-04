import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LikeWidgetComponent} from './like-widget.component';
import {UniqueIdService} from '../../services/unique-id/unique-id.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LikeWidgetModule} from './like-widget.module';

// describe(LikeWidgetComponent.name, () => {
//   let component: LikeWidgetComponent = null;
//   let fixture: ComponentFixture<LikeWidgetComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LikeWidgetComponent ]
//     })
//     .compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(LikeWidgetComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ LikeWidgetComponent],
      // imports: [ FontAwesomeModule],
      // providers: [UniqueIdService]
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  // it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, () => {
  //   fixture.detectChanges();
  //   component.liked.subscribe((done) => {
  //     expect(true).toBeTruthy();
  //     done();
  //   });
  //   component.like();
  // });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

});
