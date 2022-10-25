import { useState } from 'react';
import styled from 'styled-components';
import { TEXTS } from '../../helpers/global';

const Title = styled.h1``;

const Subtitle = styled.h2``;

const FormContainer = styled.form``;

const Input = styled.input``;

function LoginForm() {
  const [input, setInput] = useState('');

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Bonjour ' + input);
    setInput('')
  };

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <Title>{TEXTS.titleLogin}</Title>
      <Subtitle>{TEXTS.connexion}</Subtitle>
      <Input
        required
        type='text'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={TEXTS.placeholderLogin}
      />
      <Input
        type='submit'
        value={TEXTS.submitLogin}
      />
    </FormContainer>
  );
};

export default LoginForm;