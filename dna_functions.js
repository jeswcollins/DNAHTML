function calculate_entropy(seq,dnac,saltc)
/*

*/{
	{
        dnac = typeof dnac !== 'undefined' ? dnac : 1e3;
        saltc = typeof saltc !== 'undefined' ? saltc : 1e5;
	}
    var ds=0;
    var ds=-5.7;
    var first=seq[0];
    var last=seq[seq.length-1];
    if (first == 'A' || first=='T')
        {ds += 6.9}
    if (last == 'A' || last=='T'){
        ds += 6.9}
    for (i=0; i<seq.length-1; i++){
        pair=seq[i]+seq[i+1];
        ds-=entropy_dictionary[pair];
        document.getElementById('out').innerHTML+=pair+": ";
        document.getElementById('out').innerHTML+=ds+", ";
    }
    return ds
}

function calculate_enthalpy(seq,dnac,saltc)
/*
Parameters from Santalucia and Hicks, Annu. Rev. Biophys. Biomol. Struct. 2004
*/{
    {
        dnac = typeof dnac !== 'undefined' ? dnac : 1e3;
        saltc = typeof saltc !== 'undefined' ? saltc : 1e5;
    }
    var dh=0;
    var dh=.2;
    var first=seq[0];
    var last=seq[seq.length-1];
    if (first == 'A' || first=='T')
        {dh += 2.2}
    if (last == 'A' || last=='T'){
        dh += 2.2}
    for (i=0; i<seq.length-1; i++){
        pair=seq[i]+seq[i+1];
        dh-=enthalpy_dictionary[pair];
        document.getElementById('out').innerHTML+=pair+": ";
        document.getElementById('out').innerHTML+=dh+", ";
    }
    return dh
}

function calculateEnthalpy2Seq(seq1,seq2,dnac,saltc,initial)
/*Calculate enthalpy given 2 arbitary sequences, given a position along the first sequence, defaulting to alignment at both initial bases*/
{
    {
        dnac = typeof dnac !== 'undefined' ? dnac : 1e3;
        saltc = typeof saltc !== 'undefined' ? saltc : 1e5;
        initial = typeof initial !== 'undefined' ? initial : 0;
    }
    
}