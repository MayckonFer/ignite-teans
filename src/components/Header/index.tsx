import React from "react";
import { Container, Logo, BackIcon, BackButton } from "./styles";

import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackBotton?: boolean;
};

export function Header({ showBackBotton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackBotton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
