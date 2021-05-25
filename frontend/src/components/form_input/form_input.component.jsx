import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  FormTextArea,
  FormError,
} from "./form.styles";
const FormInput = ({ onChange, label, ...otherProps }) => (
  <GroupContainer>
    {otherProps.textarea ? (
      <FormTextArea onChange={onChange} {...otherProps} />
    ) : (
      <FormInputContainer onChange={onChange} {...otherProps} />
    )}

    {label ? (
      <>
        <FormInputLabel
          htmlFor={otherProps.name}
          className={`${
            otherProps.value && otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
        <FormError>{otherProps.error}</FormError>
      </>
    ) : null}
  </GroupContainer>
);

export default FormInput;
