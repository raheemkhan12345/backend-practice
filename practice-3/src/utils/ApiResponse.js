class ApiResponse {
    constructor(statusCode, data, message = "something went wrong") {
        this.statusCode = statusCode;
    }
}