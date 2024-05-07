import { toast } from "react-toastify";
//this function will verify the response from the server
const verifyResponse = (
    state: boolean,
    //   message: string,

) => {
    if (state) {
        // toast.success(message);
    } else {
        toast.error("Invalid response from server");
    }

};

export default verifyResponse;
