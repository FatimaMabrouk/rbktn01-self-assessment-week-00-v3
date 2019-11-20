// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];


// each function for iteration .
function each(coll,fun) {
	if(Array.isArray(coll)) {
	  for(var i =  0; i < coll.length; i++){
		fun(coll[i],i);
	   }
   } else {
   	   for(var key in coll){
   	 	 fun(coll[key],key);
   	   }
    }	
} 
// check each function ..
function check(array){
	var arr = [];
	each(array,function(element,i){
	     arr.push(element + 1);
	});
  return arr;
	
}
// fillter function 
function filter(array,predicate){
  each(array,function(element,i){
  	if(predicate(element)){
  		acc.push(element);
  	}
  	return acc;
  });

}
// check filter 
function checkFilte(array){
	return filter(array,function(element,prd){
	  return element%2 === 0;
	});
}



var filterFamilyMembers = function (familyTree, truthTest) {
  // declaer empty array  [] to save result;
  var result = [];
  // using recirsion is its array of object ;
  //  using filter function to get the pass truth;
  // for in obj to get the same pred. 
  

};


// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



