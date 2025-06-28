const calendarTitle = document.getElementById('calendar-title');
const calendarBody = document.querySelector('#calendar tbody');
const prevYearBtn = document.getElementById('prev-year');
const nextYearBtn = document.getElementById('next-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

function renderCalendar(year, month) {
  calendarBody.innerHTML = '';
  calendarTitle.textContent = `${year}년 ${month + 1}월`;
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  let row = document.createElement('tr');
  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement('td'));
  }
  for (let date = 1; date <= lastDate; date++) {
    if ((row.children.length) % 7 === 0 && date !== 1) {
      calendarBody.appendChild(row);
      row = document.createElement('tr');
    }
    const cell = document.createElement('td');
    cell.textContent = date;
    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      date === today.getDate()
    ) {
      cell.classList.add('today');
    }
    row.appendChild(cell);
  }
  while (row.children.length < 7) {
    row.appendChild(document.createElement('td'));
  }
  calendarBody.appendChild(row);
}

prevYearBtn.onclick = () => {
  currentYear--;
  renderCalendar(currentYear, currentMonth);
};
nextYearBtn.onclick = () => {
  currentYear++;
  renderCalendar(currentYear, currentMonth);
};
prevMonthBtn.onclick = () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentYear, currentMonth);
};
nextMonthBtn.onclick = () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentYear, currentMonth);
};

renderCalendar(currentYear, currentMonth);
