const imgContainer = document.querySelector('.img-div');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.searchBtn');
const getImg = (CounteryName) => {
  fetch(' https://countriesnow.space/api/v0.1/countries/flag/images', (data) => {
    for (let i = 0; i < data.data.length; i += 1) {
      if (data.data[i].name === CounteryName) {
        imgContainer.textContent = '';
        const createImg = document.createElement('img');
        imgContainer.appendChild(createImg);
        createImg.src = data.data[i].flag;
        createImg.alt = 'flage img';
      }
    }
  });
};
searchBtn.addEventListener('click', () => {
  const countery = searchInput.value;
  getImg(countery);
});
