const passwordToggle = {
	data(){
		return {
			show : false
		}
	}
}

const validEmail = {
	methods : {
		isValidMail(email){
			const validity = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return validity.test(String(email).toLowerCase());
		}
	}
}
const base = {
	data(){
		return {
			loading : false
		}
	}
}
const editor = {
	methods : {
		setupEditor(formName, model){
			Object.assign(this[formName] , ...Object.keys(this[formName]).map(k => k in model && { [k]: model[k] }))
		}
	}
}

const fetchServer = {
	data(){
		return {
			failed : false,
			errData : undefined
		}
	}
}

export {passwordToggle, validEmail ,base, editor, fetchServer}