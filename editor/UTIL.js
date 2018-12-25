

var UTIL = {};

UTIL.getPList = function(tab, list, cp)
{
	if(typeof tab == "string") {  list.push({ str:tab, path:cp.slice(0) });  return; }
	for(var i=0; i<tab.length; i++)
	{
		cp.push(i);
		UTIL.getPList(tab[i], list, cp);
		cp.pop();
	}
}

UTIL.getWord = function(path, tab)
{
	for(var i=0; i<path.length; i++)
	{
		tab  = tab[path[i]];
		if(tab==null) return null;
	}
	return tab;
}

UTIL.setWord = function(w, path, tab)
{
	for(var i=0; i<path.length-1; i++)  tab  = tab[path[i]];
	return tab[path[path.length-1]] = w;
}

UTIL.tryClear = function(tab)
{
	if(tab==null) return null;
	if(typeof tab == "string") return tab;
	
	for(var i=tab.length-1; i>=0; i--)
	{
		var nval = UTIL.tryClear(tab[i]);
		if(nval==null) tab.pop();
		else return tab;
	}
	return null;
}