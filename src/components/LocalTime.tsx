import React from "react";
import styled from "styled-components";
import Typography, { Body } from "./Typography";

const getCurrentTime = () => {
  const now = new Date();

  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();

  const utcPlus2Hours = (utcHours + 2) % 24;
  const utcPlus2Minutes = utcMinutes;

  return `${utcPlus2Hours}:${utcPlus2Minutes}`;
};

const LocalTime = () => (
  <Wrapper>
    <Typography variant={Body.MD}>
      Local time: <TimeSpan>{getCurrentTime()} (UTC+2)</TimeSpan>
    </Typography>
  </Wrapper>
);

export default LocalTime;

const Wrapper = styled.div``;

const TimeSpan = styled.span`
  opacity: 60%;
`;
