import { toast } from "react-toastify";

 const verifyResponse = (
  state: boolean,
  message: string,
  
 ) => {
     if (state) {
        toast.success(message);
    } else {
        toast.error("Invalid response from server");
    }
  
};

export default verifyResponse;
