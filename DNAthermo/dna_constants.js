/*In python I had dictionaries like this:
dhd04=dict({'AA':7.6,'TT':7.6,'AT':7.2,'TA':7.2,'CA':8.5,'TG':8.5,'GT':8.4,'AC':8.4,'CT':7.8,'AG':7.8,'GA':8.2,'TC':8.2,'CG':10.6,'GC':9.8,'GG':8.0,'CC':8.0})
#in kcal mol-1. These values are from Santalucia 2004

In javascript, I rewrite them following (http://stackoverflow.com/a/11789703/895065) Javascript Object Notation (JSON):
kcal mol-1: */
//enthalpy_dictionary={'AA':7.6,'TT':7.6,'AT':7.2,'TA':7.2,'CA':8.5,'TG':8.5,'GT':8.4,'AC':8.4,'CT':7.8,'AG':7.8,'GA':8.2,'TC':8.2,'CG':10.6,'GC':9.8,'GG':8.0,'CC':8.0}
/*cal K-1 mol-1: */
//entropy_dictionary={'AA':21.3,'TT':21.3,'AT':20.4,'TA':21.3,'CA':22.7,'TG':22.7,'GT':22.4,'AC':22.4,'CT':21.0,'AG':21.0,'GA':22.2,'TC':22.2,'CG':27.2,'GC':24.4,'GG':19.9,'CC':19.9}
//MATCH_ENTHALPIES={'AA/TT':-7.6,'TT/AA':-7.6,'AT/TA':-7.2,'TA/AT':-7.2,'CA/GT':-8.5,'TG/AC':-8.5,'GT/CA':-8.4,'AC/TG':-8.4,'CT/GA':-7.8,'AG/TC':-7.8,'GA/CT':-8.2,'TC/AG':-8.2,'CG/GC':-10.6,'GC/CG':-9.8,'GG/CC':-8.0,'CC/GG':-8.0}
/*"MATCH_NN_PARARMS from The Thermodynamics of DNA Structural Motifs" SantaLucia and Hicks, Annu. Rev. Biophys. Biomol. Struct. 2004. 33:415–40
{DelH,DelS,DelG37}*/
//MATCH_NN_PARAMS_ARRAYS={AA_TT:{-7.6,-21.3,-1.00},'AT/TA':{-7.2,-20.4,-0.88},'TA/AT':{-7.2,-21.3,-0.58},'CA/GT':{-8.5,-22.7,-1.45},'GT/CA':{-8.4,-22.4,-1.44},'CT/GA':{-7.8,-21.0,-1.28},'GA/CT':{-8.2,-22.2,-1.30},'CG/GC':{-10.6,-27.2,-2.17},'GC/CG':{-9.8,-24.4,-2.24},'GG/CC':{-8.0,-19.9,-1.84},'Initiation':{0.2,-5.7,1.96},'Terminal AT penalty':{2.2,6.9,0.05},'Symmetry correction':{0.0,-1.4,0.43}}
MATCH_NN_PARAMS_OBJECTS_NOSTRINGS={AA_TT:{H:-7.6,S:-21.3,G:-1.00},AT_TA:{H:-7.2,S:-20.4,G:-0.88},TA_AT:{H:-7.2,S:-21.3,G:-0.58},CA_GT:{H:-8.5,S:-22.7,G:-1.45},GT_CA:{H:-8.4,S:-22.4,G:-1.44},CT_GA:{H:-7.8,S:-21.0,G:-1.28},GA_CT:{H:-8.2,S:-22.2,G:-1.30},CG_GC:{H:-10.6,S:-27.2,G:-2.17},GC_CG:{H:-9.8,S:-24.4,G:-2.24},GG_CC:{H:-8.0,S:-19.9,G:-1.84},Initiation:{H:0.2,S:-5.7,G:1.96},TerminalATPenalty:{H:2.2,S:6.9,G:0.05},SymmetryCorrection:{H:0.0,S:-1.4,G:0.43}}
//={Initiation:0.2,Terminal AT penalty:2.2,Symmetry correction:0.0}
/*AACCGGTT_MISMATCHES from Peyret et al., Biochemistry Vol 38, 1999. Given in kcal/mol and for 1 M NaCl pH 7, Table 2
{delta H kcal/mol, +/- delta H kcal/mol, delta H eu, +/- delta H eu, delta G 37 kcal/mol, delta G 37 +/- kcal/mol}
DelS-=(DelH--DelG-37)/310.15
1 e.u.= 4.184 J K-1 mol-1, 1 kcal=4184 J.*/     
//AACCGGTT_MISMATCHES={'AA_TA':{1.2,2.5,1.7,8.0,0.61,0.13},'CA_GA':{-0.9,2.3,-4.2,:7.3,0.43,0.17},'GA_CA':{-2.9,4.1,-9.8,13.1,0.17,0.23},'TA_AA':{4.7,2.4,12.9,7.7,0.69,0.05},'AC_TC':{0.0,2.1,-4.4,6.5,1.33,0.09},'CC_GC':{-1.5,1.1,-7.2,4.7,0.70,0.50},'GC_CC':{3.6,3.2,8.9,9.8,0.79,0.09},'TC_AC':{6.1,1.1,16.4,3.5,1.05,0.06},'AG_TG':{-3.1,1.3,-9.5,4.0,-0.13,0.09},'CG_GG':{-4.9,1.1,-15.3,3.3,-0.11,0.11},'GG_CG':{-6.0,2.5,-15.8,7.8,-1.11,0.13},'TG_AG':{1.6,0.8,3.6,2.5,0.44,0.14},'AT_TT':{-2.7,4.1,-10.8,13.1,0.69,0.23},'CT_GT':{-5.0,1.4,-15.8,13.9,-0.12,0.23},'GT_CT':{-2.2,1.1,-8.4,3.2,0.45,0.05},'TT_AT':{0.2,1.8,-1.5,5.8,0.68,0.08}};
/*GA_MISMATCHES from Allawi and Santalucia Biochemistry, Vol. 37, No. 8, 1998, 1 M NaCl, Table 4
{delH kcal/mol, delS eu, delG 37 kcal/mol}*/
//GA_MISMATCHES={'AA/TG':{-0.6,-2.3,0.14},'AG/TA':{-0.7,-2.3,0.02},'CA/GG':{-0.7,-2.3,0.03},'CG/GA':{-4.0,-13.2,0.11},'GA/CG':{-0.6,-1.0,-0.25},'GG/CA':{0.5,3.2,-0.52},'TA/AG':{0.7,0.7,0.42},'TG/AA':{3.0,7.4,0.74}};
/*AC_MISMATCHES from Biochemistry, Vol. 37, No. 26, 1998 pg 9441, Table 4
{delH kcal/mol pH 7.0, del H pH 5.0, del S eu pH 7, pH 5, del G 37 kcal/mol pH 7, pH 5}*/
//AC_MISMATCHES={'AA/TC':{2.3,-0.8,4.6,-3.8,0.88,0.39},'AC/TA':{5.3,-6.3,14.6,-20.2,0.77,-0.02},'CA/GC':{1.9,-4.2,3.7,-13.6,0.75,0.02},'CC/GA':{0.6,-1.3,-0.6,-4.9,0.79,0.23},'GA/CC':{5.2,-3.3,14.2,-10.3,0.81,-0.10},'GC/CA':{-0.7,-4.9,-3.8,-14.7,0.47,-0.33},'TA/AC':{3.4,-2.1,8.0,-7.6,0.92,0.26},'TC/AA':{7.6,2.2,20.2,4.8,1.33,0.70}};
/*GT_MISMATCHES from Allawi and SantaLucia Biochemistry, Vol. 36, No. 34, 1997, pg 10583, Table 1
{delH-(kcal/mol),H+/-,delS-(eu),S+/-,delG-37(kcal/mol),G+/-}*/
//GT_MISMATCHES={'AA/TT':{-7.9,0.2,-22.2,0.8,-1.00,0.01},'AT/TA':{-7.2,0.7,-20.4,2.4,-0.88,0.04},'TA/AT':{-7.2,0.9,-21.3,2.4,-0.58,0.06},'CA/GT':{-8.5,0.6,-22.7,2.0,-1.45,0.06},'GT/CA':{-8.4,0.5,-22.4,2.0,-1.44,0.04},'CT/GA':{-7.8,0.6,-21.0,2.0,-1.28,0.03},'GA/CT':{-8.2,0.6,-22.2,1.7,-1.30,0.03},'CG/GC':{-10.6,0.6,-27.2,2.6,-2.17,0.05},'GC/CG':{-9.8,0.4,-24.4,2.0,-2.24,0.03},'GG/CC':{-8.0,0.9,-19.9,1.8,-1.84,0.04},'init. w/term. G-C':{0.1,1.1,-2.8,0.2,0.98,0.05},'init. w/term. A-T':{2.3,1.3,4.1,0.2,1.03,0.05},'symmetry correction':{0,NaN,-1.4,NaN,0.4,NaN}};
/*CT_MISMATCHES from Allawi and Santalucia, Nucleic Acids Research, 1998, Vol. 26, No. 11, pg 2699 Table 4 (1M NaCl)
Note: here "The uncertainty in measured ∆G37, ∆Hand ∆S parameters were assumed to be 4%, 8% and 8% respectively. "
{∆H(kcal/mol),∆S(e.u),∆G37(kcal/mol)}*/
//CT_MISMATCHES={'AC/TT':{0.7,0.2,0.64},'AT/TC':{-1.2,-6.2,0.73},'CC/GT':{-0.8,-4.5,0.62},'CT/GC':{-1.5,-6.1,0.40},'GC/CT':{2.3,5.4,0.62},'GT/CC':{5.2,13.5,0.98},'TC/AT':{1.2,0.7,0.97},'TT/AC':{1.0,0.7,0.75}};
//Combine above JSON data into one each for del H, del S, del G37
//DeltaG37
DELTAG37={}