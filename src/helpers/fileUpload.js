export const fileUpload = async(file) => {

    try {

        const url = "https://api.cloudinary.com/v1_1/dor9c4bok/upload";

        const formData = new FormData();
        formData.append("upload_preset", "react-journal");
        formData.append("file", file);
        
        const option = {
            method: "POST",
            body: formData
        }

        const result = await fetch(url, option);
        
        if(result.ok) {

            const cloudResult = await  result.json();

            return cloudResult.secure_url;

        } else {
            throw await result.json();
        }

    } catch (error) {
        throw error;
    }

}