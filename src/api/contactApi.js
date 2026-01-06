import axiosInstance from "../axiosInstance";

export const submitContactForm = async (data) => {
    const response = await axiosInstance.post("/new/contact/", data);
    return response.data;
};
