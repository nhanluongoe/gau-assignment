import "./style.css";

(function () {
  renderDashboard();

  let activePath = "dashboard";

  const navs = document.querySelectorAll(".nav__item");

  console.log(navs);

  navs.forEach((nav) => {
    nav.addEventListener("click", (e) => {
      const path = e.target.getAttribute("data-path");
      if (path === activePath) return;
      activePath = path;
      document.querySelector(".nav__item.active").classList.remove("active");
      nav.classList.add("active");

      if (path === "dashboard") {
        renderDashboard();
      } else if (path === "model") {
        renderModel();
      } else if (path === "dataset") {
        renderDataset();
      }
    });
  });

  function renderDashboard() {
    document.querySelector(".content").innerHTML = `
      <div class="content__dashboard">
        <div class="content__dashboard__charts">
          <div class="content__dashboard__ref-metrics chart">
            <p>Reference Metrics</p>
          </div>
          <div class="content__dashboard__non-ref-metrics chart">
            <p>Non-Reference Metrics</p>
          </div>
          <div class="content__dashboard__cluster chart">
            <div class="content__dashboard__cluster__header">
              <p class="cluster__header__name">Cluster</p>
              <div class="cluster__header__version">V. 1.0.0</div>
            </div>
          </div>
        </div>
        <div class="content__dashboard__dataset">
          <div class="dashboard__dataset__header">
            <p>Dataset</p>
            <div class="dashboard__dataset__buttons">
              <button class="dashboard__dataset__button">Download CSV</button>
              <button class="dashboard__dataset__button">Export</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Artist</th>
                <th>Operator</th>
                <th>Song name</th>
                <th>Popularity</th>
                <th>Energy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderModel() {
    document.querySelector(".content").innerHTML = `
      <div class="content__dashboard">
        <div class="content__dashboard__charts">
          <div class="content__dashboard__ref-metrics chart">
            <p>Reference Metrics</p>
          </div>
          <div class="content__dashboard__non-ref-metrics chart">
            <p>Non-Reference Metrics</p>
          </div>
          <div class="content__dashboard__cluster chart">
            <div class="content__dashboard__cluster__header">
              <p class="cluster__header__name">Cluster</p>
              <div class="cluster__header__version">V. 1.0.0</div>
            </div>
          </div>
        </div>
        <div class="content__dashboard__dataset">
          <div class="dashboard__dataset__header">
            <p>Dataset</p>
            <div class="dashboard__dataset__buttons">
              <button class="dashboard__dataset__button">Create model</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Artist</th>
                <th>Operator</th>
                <th>Song name</th>
                <th>Popularity</th>
                <th>Energy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderDataset() {
    document.querySelector(".content").innerHTML = `
      <div class="content__dataset">
        <form class="content__dataset__filters">
          <div class="dataset__filter">
            <label for="label1">Label1</label>
            <select name="label1" id="label1">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div class="dataset__filter">
            <label for="label2">Label2</label>
            <select name="label2" id="label2">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div class="dataset__filter">
            <label for="label3">Label3</label>
            <select name="label3" id="label3">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div class="dataset__filter">
            <label for="label4">Label4</label>
            <select name="label4" id="label4">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div class="dataset__filter">
            <label for="label5">Label5</label>
            <select name="label5" id="label5">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div class="dataset__filter">
            <label for="label6">Label6</label>
            <select name="label6" id="label6" multiple>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div class="dataset__filter">
            <label for="label7">Label7</label>
            <input type="text" id="label7" />
          </div>
          <button class="dataset__filter__button">Filter</button>
        </form>
        <div class="content__dashboard__dataset pipeline-sample">
          <div class="dashboard__dataset__header">
            <p>Pipeline Sample</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Artist</th>
                <th>Operator</th>
                <th>Song name</th>
                <th>Popularity</th>
                <th>Energy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artist 1</td>
                <td>Operator 1</td>
                <td>Song name 1</td>
                <td>100</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <div class="content__dashboard__dataset" style="padding: 2em 0;">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Artist</th>
              <th>Operator</th>
              <th>Song name</th>
              <th>Popularity</th>
              <th>Energy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Artist 1</td>
              <td>Operator 1</td>
              <td>Song name 1</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Artist 1</td>
              <td>Operator 1</td>
              <td>Song name 1</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Artist 1</td>
              <td>Operator 1</td>
              <td>Song name 1</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Artist 1</td>
              <td>Operator 1</td>
              <td>Song name 1</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Artist 1</td>
              <td>Operator 1</td>
              <td>Song name 1</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Artist 1</td>
              <td>Operator 1</td>
              <td>Song name 1</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Artist 1</td>
              <td>Operator 1</td>
              <td>Song name 1</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Artist 1</td>
              <td>Operator 1</td>
              <td>Song name 1</td>
              <td>100</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
})();
