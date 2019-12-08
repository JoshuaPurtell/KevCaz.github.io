myDate=new Date();
xmas=Date.parse("Dec 23, "+myDate.getFullYear())
today=Date.parse(myDate)

daysToChristmas=Math.round((xmas-today)/(1000*60*60*24))


if (daysToChristmas==0)
$('#days').text("C'est aujourd'hui!");

if (daysToChristmas<0)
$('#days').text("La fête c'était il y a  "+-1*(daysToChristmas)+" jours.");

if (daysToChristmas>0)
$('#days').text("Plus que "+daysToChristmas+" jours avant le réveillon!");

//make snow
snowDrop(250, randomInt(0, 2000));
snow(300, 200);

function snow(num, speed) {
		if (num > 0) {
			setTimeout(function () {
				$('#drop_' + randomInt(1, 250)).addClass('animate');
				num--;
				snow(num, speed);
			}, speed);
		}
	};

	function snowDrop(num, position) {
		if (num > 0) {
			var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

			$('body').append(drop);
			$('#drop_' + num).css('left', position);
			num--;
			snowDrop(num, randomInt(0, 2560));
		}
	};

function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};