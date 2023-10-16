		function resetForm() {
            document.getElementById('surveyForm').reset();
            document.getElementById('popup').style.display = 'none';
        }
		function getSelectedProductService() {
			var PsYes = document.getElementById("PsYes");
			var PsNo = document.getElementById("PsNo");
			
			if(PsYes.checked){
				return PsYes.value;
			}
			else{
				return PsNo.value;
			}
        }
		function getSelectedFriendColleague() {
			var FcYes = document.getElementById("FcYes");
			var FcNo = document.getElementById("FcNo");
			
			if(FcYes.checked){
				return FcYes.value;
			}
			else{
				return FcNo.value;
			}
        }
		function getSelectedRating() {
			var rate1 = document.getElementById("rate1");
			var rate2 = document.getElementById("rate2");
			var rate3 = document.getElementById("rate3");
			if(rate1.checked){
				return rate1.value;
			}
			else if(rate2.checked){
				return rate2.value;
			}
			else{
				return rate3.value;
			}
        }
		
		function submitForm() {
			
            const popupContent = `
				<p>Name: ${document.getElementById('firstName').value}</p>
                <p>Email: ${document.getElementById('email').value}</p>
                <p>Product & Service : ${getSelectedProductService()}</p>
				<p>Friend & colleague : ${getSelectedFriendColleague()}</p>
				<p>Company Rating : ${getSelectedRating()}</p>
				<p>Feedback: ${document.getElementById('feedback').value}</p>
            `;
			document.getElementById('popup').innerHTML = popupContent;
            document.getElementById('popup').style.display = 'block';
        }