function update()
{
	var output = "";
	var bish= document.getElementById("bish").value;
	var bosh = document.getElementById("bosh").value;
	var iteration = document.getElementById("iteration").value;
	var text = "";
	
	document.getElementById("bish-text").innerHTML = bish;
	document.getElementById("bosh-text").innerHTML = bosh;
	document.getElementById("iteration-text").innerHTML = iteration;
	
	document.getElementById("bish-nr").innerHTML = bish;
	document.getElementById("bosh-nr").innerHTML = bosh;
	document.getElementById("iteration-nr").innerHTML = iteration;
	
	
	var o = document.getElementById("out");
	o.innerHTML = "";
	
	for (i = 1; i <= document.getElementById("iteration").value; i++) 
	{
		var p = document.createElement("span"); 
		
		var bi = i % bish;
		var bo = i % bosh;
		
		if(bi + bo == 0)
		{
			text = "Bish-Bosh"; 
		}
		else if(bi == 0)
		{
			text = "Bish"; 
		}
		else if(bo == 0)
		{
			text = "Bosh";
		}
		else 
		{
			text = i;
		}
		
		var t = document.createTextNode(text);
		p.appendChild(t);
		
		p.className = "info";
		
		if(text.length > 1)
		{
			p.className += " " + text;
		}
		
		o.appendChild(p);
	}
}