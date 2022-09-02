//WILL WORK ON AFTER I FINISH APP

// import {AbilityStoneFacet} from './ability-stone-facet.js';
// import {fixture, assert} from '@open-wc/testing';
// import {html} from 'lit/static-html.js';

// suite('ability-stone-facet', () => {
//   test('is defined', () => {
//     const el = document.createElement('ability-stone-facet');
//     assert.instanceOf(el, AbilityStoneFacet);
//   });

//   test('renders with default values', async () => {
//     const el = await fixture(html`<ability-stone-facet></ability-stone-facet>`);
//     assert.shadowDom.equal(
//       el,
//       `
//       <h1>Hello, World!</h1>
//       <button part="button">Click Count: 0</button>
//       <slot></slot>
//     `
//     );
//   });

//   test('renders with a set name', async () => {
//     const el = await fixture(html`<ability-stone-facet name="Test"></ability-stone-facet>`);
//     assert.shadowDom.equal(
//       el,
//       `
//       <h1>Hello, Test!</h1>
//       <button part="button">Click Count: 0</button>
//       <slot></slot>
//     `
//     );
//   });

//   test('handles a click', async () => {
//     const el = await fixture(html`<ability-stone-facet></ability-stone-facet>`);
//     const button = el.shadowRoot.querySelector('button');
//     button.click();
//     await el.updateComplete;
//     assert.shadowDom.equal(
//       el,
//       `
//       <h1>Hello, World!</h1>
//       <button part="button">Click Count: 1</button>
//       <slot></slot>
//     `
//     );
//   });

//   test('styling applied', async () => {
//     const el = await fixture(html`<ability-stone-facet></ability-stone-facet>`);
//     await el.updateComplete;
//     assert.equal(getComputedStyle(el).paddingTop, '16px');
//   });
// });
