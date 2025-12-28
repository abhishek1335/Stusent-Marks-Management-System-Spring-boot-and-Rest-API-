import API from './axiosConfig';

export const marksService = {
    getStudentResults: (rollNo) => API.get(`/student/${rollNo}`),
    
    uploadPdf: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return API.post('/admin/upload-results', formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });
    }
};
