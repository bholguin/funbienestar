import {PaletteOptions} from '@mui/material';

declare module '@mui/material/styles'{
    interface PaletteOptions {
        libraries:{
          LAYOUT?: string,
          VALIDATION?: string,
          MAPPING?: string,
        },
        header: {
          text?: string
        },
        texture: {
          '100'?: string
        }
    }
}

export const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#FFFFFF',
  },
  text: {
    primary: '#18243E',
  },
  primary: {
    'main': '#262A31',
    'dark': '#0C305D',
    '900': '#194E88',
    '800': '#336296',
    '700': '#4C75A3',
    '600': '#6589B0',
    '500': '#7F9CBD',
    '400': '#99B0CA',
    '300': '#B1C3D7',
    '200': '#D8E1EB',
    '100': '#E5EBF2',
    '50': '#d8e1eb80',
  },
  success: {
    'main': '#388E3C',
    'light': '#87BB89',
    'dark': '#28593D',
    '100': '#D6E8D7',
  },
  error: {
    'main': '#E30613',
    'light': '#EE6971',
    'dark': '#7E1529',
    '100': '#F9CCCF',
  },
  warning: {
    'main': '#F57C00',
    'light': '#F8B065',
    'dark': '#87501F',
    '100': '#FCE4CB',
  },
  common: {
    black: '#18243E',
    white: '#FFFFFF',
  },
  grey: {
    '900': '#2E3950',
    '800': '#464F64',
    '700': '#5C6577',
    '600': '#747B8B',
    '500': '#8B919E',
    '400': '#A2A7B1',
    '300': '#B9BCC4',
    '200': '#D0D3D8',
    '100': '#E7E8EB',
    '50': '#f3f3f5',
    'A100': '#F8F9FB',
  },
  libraries: {
    LAYOUT: '#43A6C7',
    VALIDATION: '#F06292',
    MAPPING: '#BA68C8',
  },
  header: {
    text: '#003B7C',
  },
  texture: {
    '100': '#E7E8EB',
  },
};
