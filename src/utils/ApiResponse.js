class ApiResponse {
    constructor(statusCode,data,message = "succeess"){
        this.statusCode = statusCode
        this.data =data
        this.message = message
        this.success = success
    }
}