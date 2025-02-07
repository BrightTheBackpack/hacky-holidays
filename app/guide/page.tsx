"use client";
import { keyframes } from '@emotion/react'

// import Image from "next/image";
import {
  Box,
  Button,
  Image,
  Flex,
  Badge,
  Container,
  Grid,
  Heading,
  Text,
  Card
} from 'theme-ui'
const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

export default function guide() {
  return (
   <div>
    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
   </div>
  );
}
