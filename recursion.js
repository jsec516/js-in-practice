var hanoi = function(disc, src, aux, dst) {
	if(disc>0){
		hanoi(disc-1, src, dst, aux);
		console.log('Move disc '+disc+' from '+src+' to '+dst);
		hanoi(disc-1, aux, src, dst);
	}
};

hanoi(3, 'Src', 'Aux', 'Dst');
// Move disc 1 from Src to Dst
// Move disc 2 from Src to Aux
// Move disc 1 from Dst to Aux
// Move disc 3 from Src to Dst
// Move disc 1 from Aux to Src
// Move disc 2 from Aux to Dst
// Move disc 1 from Src to Dst

