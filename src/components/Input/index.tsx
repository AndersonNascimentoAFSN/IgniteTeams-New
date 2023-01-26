import { TextInputProps } from "react-native";
import { Container } from "./styles";

type InputProps  = Omit<TextInputProps, 'placeholderTextColor'>

export function Input({...props}: InputProps) {
  return (
    <Container {...props}/>
  )
}
