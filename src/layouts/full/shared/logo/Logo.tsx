import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const Jmbood = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
}));

const Logo = () => {
  return (
    <Jmbood href="/">
      <Image src="/images/logos/BRI_2020.svg.png" alt="logo" height={50} width={134} priority />
    </Jmbood>
  );
};

export default Logo;
