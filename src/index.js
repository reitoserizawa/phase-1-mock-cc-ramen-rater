// write your code here

// specify the div that goes the ramen-menu

const ramenMenu = document.getElementById('ramen-menu')
const ramenDetails = document.getElementById('ramen-detail')

// looks like ramen-menu has only images...

// specify what elements you have to create



// each image needs to lead to individual IDs

function putData () {
    return fetch (`http://localhost:3000/ramens/`)
    .then (dataJson => dataJson.json())
    .then (insideData => insertMenuImages(insideData))
    .then (anotherData => detailsData(anotherData))
}

// function ramenFunction (yoyoyo) {
//     for (let i=0; i<5; i++) {
//         const img = document.createElement("img")
    
    
//         img.src = `${yoyoyo[i].image}`
//         img.class = "detail-image"
    
//         ramenMenu.append(img)
        
//         }
// }

function insertMenuImages (what) {

    for (let i=0; i<5; i++) {
    const img = document.createElement("img")

    img.src = `${what[i].image}`
    
    img.addEventListener('click', console.log ("jump to the details"))

    ramenMenu.append(img)
    
    }


}

putData()

// append images, name, restaurant to ramen details

function detailsData (data) {

    for (let i=0; i<5; i++) {
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        const img = document.createElement("img")
        
        h2.class = 'name'
        h3.class = 'restaurant'
        img.class = "detail-image"

        h2.textContent = `${data[i].name}`
        h3.textContent = `${data[i].restaurant}`
        img.src = `${data[i].image}`
    
        ramenDetails.append(h2, h3, img)
        
        }

}

// function imagePut() {
//     const img = document.createElement("img")
//     img.src = `${insideData.image}`
//     ramenMenu.append (img)
// }



// specify where the elements should be appended


// each image needs to lead to individual IDs


// specify where you get these elements




// speify what contents in the elements should be connected to


/*
See all ramen images in the div with the id of ramen-menu. 
When the page loads, request the data from the server to get all the ramen objects. 
Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

Click on an image from the #ramen-menu div 
and see all the info about that ramen displayed inside the #ramen-detail div 
and where it says insert comment here and insert rating here.

Create a new ramen after submitting the new-ramen form. 
The new ramen should be added to the#ramen-menu div. 
The new ramen does not need to persist; 
in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
*/