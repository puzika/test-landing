import { css } from "styled-components";
import type { RuleSet } from "styled-components";
import type { Styles } from "styled-components/dist/types";

type Devices = 'mbmin' | 'mb' | 'tbmin' | 'tb' | 'lp' ;

export const device: Record<Devices, number> = {
  mbmin: 380,   // for small screen mobile
  mb: 600,   // for mobile screen 
  tbmin: 750, //for small tablets
  tb: 904,   // for tablets
  lp: 1200,  // for laptops
}

type Responsive = Record<Devices, (style: Styles<object>) => RuleSet<Object>>; 

export const responsive: Responsive = {
  mbmin: (style: Styles<object>) => css`
    @media only screen and (max-width: ${device.mbmin}px) {
      ${css(style)};
    }
  `,
  mb: (style: Styles<object>) => css`
    @media only screen and (max-width: ${device.mb}px) {
      ${css(style)};
    }
  `,
  tbmin: (style: Styles<object>) => css`
    @media only screen and (max-width: ${device.tbmin}px) {
      ${css(style)};
    }
  `,
  tb: (style: Styles<object>) => css`
      @media only screen and (max-width: ${device.tb}px) {
      ${css(style)};
    }
  `,
  lp: (style: Styles<object>) => css`
    @media only screen and (max-width: ${device.lp}px) {
      ${css(style)};
    }
  `,
}