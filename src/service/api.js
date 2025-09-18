import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const loginUser =  async(data,navigate,login) => {
  try {
    const response = await axios.post(`${apiUrl}/api/users/login`, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",

      }
    });
    if(response.data.status == 200){
      login(response.data.token);
        navigate("/profile");
    }
    
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Login failed");
  }
};

export const getSubject =  async(setLoading,setSubjects) => {
  setLoading(true);
  try {
    const response = await axios.get(`${apiUrl}/api/subject/progress/topics-status?userId=68c8cab74a234bfddaa8dab9`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
      }
    });
    if(response.data.status == 200){
      setSubjects( response.data.data);
      setLoading(false);
      return response.data.data;
    }
    
  } catch (error) {
    setLoading(false);
    throw error.response?.data || new Error("Login failed");
  }
};

export const progressUpdate =  async(data,getSubject) => {
  try {
    const response = await axios.put(`${apiUrl}/api/subject/progress/update`,data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
      }
    });
    if(response.data.status == 200){
      getSubject()
      return response.data.data;
    }
    
  } catch (error) {
    throw error.response?.data || new Error("Login failed");
  }
};
export const getProgressSummary=  async(setLoading,setProgress) => {
  setLoading(true);
  try {
    const response = await axios.get(`${apiUrl}/api/subject/progress/summary`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
      }
    });
    if(response.data.status == 200){
      setProgress( response.data.data);
      setLoading(false);
      return response.data.data;
    }
    
  } catch (error) {
    setLoading(false);
    throw error.response?.data || new Error("Login failed");
  }
};
