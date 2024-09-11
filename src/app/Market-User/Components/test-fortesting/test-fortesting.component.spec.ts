import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFortestingComponent } from './test-fortesting.component';

// describe('TestFortestingComponent', () => {
//   let component: TestFortestingComponent;
//   let fixture: ComponentFixture<TestFortestingComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ TestFortestingComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(TestFortestingComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
describe('clicing for login function',()=>{
it('must be true',()=>{
  const comp = new TestFortestingComponent
  expect(comp.heloll()).toBe('hello')

})
})
