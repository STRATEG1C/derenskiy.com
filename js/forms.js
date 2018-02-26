var form = document.getElementsByClassName("form")[0];

form.onsubmit = function() {
	var 
		name = {
			elem: this.getElementsByClassName("input-name")[0],
			val: this.getElementsByClassName("input-name")[0].value,
		},

		email = {
			elem: this.getElementsByClassName("input-email")[0],
			val: this.getElementsByClassName("input-email")[0].value,
		},

		text = {
			elem: this.getElementsByClassName("input-text")[0],
			val: this.getElementsByClassName("input-text")[0].value,
		}

	if (name.val.length > 3 && name.val.length != " ") {
		if (email.val.length > 3 && email.val.length != " ") {
			if (text.val.length > 10 && text.val.length != " ") {
				return true;
			} else {
				text.elem.parentNode.classList.add("error");
				return false;
			}
		} else {
			email.elem.parentNode.classList.add("error");
			return false;
		}
	} else {
		name.elem.parentNode.classList.add("error");
		return false;
	}
}

inputs = form.getElementsByClassName("input");

for (i = 0; i < inputs.length; i++) {
    inputs[i].onfocus = function() {
        this.parentNode.classList.remove('error');
    }
}