function getFormvalue() {
    //Write your code here
    const fname = document.getElementsByTagName("form")[0].fname.value;
	const lname = document.getElementsByTagName("form")[0].lname.value;
	alert(`${fname} ${lname}`);
}
