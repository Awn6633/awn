import styled, { css } from 'styled-components'

const subColor = '#D7ECFF'
const mainColor = 'black'

const shrinkLabelStyles = css`
	top: -27px;
	font-size: 16px;
	color: var(--color1);
`

export const GroupContainer = styled.div`
	position: relative;
	margin: 45px 0;
	input[type='password'] {
		letter-spacing: 0.3em;
	}
	input[type='file']::-webkit-file-upload-button {
		visibility: hidden;
	}
`

export const FormInputContainer = styled.input`
	background: none;
	background-color: #fff;
	text-align: right;
	color: var(--color2);
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 20px;
	border: 2px solid var(--color3);
	margin: 25px 0;
	appearance: none;

	&:focus {
		outline: none;
		border: 2px solid #9b9797;
	}
	&:focus ~ label {
		${shrinkLabelStyles}
	}
`

export const FormInputLabel = styled.label`
	color: var(--color3);
	font-size: 18px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 10px;
	font-family: 'Cairo', sans-serif;
	top: 12px;
	transition: 300ms ease all;
	&.shrink {
		${shrinkLabelStyles}
	}
`

export const FormTextArea = styled.textarea`
	background: none;
	background-color: var(--card-background);
	color: ${mainColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border: 2px solid var(--color3);

	margin: 25px 0;
	appearance: none;
	&:focus {
		outline: none;
		border: 2px solid gray;
	}
	&:focus ~ label {
		${shrinkLabelStyles}
	}
`

export const FormError = styled.p`
	font-size: 14px;
	color: red;
	margin: auto;
`
