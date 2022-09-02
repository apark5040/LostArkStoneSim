import {LitElement, html} from 'lit';

export class AbilityStoneFacet extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      chance: {type: Number},
      success: {type: Number},
      failure: {type: Number},
    };
  }

  constructor() {
    super();
    this.chance = 75;
    this.success = 0;
    this.failure = 0;
  }

  render() {
    return html`
      <div class="main card container">
        <div class="row first-row">
          <div class="col-6">${this.renderDiamonds('blue', 10)}</div>
          <div class="btn-column col-3">
            <button
              @click="${() => this._onClick('first', 'blue')}"
              type="button"
              class="cut-btn btn btn-light"
            >
              <i class="bi bi-play-fill"></i>
            </button>
          </div>
          <div class="border rounded border-4 fs-5 col-2">
            <p class="text">${this.chance}%</p>
          </div>
          <div class="fs-5 col-1">
            <button @click="${this.refresh}" type="button" class="refresh btn btn-secondary">
              <i class="bi bi-arrow-clockwise"></i>
            </button>
          </div>
        </div>
        <br />
        <div class="row second-row">
          <div class="col-6">${this.renderDiamonds('blue', 10)}</div>
          <div class="btn-column col-3">
            <button
              @click="${() => this._onClick('second', 'blue')}"
              type="button"
              class="cut-btn btn btn-light"
            >
              <i class="bi bi-play-fill"></i>
            </button>
          </div>
          <div class="border border-primary rounded border-4 fs-5 col-2">
            <p class="text">Number of Success: ${this.success}</p>
          </div>
        </div>
        <br />
        <div class="row third-row">
          <div class="col-6">${this.renderDiamonds('red', 10)}</div>
          <div class="btn-column col-3">
            <button
              @click="${() => this._onClick('third', 'red')}"
              type="button"
              class="cut-btn btn btn-light"
            >
              <i class="bi bi-play-fill"></i>
            </button>
          </div>
          <div class="border border-danger rounded border-4 fs-5 col-2">
            <p class="text">Number of Failure: ${this.failure}</p>
          </div>
        </div>
      </div>
    `;
  }

  _onClick(rowNum, color) {
    const emptyRow = this.getElementsByClassName(rowNum + '-row');
    let rowClasses = emptyRow[0].firstElementChild.querySelector(
      '.' + color + '-diamond.empty'
    ).classList;

    const randomNum = Math.floor(Math.random() * 100);

    if (randomNum <= this.chance) {
      rowClasses.add(color + '-success');

      if (this.chance > 25) {
        this.chance -= 10;
      }
      this.success++;
    } else {
      rowClasses.add('failure');

      if (this.chance < 75) {
        this.chance += 10;
      }
      this.failure++;
    }

    rowClasses.remove('empty');
  }

  renderDiamonds(color, number) {
    let diamondElements = [];
    let i = 0;
    while (i < number) {
      diamondElements.push(html`<div class="${color}-diamond empty"></div>`);
      i++;
    }
    return diamondElements;
  }

  refresh() {
    this.chance = 75;
    this.success = 0;
    this.failure = 0;

    let nodes = this.querySelectorAll('.red-success, .blue-success, .failure');

    nodes.forEach(node => {
      node.classList.remove('red-success');
      node.classList.remove('blue-success');
      node.classList.remove('failure');
      node.classList.add('empty');
    });
  }
}

window.customElements.define('ability-stone-facet', AbilityStoneFacet);
