console.log('Hello');

// initialize the news api parameters
let source = 'bbc-news';
let apikey = '1e3c373bc5f6448f84575debc51a9310';

// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML = "";
        articles.forEach(function(element, index) {
            // console.log(element,index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                        <b>Breaking News: ${index+1} </b> ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href = "${element['url']}" target= "_blank">click here to read more </a> </div>
                            </div>
                        </div>`; 
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();

