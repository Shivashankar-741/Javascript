const searchForm = document.getElementById("search-form");
// const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");


searchForm.addEventListener('submit', e => {
  // Get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  // Get limit
  const searchLimit = document.getElementById('limit').value;
  // Get search
  const searchTerm = searchInput.value;
  // Check for input
  if (searchTerm == '') {
    // Show message
    showMessage('Please add a search term', 'alert-danger');
  }
//   // Clear field
//   searchInput.value = '';