const toBeShown = 3;

async function loadLatestPosts() {

    let latestSection = document.getElementById("latestPosts");

    let response = await fetch("/posts.json");
    let data = await response.json();

    let allDates = [];
    data.forEach((post) => { 
        allDates.push(post.date);
    });

    allDates.sort();
    allDates.reverse();

    let latestPosts = [];
    for(let i = 0; i < toBeShown; i++) {

        let date = allDates[i];
        data.forEach((post, index) => {

            if(post.date == date) {

                latestPosts.push(index);

            }

        });

    }

    latestPosts.forEach((post) => {

        let li = document.createElement("li");
        let a = document.createElement("a");

        a.innerHTML = data[post].title;
        a.href = data[post].file;

        li.appendChild(a);
        latestSection.appendChild(li);

    });

}