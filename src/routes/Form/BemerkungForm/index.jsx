import React, { useState } from "react";
import "./BemerkungForm.scss";
import RightIcon from "../../../assets/icons/right-sm.svg";
import LeftIcon from "../../../assets/icons/left-sm.svg";
import CloseIcon from "../../../assets/icons/close.svg";

export default function BemerkungForm(props) {
  const { setMypages, formData, setFormData } = props;

  // Removed the selectedImageURL state since no preview is necessary.
  const [formErrors, setFormErrors] = useState({});

  const handleFieldDetails = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      uploadPhotos: [...(prevData.uploadPhotos || []), ...files],
    }));
  };

  const handleRemoveUploadedPhoto = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      uploadPhotos: prevData.uploadPhotos.filter((_, i) => i !== index),
    }));
  };

  const handleNextData = () => {
    // Proceed to the next step without checking for errors.
    setMypages("Stepfive");
  };

  return (
    <div>
      <div className="bemerkung-form-design">
        <div>
          <p>Haben Sie eine Bemerkung?</p>
          <div className="input input-bottom-align">
            <input
              type="text"
              placeholder="Bemerkungen"
              name="remarks"
              value={formData.remarks || ''}
              onChange={handleFieldDetails}
            />
            {formErrors.remarks && (<span className="error-message">{formErrors.remarks}</span>)}
          </div>
          <p className="new-title">Haben Sie Fotos, die uns bei der Lieferung unterstützen?</p>
          <div className="input">
            <input
              type="file"
              multiple
              name="uploadPhotos"
              onChange={handlePhotoUpload}
              // className="file-input" (if you have specific styles for the input)
            />
            {formErrors.uploadPhotos && (
              <span className="error-message">
                {formErrors.uploadPhotos}
              </span>
            )}
          </div>
          {formData.uploadPhotos && formData.uploadPhotos.map((file, index) => (
            <div key={index} className="uploaded-photo">
              <span className="img-name">{file.name}</span>
              <button type="button" onClick={() => handleRemoveUploadedPhoto(index)}>
                <img src={CloseIcon} alt="Remove" />
              </button>
            </div>
          ))}
          <div className="two-button-alignment">
            <div className="icon-text" onClick={() => setMypages("Stepthree")}>
              <img src={LeftIcon} alt="LeftIcon" />
              <span>Zurück</span>
            </div>
            <div
              className="icon-text"
              onClick={handleNextData}
            >
              <span>Weiter</span>
              <img src={RightIcon} alt="RightIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
