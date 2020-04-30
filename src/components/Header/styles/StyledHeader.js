import styled from "@emotion/styled";

export const Header = styled.header({
  width: "100%",
  backgroundColor: "#076fe6",
});

export const Wrapper = styled.div({
  maxWidth: 1024,
  width: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
});

export const Nav = styled.nav({
  maxWidth: 300,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  h2: {
    color: "white",
  },
  a: {
    color: "white",
  },
});
