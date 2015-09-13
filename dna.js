var s ='ATATATCAGGGC';
//document.getElementById('out').innerHTML+='<br><h2>Entropy</h2>'
//calculate_entropy(s)
//document.getElementById('out').innerHTML+='<br><h2>Enthalpy</h2>'
//calculate_enthalpy(s)
document.getElementById('out').innerHTML+='<h4>OUTPUT:</h4>'
//document.getElementById('out').innerHTML+=MATCH_NN_PARAMS_ARRAYS.AA_TT
//document.getElementById('out').innerHTML+=MATCH_NN_PARAMS_OBJECTS_NOSTRINGS.AA_TT.G
for (i in MATCH_NN_PARAMS_OBJECTS_NOSTRINGS)
{
	document.getElementById('out').innerHTML+='<br>'+i;
}