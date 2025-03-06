

	const imageBoxes = document.getElementsByClassName("img-box");
	
	
	// method for seaching a book in the list
	function searchBook() {
		
		const searchTerm = document.getElementById("search").value;
		
		for(let imgBox of imageBoxes) {
			if(imgBox.innerText.indexOf(searchTerm) < 0) {
				imgBox.classList.add("hide-img-box");
			}
			else {
				imgBox.classList.remove("hide-img-box");
			}
		}		
	}
	
function showBookDetails()
{
	const bookDetails= document.getElementById('book-details01');
	bookDetails.style.display ='block';
}

function closeBookDetails()
{
	const bookDetails= document.getElementById('book-details01');
	bookDetails.style.display='none';
}

//Second image*//
function showBookDetails01()
{
	const bookDetails= document.getElementById('book-details02');
	bookDetails.style.display ='block';
}

function closeBookDetails01()
{
	const bookDetails= document.getElementById('book-details02');
	bookDetails.style.display='none';
}

//third image*//
function showBookDetails02()
{
	const bookDetails= document.getElementById('book-details03');
	bookDetails.style.display ='block';
}

function closeBookDetails02()
{
	const bookDetails= document.getElementById('book-details03');
	bookDetails.style.display='none';
}

//Fourth image*//
function showBookDetails03()
{
	const bookDetails= document.getElementById('book-details04');
	bookDetails.style.display ='block';
}

function closeBookDetails03()
{
	const bookDetails= document.getElementById('book-details04');
	bookDetails.style.display='none';
}

//*Fifth Book*//
function showBookDetails04()
{
	const bookDetails= document.getElementById('book-details05');
	bookDetails.style.display ='block';
}

function closeBookDetails04()
{
	const bookDetails= document.getElementById('book-details05');
	bookDetails.style.display='none';
}

//Function for linking review page//
function showReview()
{
	const bookReview= document.getElementById('review-page');
	bookReview.style.display ='block';
}

function closeReview()
{
	const bookReview= document.getElementById('review-page');
	bookReview.style.display='none';
}


 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
