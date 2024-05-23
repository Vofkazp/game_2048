import getMatrix, {findMaxInMatrix} from "./matrix";

export default function saveStatistic(countSteep) {
  const matrix = getMatrix();
  const net = matrix.length;
  const max = findMaxInMatrix();
  const data = new Date();
  const id = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
  const statistic = JSON.parse(localStorage.getItem('statistic'));
  if (statistic) {
    const index = statistic.findIndex(i => i.id === id);
    if (index > -1) {
      statistic[index] = {
        id: id,
        net: net + 'X' + net,
        max: max,
        steep: countSteep
      }
    } else {
      statistic.push({
        id: id,
        net: net + 'X' + net,
        max: max,
        steep: countSteep
      });
    }
    localStorage.setItem('statistic', JSON.stringify(statistic));
  } else {
    localStorage.setItem('statistic', JSON.stringify([{
      id: id,
      net: net + 'X' + net,
      max: max,
      steep: countSteep
    }]));
  }
}

export function renderStatistic() {
  const statistic = JSON.parse(localStorage.getItem('statistic'));
  const block = document.getElementById('statistic');
  statistic.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('statistic-item');
    div.innerHTML = `<div class="id"><div class="st-title">Дата</div><div class="st-value">${element.id}</div></div><div class="matr">
<div class="st-title">Сетка</div><div class="st-value">${element.net}</div></div><div class="counts">
<div class="st-title">Кол-во шагов</div><div class="st-value">${element.steep}</div></div><div class="max">
<div class="st-title">Макс. значение</div><div class="st-value">${element.max}</div></div>`;
    block.appendChild(div);
  });
}