/*
*   EXAM 2 PART 2
*   Create a review page for a product or
*   restaurant. A review should have a name,
*   details (text), and a rating out of 5.
*
*   Requirements:
*     -Can add a review
*     -After adding a review, form should 'reset'
*     -Review count with total number of reviews
*     -Should have at least one image, can link
*       to an image you found on google.
*     -At least 10 styles applied. These can
*       be applied in the header, (<style>)
*       via DOM manipulation, or an external
*       css file.
*
*   Please upload your HTML and JS files with your
*   submission along with your css file if you used one.
*/


// YOUR CODE STARTS HERE
document.getElementById('submit-review').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const details = document.getElementById('details').value;
    const rating = document.getElementById('rating').value;
  
    if (name && details && rating) {
      const reviewDiv = document.createElement('div');
      
      const reviewContent = `
        <h3>${name}</h3>
        <p>${details}</p>
        <p>Rating: ${'⭐'.repeat(rating)}</p>
      `;
      reviewDiv.innerHTML = reviewContent;
  
      const reviewsSection = document.getElementById('reviews');
      reviewsSection.appendChild(reviewDiv);
  
      const reviewCount = document.getElementById('review-count');
      reviewCount.textContent = parseInt(reviewCount.textContent) + 1;
  
      // Reset the inputs after submission
      document.getElementById('name').value = '';
      document.getElementById('details').value = '';
      document.getElementById('rating').value = '';
    } else {
      alert("Please fill out all fields.");
    }
  });
// YOUR CODE ENDS HERE
