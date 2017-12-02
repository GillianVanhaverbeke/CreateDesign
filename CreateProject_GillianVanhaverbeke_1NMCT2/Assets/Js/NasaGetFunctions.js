function testFunction() {
    console.log("test");
}

function ShowData() {
	//console.log("test");
    var xhttp = new XMLHttpRequest();
    var url = "https://api.nasa.gov/planetary/apod?api_key=mFSo39uMFEC64nfFvvrIhB2KTU0WidIl5Gk7zK18";
    
    //console.log("y");
    xhttp.onreadystatechange = function() {
        //console.log("x");
        if (this.readyState == 4 && this.status == 200) {
            //console.log("z");
            var myArr = JSON.parse(xhttp.responseText);
            //console.log("a");
            console.log(myArr.url);
            
			showPicture(myArr);
			ShowLargeGraph();
        }
		else
		{
			//showError();
		}
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function showPicture(pictureInfoArray) {
	var Picture = document.querySelector('.PictureOfTheDay');
	var Title = document.getElementById('PictureOfTheDayTitle');
	var Author = document.getElementById('PictureOfTheDayAuthor');
	var Dates = document.getElementById('PictureOfTheDayDate');
	var Description = document.getElementById('PictureOfTheDayDescription');
	
	Picture.innerHTML = "<img src=" + pictureInfoArray.url + " \ width=\"100%\" height=\"190\" max-height=\"200px\"></img>";
	Title.innerHTML = "" + pictureInfoArray.title + "";
	
	//console.log(pictureInfoArray.copyright);
	
	if(pictureInfoArray.copyright == "undefined")
	{
		Author.innerHTML = "Satelite picture";
	}
	else
	{
		Author.innerHTML = "" + pictureInfoArray.copyright + "";
	}
	
	Dates.innerHTML = "" + pictureInfoArray.date + "";
	Description.innerHTML = "" + pictureInfoArray.explanation + "";
}

function ShowLargeGraph() 
{
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		theme: "light2", // "light2", "dark1", "dark2"
		backgroundColor: 'transparent' ,
		data: [
		{
			// Change type to "column", "line", "bar", "area", "spline", "pie",etc.
			type: "line",
			dataPoints: [
				{ label: "2013",  y: 10  },
				{ label: "2014", y: 15  },
				{ label: "2015", y: 25  },
				{ label: "2016",  y: 30  },
				{ label: "2017",  y: 28  }
			]
		}
		]
	});
	chart.render();
}

function showError() {
	var Picture = document.querySelector('.PictureOfTheDay');
	Picture.innerHTML = "<img src=\"./Assets/Images/apod1.jpg\" \ width=\"100%\" height=\"190\" max-height=\"200px\"></img>";
			
	var PictureInfo = document.getElementById('PictureOfTheDayTitle');
	console.log(PictureInfo);
	PictureInfo.innerHTML = "PICTURE NOT FOUND";
}

document.addEventListener('DOMContentLoaded', function ()
{
    //testFunction();
    ShowData();
});