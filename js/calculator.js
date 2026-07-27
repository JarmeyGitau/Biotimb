function calculateCost(){


let users =
Number(document.getElementById("users").value);



let property =
document.getElementById("property").value;



let usage =
document.getElementById("usage").value;



let result =
document.getElementById("result");





if(users <= 0 || isNaN(users)){


result.innerHTML =

"Please enter a valid number of users.";


return;

}






let capacity;

let cost;





if(users <= 10){


capacity =
"1,000 - 2,000 Litres";


cost =
"KES 80,000 - 150,000";


}

else if(users <= 30){


capacity =
"3,000 - 5,000 Litres";


cost =
"KES 150,000 - 300,000";


}


else if(users <= 80){


capacity =
"6,000 - 10,000 Litres";


cost =
"KES 300,000 - 600,000";


}


else{


capacity =
"10,000+ Litres";


cost =
"KES 600,000+";


}






if(usage==="high"){


cost +=
" (High usage may require additional capacity)";


}





result.innerHTML = `

<h3>
Estimated Solution
</h3>


<br>


<strong>Property:</strong>
${property}


<br><br>


<strong>Users:</strong>
${users}


<br><br>


<strong>Recommended Capacity:</strong>
${capacity}


<br><br>


<strong>Estimated Installation:</strong>
${cost}


<br><br>


<a class="btn"
href="https://wa.me/2547912332454"
target="_blank">

Request Final Quote

</a>

`;



}