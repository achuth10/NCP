	// Load google charts
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	google.charts.setOnLoadCallback(drawLineChart);

	
	// Draw the chart and set the chart values
	function drawChart() {
	  var data = google.visualization.arrayToDataTable([
	  ['Visitors', 'Visitors per Day'],
	  ['Visitors', 8],
	  ['Registered',2]
	]);
	
	  // Optional; add a title and set the width and height of the chart
	  var options = {'title':'Total visitors', 'width':300, 'height':100};
	
	  // Display the chart inside the <div> element with id="piechart"
	  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	  chart.draw(data, options);
	}

	function drawLineChart(){
			var data = google.visualization.arrayToDataTable([
			  ['Year', 'Revenue', 'Expenses'],
			  ['2017',  1000,      400],
			  ['2018',  1170,      460],
			  ['2019',  660,       1120],
			  ['2020',  1030,      540]
			]);
	
			var options = {
			  title: 'Performance',
			  curveType: 'function',
			  'width':450, 'height':300,
			  legend: { position: 'bottom' }
			};
	
			var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart'));
	
			chart1.draw(data, options);
		  }