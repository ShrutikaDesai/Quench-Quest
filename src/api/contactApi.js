import axiosInstance from "../axiosInstance";

export const submitContactForm = async (data) => {
    const response = await axiosInstance.post("/contact/", data);
    return response.data;
};
