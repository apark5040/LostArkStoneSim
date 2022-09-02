import {LitElement, html} from 'lit';

export class AbilityStoneFacet extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      chance: {type: Number},
      blue: {type: Number},
      red: {type: Number},
      numOfDiamonds: {type: Number},
    };
  }

  constructor() {
    super();
    this.chance = 75;
    this.blue = 0;
    this.red = 0;
    this.numOfDiamonds = 10;
  }

  render() {
    return html`
      <div class="main card container border border-5 border-dark">
        <div class="row first-row">
          <div class="col-6">
            ${this.renderDiamonds('blue', this.numOfDiamonds)}
          </div>
          <div class="btn-column col-2">
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
          <div class="fs-5 col-2">
            <button
              @click="${this.refresh}"
              type="button"
              class="refresh btn btn-secondary"
            >
              <i class="bi bi-arrow-clockwise"></i>
            </button>
          </div>
        </div>
        <br />
        <div class="row second-row">
          <div class="col-6">
            ${this.renderDiamonds('blue', this.numOfDiamonds)}
          </div>
          <div class="btn-column col-2">
            <button
              @click="${() => this._onClick('second', 'blue')}"
              type="button"
              class="cut-btn btn btn-light"
            >
              <i class="bi bi-play-fill"></i>
            </button>
          </div>
          <div class="border border-primary rounded border-4 fs-5 col-2">
            <p class="text">${this.blue}</p>
          </div>
          <div class="fs-5 col-2">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nodes
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="${() => this.updateDiamonds(4)}">4</a></li>
                <li><a class="dropdown-item" @click="${() => this.updateDiamonds(5)}">5</a></li>
                <li><a class="dropdown-item" @click="${() => this.updateDiamonds(6)}">6</a></li>
                <li><a class="dropdown-item" @click="${() => this.updateDiamonds(7)}">7</a></li>
                <li><a class="dropdown-item" @click="${() => this.updateDiamonds(8)}">8</a></li>
                <li><a class="dropdown-item" @click="${() => this.updateDiamonds(9)}">9</a></li>
                <li><a class="dropdown-item" @click="${() => this.updateDiamonds(10)}">10</a></li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div class="row third-row">
          <div class="col-6">${this.renderDiamonds('red', this.numOfDiamonds)}</div>
          <div class="btn-column col-2">
            <button
              @click="${() => this._onClick('third', 'red')}"
              type="button"
              class="cut-btn btn btn-light"
            >
              <i class="bi bi-play-fill"></i>
            </button>
          </div>
          <div class="border border-danger rounded border-4 fs-5 col-2">
            <p class="text">${this.red}</p>
          </div>
        </div>
      </div>
    `;
  }

  _onClick(rowNum, color) {
    const emptyRow = this.getElementsByClassName(
      rowNum + '-row'
    )[0].firstElementChild.querySelector('.' + color + '-diamond.empty');
    if (null !== emptyRow) {
      let rowClasses = emptyRow.classList;

      const randomNum = Math.floor(Math.random() * 100);

      if (randomNum <= this.chance) {
        rowClasses.add(color + '-success');

        if (this.chance > 25) {
          this.chance -= 10;
        }
        if ('blue' == color) {
          this.blue++;
        } else {
          this.red++;
        }
      } else {
        rowClasses.add('failure');

        if (this.chance < 75) {
          this.chance += 10;
        }
      }

      rowClasses.remove('empty');
    }
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

  updateDiamonds(number) {
    this.numOfDiamonds = number;
    this.refresh();
  }

  refresh() {
    this.chance = 75;
    this.blue = 0;
    this.red = 0;

    let nodes = this.querySelectorAll('.red-success, .blue-success, .failure');

    nodes.forEach((node) => {
      node.classList.remove('red-success');
      node.classList.remove('blue-success');
      node.classList.remove('failure');
      node.classList.add('empty');
    });
  }
}

window.customElements.define('ability-stone-facet', AbilityStoneFacet);
