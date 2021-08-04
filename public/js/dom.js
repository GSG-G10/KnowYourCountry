const resutlsList = document.getElementById('suggestions-result');
const Input = document.getElementById('searchInput');

// Append option function
const appendOption = (data) => {
  for (let x = 0; x < data.length; x += 1) {
    const option = document.createElement('option');
    option.value = data[x];
    resutlsList.appendChild(option);
  }
};
// git Identical Data from Json
const fetchREquiredData = (searchValue) => {
  fetch(`/search?value=${searchValue}`, (data) => {
    appendOption(data);
  });
};

// Input Event
Input.onkeyup = () => {
  const searchValue = Input.value;
  if (searchValue) {
    fetchREquiredData(searchValue);
    resutlsList.textContent = '';
  }
};
