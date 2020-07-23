import {
	makeGetRequest,
	makePostRequest, makePutRequest
} from "./http-service";
import config from "../config/index";
import {endPoints} from "../config/end-points";

/**
 * register
 * @param {object} data email and password
 */
export const register = (data) => {
	return new Promise((resolve, reject) => {
		makePostRequest(config.baseUrl + endPoints.register, false, data)
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};



/**
 * verification
 * @param {object} data email and password
 */
export const verification = (data) => {
	return new Promise((resolve, reject) => {
		makePutRequest(config.baseUrl + endPoints.verification, false, data)
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};

/**
 * login
 * @param {object} data email and password
 */
export const login = (data) => {
	return new Promise((resolve, reject) => {
		makePostRequest(config.baseUrl + endPoints.login, false, data)
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};

/**
 * Facebook login
 * @param {object} data email and password
 */
export const fblogin = (data) => {
	return new Promise((resolve, reject) => {
		makePostRequest(config.baseUrl + endPoints.fblogin, false, data)
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};

/**
 * fotgotPassword
 * @param {*} param0 email
 */
export const fotgotPassword = ({email}) => {
	return new Promise((resolve, reject) => {
		makePostRequest(config.baseUrl + endPoints.forgotPassword, false, {
			username: email
		})
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};

/**
 * getAllUsers - to get the list of all users
 */
export const getAllUsers = () => {
	return new Promise((resolve, reject) => {
		makeGetRequest(config.baseUrl + endPoints.usersLoad, true)
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};

/**
 * getUserDetails - to get the details of the user by user ID
 * @param {string} id the id of the user
 */
export const getUserDetails = (data) => {
	return new Promise((resolve, reject) => {
		makeGetRequest(config.baseUrl + endPoints.userLoad, true, data)
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};


/**
 * updateUser - to update the user details
 * @param {string} id id of the user
 * @param {object} data information to be updated with
 */
export const updateUser = (data) => {
	return new Promise((resolve, reject) => {
		makePostRequest(config.baseUrl + endPoints.userUpdate, true, data)
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};


/**
 * getBanner - to get the Banner
 */
export const getBanner = () => {
	return new Promise((resolve, reject) => {
		makeGetRequest(config.baseUrl + endPoints.bannerLoad, true)
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};

/**
 * updateBanner - to update the Banner
 * @param object that has banner_url
 */
export const uploadBanner = (data) => {
	return new Promise((resolve, reject) => {
		makePostRequest(config.baseUrl + endPoints.bannerUpload, true, data)
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				console.log("API call error: ", e);
				reject(e);
			});
	});
};

